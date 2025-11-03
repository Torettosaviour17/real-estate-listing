import { Property } from "../types";

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    description:
      "Beautiful modern apartment with stunning city views in the heart of downtown. Features high-end finishes and premium amenities.",
    price: 350000,
    type: "apartment",
    status: "for-sale",
    location: {
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
    },
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      yearBuilt: 2020,
      parking: 1,
    },
    amenities: ["Parking", "Gym", "Pool", "Balcony", "Concierge"],
    images: ["/images/properties/property-1.jpg"], // Updated path
    agent: {
      id: "1",
      name: "John Smith",
      email: "john@realestate.com",
      phone: "+1-555-0123",
      company: "Elite Realty",
    },
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Luxury Oceanfront Villa",
    description:
      "Stunning luxury villa with private beach access and panoramic ocean views. Perfect for luxury living.",
    price: 1250000,
    type: "villa",
    status: "for-sale",
    location: {
      address: "456 Ocean Drive",
      city: "Miami",
      state: "FL",
      zipCode: "33139",
      country: "USA",
    },
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      lotSize: 5000,
      yearBuilt: 2018,
      parking: 2,
    },
    amenities: ["Pool", "Garden", "Garage", "Security", "Beach Access"],
    images: ["/images/properties/property-2.jpg"], // Updated path
    agent: {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@realestate.com",
      phone: "+1-555-0124",
      company: "Luxury Homes",
    },
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: "3",
    title: "Cozy Family Townhouse",
    description:
      "Perfect family home in a quiet neighborhood with excellent schools and community amenities.",
    price: 475000,
    type: "townhouse",
    status: "for-sale",
    location: {
      address: "789 Oak Avenue",
      city: "Austin",
      state: "TX",
      zipCode: "78701",
      country: "USA",
    },
    specifications: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      yearBuilt: 2015,
      parking: 2,
    },
    amenities: ["Backyard", "Garage", "Fireplace", "Renovated Kitchen"],
    images: ["/images/properties/property-3.jpg"], // Updated path
    agent: {
      id: "3",
      name: "Mike Davis",
      email: "mike@realestate.com",
      phone: "+1-555-0125",
      company: "Family Homes",
    },
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
  },
];
