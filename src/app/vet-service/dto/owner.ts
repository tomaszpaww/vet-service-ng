import { Address } from "./address";
import { Pet } from "./pet";

export interface Owner {
    id: number;
    fullName: string;
    address: Address;
    pets: Pet[];
}