import Link from "next/link";
import { Property } from "@/app/types";
import { formatPrice, getPropertyTypeLabel } from "@/app/lib/utils";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-56 bg-gray-100">
        {/* Placeholder (you’ll replace this later with actual images) */}
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Property Image</span>
        </div>

        {/* Property Type */}
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {getPropertyTypeLabel(property.type)}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              property.status === "for-sale"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {property.status === "for-sale" ? "For Sale" : "For Rent"}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-2">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(property.price)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {property.title}
        </h3>

        {/* Location */}
        <p className="text-gray-600 mb-4 flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-500" />
          {property.location.city}, {property.location.state}
        </p>

        {/* Specifications */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <FaBed className="text-blue-500" />
            <span>{property.specifications.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath className="text-blue-500" />
            <span>{property.specifications.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRulerCombined className="text-blue-500" />
            <span>{property.specifications.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <Link
          href={`/property/${property.id}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
