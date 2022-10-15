<template>
  <div >
    <b-row class="d-flex  align-content-center justify-content-center mb-1">
      <b-img
          :src="image"

          alt="Coming Soon"
          class="img-fluid"
      />
    </b-row>
    <b-row class="d-flex  align-content-center justify-content-center">
        <span>Todavía no tienes citas.
      ¿Te gustaría agendar una?</span>
    </b-row>
    <b-row class="d-flex  align-content-center justify-content-center">
      <b-button>Agendar una cita</b-button>
    </b-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('@/assets/images/elements/apple-watch.png'),
    }
  },

}
</script>

<style scoped>

</style>
