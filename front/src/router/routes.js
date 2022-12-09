const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'list/:id', component: () => import('pages/ListPage.vue') },
      { path: 'list/add', component: () => import('pages/AddListe.vue') },
      { path: 'list/:id/add', component: () => import('pages/AddTask.vue') },
      { path: 'task/:id', component: () => import('pages/TaskDetail.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
