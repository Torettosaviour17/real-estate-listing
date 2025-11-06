"use client";

import { useState } from "react";

export default function FilterBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    location: "",
    status: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
      location: "",
      status: "",
    });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="relative">
      {/* Filter Trigger Button */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-orange-500/20"
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
            />
          </svg>
          Filters
          {activeFiltersCount > 0 && (
            <span className="bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-full min-w-6">
              {activeFiltersCount}
            </span>
          )}
        </button>

        {/* Or use text trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <span>Refine Search</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Filter Panel - Animated Dropdown */}
      <div
        className={`
        transition-all duration-500 ease-in-out overflow-hidden
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div className="bg-gray-900/5 backdrop-blur-lg p-8 rounded-3xl border border-gray-200/50 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Property Type */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Property Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
                className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 transition-all duration-300 group-hover:bg-white group-hover:border-orange-500/30 group-hover:shadow-lg"
              >
                <option value="" className="text-gray-500">
                  All Types
                </option>
                <option value="house" className="text-gray-900">
                  House
                </option>
                <option value="apartment" className="text-gray-900">
                  Apartment
                </option>
                <option value="condo" className="text-gray-900">
                  Condo
                </option>
                <option value="villa" className="text-gray-900">
                  Villa
                </option>
                <option value="townhouse" className="text-gray-900">
                  Townhouse
                </option>
              </select>
            </div>

            {/* Status */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 transition-all duration-300 group-hover:bg-white group-hover:border-blue-500/30 group-hover:shadow-lg"
              >
                <option value="" className="text-gray-500">
                  All Status
                </option>
                <option value="for-sale" className="text-gray-900">
                  For Sale
                </option>
                <option value="for-rent" className="text-gray-900">
                  For Rent
                </option>
              </select>
            </div>

            {/* Min Price */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Min Price
              </label>
              <select
                value={filters.minPrice}
                onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 transition-all duration-300 group-hover:bg-white group-hover:border-orange-500/30 group-hover:shadow-lg"
              >
                <option value="" className="text-gray-500">
                  No Minimum
                </option>
                <option value="100000" className="text-gray-900">
                  $100K
                </option>
                <option value="200000" className="text-gray-900">
                  $200K
                </option>
                <option value="300000" className="text-gray-900">
                  $300K
                </option>
                <option value="500000" className="text-gray-900">
                  $500K
                </option>
                <option value="750000" className="text-gray-900">
                  $750K
                </option>
              </select>
            </div>

            {/* Max Price */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Max Price
              </label>
              <select
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 transition-all duration-300 group-hover:bg-white group-hover:border-blue-500/30 group-hover:shadow-lg"
              >
                <option value="" className="text-gray-500">
                  No Maximum
                </option>
                <option value="300000" className="text-gray-900">
                  $300K
                </option>
                <option value="500000" className="text-gray-900">
                  $500K
                </option>
                <option value="750000" className="text-gray-900">
                  $750K
                </option>
                <option value="1000000" className="text-gray-900">
                  $1M
                </option>
                <option value="1500000" className="text-gray-900">
                  $1.5M
                </option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Bedrooms
              </label>
              <select
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 transition-all duration-300 group-hover:bg-white group-hover:border-orange-500/30 group-hover:shadow-lg"
              >
                <option value="" className="text-gray-500">
                  Any
                </option>
                <option value="1" className="text-gray-900">
                  1+
                </option>
                <option value="2" className="text-gray-900">
                  2+
                </option>
                <option value="3" className="text-gray-900">
                  3+
                </option>
                <option value="4" className="text-gray-900">
                  4+
                </option>
                <option value="5" className="text-gray-900">
                  5+
                </option>
              </select>
            </div>

            {/* Bathrooms */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Bathrooms
              </label>
              <select
                value={filters.bathrooms}
                onChange={(e) =>
                  handleFilterChange("bathrooms", e.target.value)
                }
                className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 transition-all duration-300 group-hover:bg-white group-hover:border-blue-500/30 group-hover:shadow-lg"
              >
                <option value="" className="text-gray-500">
                  Any
                </option>
                <option value="1" className="text-gray-900">
                  1+
                </option>
                <option value="2" className="text-gray-900">
                  2+
                </option>
                <option value="3" className="text-gray-900">
                  3+
                </option>
              </select>
            </div>

            {/* Location */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Location
              </label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                placeholder="Enter city or state..."
                className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 placeholder-gray-500 transition-all duration-300 group-hover:bg-white group-hover:border-orange-500/30 group-hover:shadow-lg"
              />
            </div>

            {/* Apply Button */}
            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg border border-orange-500/20">
                Apply Filters
                <span className="ml-2 opacity-80">→</span>
              </button>
            </div>
          </div>

          {/* Filter Actions */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-300/30">
            <button
              onClick={clearFilters}
              className="text-gray-600 hover:text-orange-600 font-medium text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <span className="group-hover:rotate-180 transition-transform duration-300">
                ↻
              </span>
              Reset Filters
            </button>
            <div className="text-xs text-gray-500 font-medium">
              {activeFiltersCount} filters active
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(filters).map(([key, value]) => {
            if (!value) return null;

            const getDisplayValue = (key: string, value: string) => {
              switch (key) {
                case "type":
                  return `Type: ${
                    value.charAt(0).toUpperCase() + value.slice(1)
                  }`;
                case "status":
                  return `Status: ${
                    value === "for-sale" ? "For Sale" : "For Rent"
                  }`;
                case "minPrice":
                  return `Min: $${parseInt(value) / 1000}K`;
                case "maxPrice":
                  return `Max: $${parseInt(value) / 1000}K`;
                case "bedrooms":
                  return `Bedrooms: ${value}+`;
                case "bathrooms":
                  return `Bathrooms: ${value}+`;
                case "location":
                  return `Location: ${value}`;
                default:
                  return `${key}: ${value}`;
              }
            };

            return (
              <span
                key={key}
                className="bg-gradient-to-r from-orange-100 to-blue-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-medium border border-orange-200 flex items-center gap-2"
              >
                {getDisplayValue(key, value)}
                <button
                  onClick={() => handleFilterChange(key, "")}
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                >
                  ×
                </button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
