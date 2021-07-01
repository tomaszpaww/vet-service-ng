export const appRoutes = [
  {
    path: 'owners',
    loadChildren: () => import('./vet-service/pages/owners/owners.module').then(m => m.OwnersModule)
  },
  {
    path: 'species',
    loadChildren: () => import('./vet-service/pages/species/species.module').then(m => m.SpeciesModule)
  },
  {
    path: 'wild-animals',
    loadChildren: () => import('./vet-service/pages/wild-animals/wild-animals.module').then(m => m.WildAnimalsModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('./vet-service/pages/pets/pets.module').then(m => m.PetsModule)
  },
];