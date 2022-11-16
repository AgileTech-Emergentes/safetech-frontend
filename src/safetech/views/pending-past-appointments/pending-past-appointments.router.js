export default [
  {
    path: '/appointments/',
    name: 'my-appointments',
    component: () => import('@/safetech/views/pending-past-appointments/MyAppointments.vue'),
    meta: {
      pageTitle: 'Mis citas',
      breadcrumb: [{
        text: 'Pendientes',
      }],
    },
  },
]
