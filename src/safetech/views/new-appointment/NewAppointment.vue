<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-input-group>
          <b-form-input placeholder="Buscar electrodoméstico" />
          <template #append>
            <b-button variant="primary"><feather-icon
              icon="SearchIcon"
            /></b-button>
          </template>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <pre>{{appliances}}</pre>
      <b-col cols="12">
        <b-card
          v-for="i in 4"
          :key="i"
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HeaderSlot from '@/safetech/commons/HeaderSlot.vue'
import NewAppointmentService from '@/safetech/views/new-appointment/new-appointment.service'

export default {
  components: {
    HeaderSlot,
  },
  data() {
    return {
      appliances: [],
    }
  },
  async created() {
    await this.getAppliances()
  },
  methods: {
    async getAppliances() {
      const data = await NewAppointmentService.getAppliances()
      console.log('data ', data)
      if (data.status === 200) {
        this.appliances = data.data
      }
    },
  },
}
</script>

<style scoped>

</style>
