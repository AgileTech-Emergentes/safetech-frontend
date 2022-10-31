<template>
  <div>
    <b-row>
      <b-col>
        <b-form-datepicker
          v-model="dateSelected"
          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          locale="en"
          @input="getTechnicalsByApplianceIdAndDate"
        />
      </b-col>
      <b-col>
        <b-form-select
          v-model="shiftSelected"
          :options="shiftOptions"
          @input="getTechnicalsByApplianceIdAndDate"
        />
      </b-col>
      <b-col>
        <b-button variant="primary" @click="getTechnicalsByApplianceId">Reset</b-button>
      </b-col>
      <b-col>
        <!--        <div class="d-flex w-100 justify-content-end">
          <b-button variant="success">
            Ver resumen
          </b-button>
        </div>-->
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col
        cols="12"
        class="d-flex"
      >
        <div
          v-for="(technical, index) in technicals"
          :key="index"
          class="d-flex"
        >
          <b-card
            :title="technical.fullName.firstName + ' ' + technical.fullName.lastName"
            :img-src="technical.profilePictureUrl"
            img-alt="Image"
            img-top
            img-height="120px"
            img-width="120px"
            tag="article"
            style="width: 16rem;"
            class="mb-2 mr-1 cursor-pointer"
            @click="selectTechnical(technical)"
          >
            <b-button
              variant="primary"
              size="sm"
            >
              See Profile
            </b-button>
          </b-card>
        </div>

      </b-col>
    </b-row>
  </div>
</template>

<script>
import HeaderSlot from '@/safetech/commons/HeaderSlot.vue'
import NewAppointmentService from '@/safetech/views/new-appointment/new-appointment.service'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    HeaderSlot,
  },
  data() {
    return {
      technicals: [],
      dateSelected: '',
      shiftSelected: null,
      shiftOptions: [
        { value: null, text: 'Selecciona un horario' },
        { value: 1, text: 'Mañana' },
        { value: 2, text: 'Tarde' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      applianceSelected: 'NewAppointmentStore/applianceSelected',
    }),
    dateSelectedFormatted() {
      return `${this.dateSelected}T00:00:00.000Z`
    },
  },
  async created() {
    await this.getTechnicalsByApplianceId()
  },
  methods: {
    ...mapActions({
      A_SET_TECHNICAL_SELECTED: 'NewAppointmentStore/A_SET_TECHNICAL_SELECTED',
    }),
    async getTechnicalsByApplianceId() {
      const data = await NewAppointmentService.getTechnicalsByApplianceId(this.applianceSelected.id)
      if (data.status === 200) {
        this.technicals = data.data
      }
    },
    async getTechnicalsByApplianceIdAndDate() {
      const data = await NewAppointmentService.getTechnicalsByApplianceIdAndDate(this.applianceSelected.id, this.shiftSelected, this.dateSelectedFormatted)
      if (data.status === 200) {
        this.technicals = data.data
      }
    },
    selectTechnical(item) {
      this.A_SET_TECHNICAL_SELECTED(item)
      this.$router.push({ name: 'appointment-summary' })
    },
  },
}
</script>

<style scoped>

</style>
