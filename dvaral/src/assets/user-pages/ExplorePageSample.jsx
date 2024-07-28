import React, { useState, useEffect } from 'react';
import { Heart, BookMarked, Users, MapPin, Wind, Car, Wifi, Search, X } from 'lucide-react';

const ExplorePageSample = () => {
  const [bookingCards, setBookingCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [filters, setFilters] = useState({
    people: '',
    location: '',
    ac: false,
    parking: false,
    wifi: false
  });
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Simulated data fetch
  useEffect(() => {
    const fetchData = async () => {
      // Replace this with your actual data fetching logic
      const data = [
        {
          id: 1,
          title: "Grand Ballroom",
          image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          rating: 4.8,
          description: "Luxurious ballroom perfect for weddings and large events.",
          capacity: 200,
          location: "Downtown",
          amenities: ["AC", "Parking", "WiFi"],
          price: 1000
        },
        {
          id: 2,
          title: "Cozy Conference Room",
          image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          rating: 4.5,
          description: "Ideal for business meetings and small conferences.",
          capacity: 50,
          location: "Business District",
          amenities: ["AC", "WiFi"],
          price: 500
        },
        {
          id: 3,
          title: "Beachfront Party Venue",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          rating: 4.9,
          description: "Stunning beachfront location for unforgettable parties.",
          capacity: 150,
          location: "Beachfront",
          amenities: ["Parking", "WiFi"],
          price: 1500
        }
      ];
      setBookingCards(data);
      setFilteredCards(data);
    };
    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = bookingCards;
    
    if (filters.people) {
      const [min, max] = filters.people.split('-').map(Number);
      filtered = filtered.filter(card => card.capacity >= min && (max ? card.capacity <= max : true));
    }
    
    if (filters.location) {
      filtered = filtered.filter(card => card.location === filters.location);
    }
    
    if (filters.ac) {
      filtered = filtered.filter(card => card.amenities.includes('AC'));
    }
    
    if (filters.parking) {
      filtered = filtered.filter(card => card.amenities.includes('Parking'));
    }
    
    if (filters.wifi) {
      filtered = filtered.filter(card => card.amenities.includes('WiFi'));
    }
    
    setFilteredCards(filtered);
  };

  const clearFilters = () => {
    setFilters({
      people: '',
      location: '',
      ac: false,
      parking: false,
      wifi: false
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Explore Incredible Venues</h1>
        
        {/* Filter Toggle Button */}
        <button
          onClick={() => setIsFilterVisible(!isFilterVisible)}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center w-full md:w-auto"
        >
          {isFilterVisible ? <X className="mr-2" /> : <Search className="mr-2" />}
          {isFilterVisible ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Filters */}
        {isFilterVisible && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Refine Your Search</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <select 
                name="people" 
                className="p-2 border rounded-md w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                onChange={handleFilterChange}
                value={filters.people}
              >
                <option value="">Number of People</option>
                <option value="0-50">0-50</option>
                <option value="51-100">51-100</option>
                <option value="101-200">101-200</option>
                <option value="201-">201+</option>
              </select>
              <select 
                name="location" 
                className="p-2 border rounded-md w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                onChange={handleFilterChange}
                value={filters.location}
              >
                <option value="">Location</option>
                <option value="Downtown">Downtown</option>
                <option value="Business District">Business District</option>
                <option value="Beachfront">Beachfront</option>
              </select>
              <div className="flex items-center space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="ac"
                    className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500" 
                    onChange={handleFilterChange}
                    checked={filters.ac}
                  />
                  <span className="ml-2 text-gray-700">AC</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="parking"
                    className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500" 
                    onChange={handleFilterChange}
                    checked={filters.parking}
                  />
                  <span className="ml-2 text-gray-700">Parking</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="wifi"
                    className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500" 
                    onChange={handleFilterChange}
                    checked={filters.wifi}
                  />
                  <span className="ml-2 text-gray-700">WiFi</span>
                </label>
              </div>
            </div>
            <button 
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Hall Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => (
            <div key={card.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="relative">
                <img
                  className="w-full h-56 object-cover"
                  src={card.image}
                  alt={card.title}
                />
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition duration-200"
                  aria-label="Like"
                >
                  <Heart className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/80 rounded-full px-3 py-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-gray-800 font-semibold">{card.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{card.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{card.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{card.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{card.location}</span>
                  </div>
                  {card.amenities.includes('AC') && (
                    <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      <Wind className="h-4 w-4 mr-1" />
                      <span>AC</span>
                    </div>
                  )}
                  {card.amenities.includes('Parking') && (
                    <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      <Car className="h-4 w-4 mr-1" />
                      <span>Parking</span>
                    </div>
                  )}
                  {card.amenities.includes('WiFi') && (
                    <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      <Wifi className="h-4 w-4 mr-1" />
                      <span>WiFi</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-gray-800">${card.price}</span>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center">
                    <BookMarked className="h-5 w-5 mr-2" />
                    <span>Reserve Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePageSample;