import { Species } from './species';

export interface WildAdnimal {
    id: number;
    trackingId: number;
    birthday: Date;
    vaccinated: boolean;
    species: Species;
}