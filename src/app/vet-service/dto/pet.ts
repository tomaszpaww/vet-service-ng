import { Owner } from './owner';
import { Species } from './species';

export interface Pet {
    id: number;
    birthday: Date;
    vaccinated: boolean;
    owner: Owner;
    species: Species;
}