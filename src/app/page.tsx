import { properties } from "./data/properties";
import PropertyCard from "./components/features/properties/PropertyCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 🏡 Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Discover the perfect property that matches your lifestyle and
              budget. Premium real estate with modern design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search by location, property type..."
                className="w-full sm:w-96 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 whitespace-nowrap">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🏠 Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of quality homes. Find your perfect match
              from our curated collection.
            </p>
          </div>

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Browse More Button */}
          <div className="text-center mt-12">
            <Link
              href="/properties"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Browse More Properties
            </Link>
          </div>
        </div>
      </section>

      {/* 📊 Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Expert Agents</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                98%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your New Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Browse our complete catalog or list your property with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200"
            >
              Browse All Properties
            </Link>
            <Link
              href="/add-property"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
