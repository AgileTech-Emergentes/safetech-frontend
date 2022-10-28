<template>
  <div>
    <b-row>
      <b-col>
        <b-form-datepicker/>
      </b-col>
      <b-col>
        <b-form-select />
      </b-col>
      <b-col/>
      <b-col >
        <div class="d-flex w-100 justify-content-end">
          <b-button variant="success">Ver resumen</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HeaderSlot from "@/safetech/commons/HeaderSlot";
export default {
  components: {
    HeaderSlot,
  },
}
</script>

<style scoped>

</style>