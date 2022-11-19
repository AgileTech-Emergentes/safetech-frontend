export default [
  {
    path: '/technical-profile/',
    name: 'technical-profile',
    component: () => import('@/views/pages/profile/Profile.vue'),
    meta: {
      pageTitle: 'Perfil del tecnico',
      breadcrumb: [{
        text: 'Perfil del tecnico',
      }],
    },
  },
]
