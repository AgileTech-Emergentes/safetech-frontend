import { safeTechApi } from '@/safetech/service/axios'

class NewAppointmentService {
  async getAppliances() {
    try {
      const data = await safeTechApi.get('/appliances')
      return data
    } catch (error) {
      throw error
    }
  }
  async getAppliancesByName(name) {
    try {
      const data = await safeTechApi.get(`/appliances/name/${name}`)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new NewAppointmentService()
