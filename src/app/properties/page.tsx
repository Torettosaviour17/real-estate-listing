"use client";

import { properties } from "../data/properties";
import PropertyCard from "../components/features/properties/PropertyCard";
import FilterBar from "../components/features/properties/FilterBar";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Properties
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our complete collection of {properties.length} premium
            properties
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Showing all {properties.length} properties
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar />

        {/* Properties Grid - Show ALL Properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Property Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {properties.length}
              </div>
              <div className="text-sm text-gray-600">Total Properties</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {properties.filter((p) => p.type === "house").length}
              </div>
              <div className="text-sm text-gray-600">Houses</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {properties.filter((p) => p.type === "apartment").length}
              </div>
              <div className="text-sm text-gray-600">Apartments</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                ${Math.min(...properties.map((p) => p.price)).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Starting From</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
