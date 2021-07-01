import { Pet } from "./pet";
import { WildAdnimal } from "./wild-animal";

export interface Species {
    id: number;
    label: string;
    pets: Pet[];
    wildAnimals: WildAdnimal[];
}