import { safeTechApi } from '@/safetech/service/axios'

class MyAppointmentsService {
  async getAppointmentsByIdAndStatus(userId, status) {
    try {
      const data = await safeTechApi.get(`/users/${userId}/status/${status}/appointments`)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new MyAppointmentsService()
