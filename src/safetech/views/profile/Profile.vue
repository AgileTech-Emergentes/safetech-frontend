<template>
  <b-card title="Informacion de tu perfil">
    <validation-observer ref="form">
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Direccion:"
          >
            <validation-provider
              v-slot="{ errors }"
              name="address"
              rules="required"
            >
              <b-form-input
                :state="errors[0] ? false : null"
                disabled
              />
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <b-form-group
            label="Telefono:"
          >
            <validation-provider
              v-slot="{ errors }"
              name="phone"
              rules="required"
            >
              <b-form-input
                :state="errors[0] ? false : null"
                disabled
              />
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            label="DNI:"
          >
            <validation-provider
              v-slot="{ errors }"
              name="dni"
              rules="required"
            >
              <b-form-input
                :state="errors[0] ? false : null"
                disabled
              />
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            label="Fecha de nacimiento:"
          >
            <validation-provider
              v-slot="{ errors }"
              name="birthday"
              rules="required"
            >
              <b-form-datepicker
                :state="errors[0] ? false : null"
                disabled
              />
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-form-group
            label="Correo electronico:"
          >
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required"
            >
              <b-form-input
                :state="errors[0] ? false : null"
                disabled
              />
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group
            label="Contraseña:"
          >
            <validation-provider
              v-slot="{ errors }"
              name="password"
              rules="required"
            >
              <b-form-input
                :state="errors[0] ? false : null"
                disabled
              />
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>
    </validation-observer>
    <b-row>
      <b-col class="w-100">
        <div class="d-flex justify-content-end">
          <b-button variant="primary">Actualizar</b-button>
          <b-button variant="primary" class="ml-1">Guardar</b-button>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'ProfileVue',
}
</script>

<style scoped>

</style>
