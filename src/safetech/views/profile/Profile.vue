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
                v-model="userToUpdate.address"
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
                v-model="userToUpdate.phone"
                :state="errors[0] ? false : null"
                disabled
                type="number"
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
                v-model="userToUpdate.dni"

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
                v-model="userToUpdate.birthdayDate"

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
                v-model="userToUpdate.email"

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
                v-model="userToUpdate.password"
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
          <b-button variant="primary">
            Actualizar
          </b-button>
          <b-button
            variant="primary"
            class="ml-1"
          >
            Guardar
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import ProfileService from '@/safetech/views/profile/profile.service'

export default {
  data() {
    return {
      userToUpdate: {
        id: '',
        fullName: {
          firstName: '',
          lastName: '',
        },
        dni: '',
        email: '',
        password: '',
        profilePictureUrl: '',
        address: '',
        phone: '',
        birthdayDate: '',
      },
      userData: '',
    }
  },
  async created() {
    this.userData = JSON.parse(localStorage.getItem('userData'))
    const data = await ProfileService.getUserById(this.userData.id)
    if (data.status === 200) {
      this.userToUpdate = data.data
    }
  },
}
</script>

<style scoped>

</style>
