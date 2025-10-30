export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: PropertyType;
  status: PropertyStatus;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  specifications: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    lotSize?: number;
    yearBuilt: number;
    parking: number;
  };
  amenities: string[];
  images: string[];
  agent: Agent;
  createdAt: Date;
  updatedAt: Date;
}

export type PropertyType =
  | "house"
  | "apartment"
  | "condo"
  | "villa"
  | "townhouse";
export type PropertyStatus = "for-sale" | "for-rent" | "sold" | "rented";

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  company?: string;
}

export interface SearchFilters {
  type?: PropertyType;
  status?: PropertyStatus;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  location?: string;
}
