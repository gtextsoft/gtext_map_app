import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, HomeIcon, CubeIcon, Box, PhoneIcon } from "lucide-react";
import holdinglogo from '../assets/holdinglogo.png';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img
            src={holdinglogo}
            alt="GtextHoldings Logo"
            style={{ height: "100px", width: "auto" }}
          />
          <nav>
            <ul className="flex space-x-6">
              {[
                { name: "Home", path: "/" },
                { name: "Estates", path: "/estates" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-red-600 transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Discover Your Dream Property with GtextHoldings
          </h1>
          <p className="text-xl mb-10 max-w-2xl">
            Experience luxury living and premium real estate options tailored to
            your lifestyle and preferences.
          </p>
          <Link
            to="/estates"
            className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 inline-flex items-center"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Explore Estates
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <HomeIcon className="h-12 w-12" />,
                title: "Exclusive Estates",
                description:
                  "Browse through our curated selection of premium properties.",
              },
              {
                icon: <Box className="h-12 w-12" />,
                title: "3D Virtual Tours",
                description:
                  "Experience our properties in stunning, immersive 3D environments.",
              },
              {
                icon: <MapPinIcon className="h-12 w-12" />,
                title: "Interactive Maps",
                description:
                  "Explore available and sold plots with our detailed interactive maps.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-red-600 mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Explore Our Locations
          </h2>
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* Placeholder for the map. In a real application, you'd integrate with a mapping service like Google Maps or Mapbox */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <span className="text-2xl">Interactive Map Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Sign up now to access all our premium features and start your
            journey towards owning your ideal home.
          </p>
          <Link
            to="/signup"
            className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 inline-flex items-center"
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GtextHoldings</h3>
              <p className="text-gray-400">
                Your trusted partner in real estate excellence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Estates", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">
                25A Lola Holloway Street,
                <br />
                Omole Phase 1, Lagos
                <br />
                Phone: +234 809 999 5346
                <br />
                Email: info@gtextholdings.com
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-white"
                    >
                      {social}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GtextHoldings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
