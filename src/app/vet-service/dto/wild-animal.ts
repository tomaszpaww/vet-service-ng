import { Species } from './species';

export interface WildAdnimal {
    id: number;
    trackingId: number;
    birtday: Date;
    vacciated: boolean;
    species: Species;
}