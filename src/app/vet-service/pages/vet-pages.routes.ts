export const vetPagesRoutes = [
  {
    path: 'owners',
    loadChildren: () => import('./owners/owners.module').then(m => m.OwnersModule)
  },
  {
    path: 'species',
    loadChildren: () => import('./species/species.module').then(m => m.SpeciesModule)
  },
];