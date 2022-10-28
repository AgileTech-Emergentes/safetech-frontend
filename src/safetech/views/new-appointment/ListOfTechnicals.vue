<template>
  <div>
    <b-row>
      <b-col>
        <b-form-datepicker />
      </b-col>
      <b-col>
        <b-form-select />
      </b-col>
      <b-col />
      <b-col>
        <div class="d-flex w-100 justify-content-end">
          <b-button variant="success">
            Ver resumen
          </b-button>
        </div>
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
          />
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
    }
  },
  computed: {
    ...mapGetters({
      applianceSelected: 'NewAppointmentStore/applianceSelected',
    }),
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
    selectTechnical(item) {
      this.A_SET_TECHNICAL_SELECTED(item)
      this.$router.push({ name: 'choose-technical' })
    },
  },
}
</script>

<style scoped>

</style>
