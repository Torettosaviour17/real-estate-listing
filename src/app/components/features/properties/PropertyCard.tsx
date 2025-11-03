import Link from "next/link";
import { Property } from "@/app/types";
import { formatPrice, getPropertyTypeLabel } from "@/app/lib/utils";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
      {/* Image Section - UPDATED WITH ACTUAL IMAGES */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {/* Actual Property Image */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${property.images[0]}")`,
          }}
        >
          {/* Fallback if image doesn't load */}
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Property Image</span>
          </div>
        </div>

        {/* Property Type Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {getPropertyTypeLabel(property.type)}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              property.status === "for-sale"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {property.status === "for-sale" ? "For Sale" : "For Rent"}
          </span>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-sm">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {property.title}
        </h3>

        {/* Location */}
        <p className="text-gray-600 mb-4 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {property.location.city}, {property.location.state}
        </p>

        {/* Specifications */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <span>🛏️</span>
            <span>{property.specifications.bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🚿</span>
            <span>{property.specifications.bathrooms} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📏</span>
            <span>{property.specifications.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 mb-4">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <Link
          href={`/property/${property.id}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
