import React, { useState, useEffect } from "react";
import { MapPin, Box, Info } from "lucide-react";
import holdinglogo from "../assets/holdinglogo.png";
import JASPER3D from "../assets/JASPER3D.jpg";

const JasperEstate = () => {
  const [activeTab, setActiveTab] = useState("info");
  const estateInfo = {
    name: "Jasper Ibeju Lekki",
    description:
      "Jasper Gardenia is an exclusive residential estate situated in the bustling Lekki area of Lagos, Nigeria. This premier development spans 50 hectares of meticulously landscaped grounds, offering a serene oasis amidst the vibrant city life.",
    price: "50M - 170M Naira",
    location: "Jasper Ibeju Lekki, Lagos Nigeria",
    amenities: [
      "Fitness Center",
      "24/7 Security",
      "Smart Estate",
      "Green Estate",
      "Play Area",
      "Good Road",
      "Central Sewage System",
      "24/7 Power Supply",
      "Treated Water",
      "Gated Community",
    ],
    coordinates: { lat: 6.4168333, lng: 4.1064444 },
  };

  const TabButton = ({ id, Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-6 py-3 ${
        activeTab === id
          ? "bg-red-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      } rounded-t-lg transition duration-300`}
    >
      <Icon className="mr-2" size={18} />
      {label}
    </button>
  );

  useEffect(() => {
    if (activeTab === "map") {
      // Dynamically load the Google Maps script
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDVxBtI-V9FcScAy16NToj9_k0ZZ2okjrU`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        initMap();
      };

      return () => {
        // Cleanup: remove script to avoid duplication
        document.body.removeChild(script);
      };
    }
  }, [activeTab]);

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      tilt: 45,
      heading: 90,
      center: {
        lat: estateInfo.coordinates.lat,
        lng: estateInfo.coordinates.lng,
      },
      mapTypeId: "satellite",
    });

    new window.google.maps.Marker({
      position: {
        lat: estateInfo.coordinates.lat,
        lng: estateInfo.coordinates.lng,
      },
      map: map,
      title: "Jasper Ibeju Lekki",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="mb-8">
        <img
          src={holdinglogo}
          alt="GtextHoldings Logo"
          style={{ height: "100px", width: "auto" }}
        />
      </div>

      <h2 className="text-4xl font-bold mb-6 text-center">{estateInfo.name}</h2>

      {/* Centered Tabs */}
      <div className="mb-6 flex justify-center space-x-2">
        <TabButton id="info" Icon={Info} label="Info" />
        <TabButton id="3d" Icon={Box} label="3D View" />
        <TabButton id="map" Icon={MapPin} label="Map" />
      </div>

      {/* Content Area */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        {activeTab === "info" && (
          <div>
            <p className="text-xl mb-4">{estateInfo.description}</p>
            <p className="text-lg font-semibold mb-2">
              Price Range: {estateInfo.price}
            </p>
            <p className="mb-4">Location: {estateInfo.location}</p>
            <h3 className="text-lg font-semibold mb-2">Amenities:</h3>
            <ul className="list-disc list-inside">
              {estateInfo.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "3d" && (
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
            <p className="text-xl text-gray-500">3D View</p>
            <img
              src={JASPER3D}
              alt="Jasper 3D"
              style={{ height: "auto", width: "auto" }}
            />
          </div>
        )}

        {activeTab === "map" && (
          <div id="map" style={{ height: "400px", width: "100%" }} />
        )}
      </div>

      {/* Back Home Link */}
      <div className="mt-8">
        <a
          href="/"
          className="text-red-500 hover:text-blue-700 underline text-lg"
        >
          Back Home
        </a>
      </div>
    </div>
  );
};


export default JasperEstate;
