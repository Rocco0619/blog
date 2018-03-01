export default [{
  path: 'comments',
  component: () => import('js/App'),
  children: [{
    path: '/',
    name: 'dashboard.comment',
    component: () => import('./Comment')
  },
  {
    path: ':id/edit',
    name: 'dashboard.comment.edit',
    component: () => import('./Edit')
  }]
}]
