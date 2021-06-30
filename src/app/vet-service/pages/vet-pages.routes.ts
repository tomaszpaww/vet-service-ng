export const vetPagesRoutes = [
  {
    path: 'owners',
    loadChildren: () => import('./owners/owners.module').then(m => m.OwnersModule)
  },
  {
    path: 'species',
    loadChildren: () => import('./species/species.module').then(m => m.SpeciesModule)
  },
  {
    path: 'wild-animals',
    loadChildren: () => import('./wild-animals/wild-animals.module').then(m => m.WildAnimalsModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule)
  },
];