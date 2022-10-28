<template>
  <div class="mt-5" >
    <b-row class="d-flex  align-content-center justify-content-center mb-3 ">
      <b-img
          :src="image"

          alt="Coming Soon"
          class="img-fluid"
      />
    </b-row>
    <b-row class="d-flex flex-column  align-content-center justify-content-center mb-3">

        <h3 class="text-center">Todavía no tienes citas.</h3>

      <h3 class="text-center">
      ¿Te gustaría agendar una?</h3>
    </b-row>
    <b-row class="d-flex  align-content-center justify-content-center">
      <b-button variant="primary-safetech" @click="newAppointment">Agendar una cita</b-button>
    </b-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('@/assets/images/safetech/img.png'),
    }
  },
  methods: {
    newAppointment() {
      this.$router.push({ name: 'choose-appliance' })
    },
  },

}
</script>

<style scoped>

</style>
