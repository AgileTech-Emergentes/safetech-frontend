<template>
  <div class="mt-2">
    <div
      v-for="(item, index) in appointments"
      :key="index"
    >
      <b-card :header="item.scheduledAt" header-tag="header" :title="'Cita con ' + item.technical.fullName.firstName + ' ' + item.technical.fullName.lastName">
        <template #header>
          {{ formattedDate(item.scheduledAt) }}
        </template>
        <b-card-text>
          Reparacion de {{ item.appliance.name }}
        </b-card-text>
        <div class="d-flex justify-content-end">
          <b-button v-if="$route.meta.tab === 1" href="#" variant="danger">Cancelar</b-button>
          <b-button v-if="$route.meta.tab === 2" href="#" variant="success">Dejar comentarios</b-button>
          <b-button v-if="$route.meta.tab === 2" href="#" variant="info" class="ml-2">Ver reporte</b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import MyAppointmentsService from '@/safetech/views/pending-past-appointments/my-appointments.service'
import moment from "moment";

export default {
  name: 'MyAppointmentsCards',
  data() {
    return {
      userData: '',
      appointments: [],
    }
  },
  async created() {
    this.userData = JSON.parse(localStorage.getItem('userData'))
    await this.getAppointmentsByIdAndStatus()
  },
  methods: {
    async getAppointmentsByIdAndStatus() {
      const status = this.$route.meta.tab === 1 ? 'SCHEDULED' : 'FINISHED'
      const data = await MyAppointmentsService.getAppointmentsByIdAndStatus(this.userData.id, status)
      if (data.status === 200) {
        this.appointments = data.data
      }
    },
    formattedDate(date) {
      return moment(date).format('MM/DD/YYYY h:mm A')
    },
  },
}
</script>

<style scoped>

</style>
