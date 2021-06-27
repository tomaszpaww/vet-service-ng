export const vetPagesRoutes = [
  {
    path: 'owners',
    loadChildren: () => import('./owners/owners.module').then(m => m.OwnersModule)
  },
];