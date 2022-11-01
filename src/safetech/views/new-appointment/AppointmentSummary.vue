<template>
  <div>
    <b-card title="Resumen de la cita">
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Especialidad"
          >
            <b-form-input
              v-model="technicalSpecialized"
              disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Técnico"
          >
            <b-form-input

              disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Fecha"
          >
            <b-form-datepicker disabled />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            label="Turno"
          >
            <b-form-select disabled />
          </b-form-group>

        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Pais"
          >
            <b-form-select v-model="countrySelected"/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            label="Ciudad"
          >
            <b-form-select v-model="citySelected"/>
          </b-form-group>

        </b-col>
        <b-col>
          <b-form-group
            label="Calle"
          >
            <b-form-select v-model="streetSelected" />
          </b-form-group>

        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Descripción"
          >
            <b-form-textarea
              v-model="problemDescription"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-button @click="createAppointment">
          Guardar
        </b-button>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NewAppointmentService from '@/safetech/views/new-appointment/new-appointment.service'

export default {
  data() {
    return {
      technicalSpecialized: '',
      problemDescription: '',
      streetSelected: '',
      countrySelected: '',
      citySelected: '',
    }
  },
  computed: {
    ...mapGetters({
      applianceSelected: 'NewAppointmentStore/applianceSelected',
      technicalSelected: 'NewAppointmentStore/technicalSelected',
      currentUser: 'NewAppointmentStore/technicalSelected',
    }),
  },
  methods: {
    async createAppointment() {
      const params = {
        problemDescription: this.problemDescription,
        scheduledAt: '2022-10-31T06:05:01.910Z',
        address: {
          street: this.streetSelected,
          city: this.citySelected,
          country: this.countrySelected,
        },
        status: 'SCHEDULED',
        reparationCost: {
          amount: 0,
          currency: 'string',
        },
        paymentStatus: 'SUCCEED',
      }

      const data = await NewAppointmentService.createAppointment(this.applianceSelected.id, this.currentUser.id, this.technicalSelected.id, params)
    },
  },
}
</script>

<style scoped>

</style>
