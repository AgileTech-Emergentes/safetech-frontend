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
              :value="technicalSelected.fullName.firstName + ' ' + technicalSelected.fullName.lastName"
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
            <b-form-datepicker disabled/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            label="Turno"
          >
            <b-form-select disabled/>
          </b-form-group>

        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
              label="Pais"
          >
            <b-form-select disabled/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
              label="Ciudad"
          >
            <b-form-select disabled/>
          </b-form-group>

        </b-col>
        <b-col>
          <b-form-group
              label="Calle"
          >
            <b-form-select disabled/>
          </b-form-group>

        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      technicalSpecialized: '',
    }
  },
  computed: {
    ...mapGetters({
      applianceSelected: 'NewAppointmentStore/applianceSelected',
      technicalSelected: 'NewAppointmentStore/technicalSelected',
    }),
  },
}
</script>

<style scoped>

</style>
