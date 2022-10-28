export default [

  {
    path: '/dashboard/',
    name: 'dashboard',
    component: () => import('@/safetech/views/homepage/Homepage.vue'),
  },
  {
    path: '/add-appointment/',
    name: 'add-appointment',
    component: () => import('@/safetech/views/new-appointment/NewAppointment.vue'),
    meta: {
      pageTitle: 'Agendar por servicio',
      breadcrumb: [{
        text: 'Agendar por servicio',
      }],
    },
  },
]
