import Vue from 'vue'
import moment from 'moment'

Vue.filter('myGlobal', created => {
  if (created) return moment(created).format('MM/DD/YYYY')
  return '-'
})

Vue.filter('myGlobalWithHour', created => {
  if (created) return moment(created).format('MM/DD/YYYY h:mm A')
  return '-'
})

Vue.filter('myDateGlobal', created => moment(created).format('ddd, D MMM YYYY'))

Vue.filter('myDateGlobalWithHour', created => moment(created).format('ddd, D MMM YYYY hh:mm A'))

Vue.filter('myTime', created => {
  if (created) return moment(created, 'HH:mm:ss').format('hh:mm A')
  return '-'
})

Vue.filter('myGlobalDay', created => {
  if (created) return moment(created).format('MM/DD/YYYY hh:mm A')
  return '-'
})

Vue.filter('myDate', created => moment(created).format('MMMM Do YYYY'))
Vue.filter('formatDate', created => moment(created).format('YYYY-MM-DD'))
Vue.filter('myDateText', created => moment(created).format('dddd, Do'))

Vue.filter('myMonthYear', created => moment(created).format('MMM YY'))
