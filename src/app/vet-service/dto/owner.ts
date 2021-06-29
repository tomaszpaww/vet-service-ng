import { Address } from "./address";

export interface Owner {
    id: number;
    fullName: string;
    address: Address;
}