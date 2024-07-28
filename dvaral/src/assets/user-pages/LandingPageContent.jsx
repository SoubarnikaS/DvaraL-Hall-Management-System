// import {Search, Calendar, Star, User } from 'lucide-react';


// const LandingPageContent = () => {

//     const profiles = [
//         { name: "John Doe", role: "Dev @ DvaraL", review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!" },
//         { name: "Jane Smith", role: "Designer @ Creative", review: "The team at Creative Tim is fantastic! Their products have made my projects so much easier to complete." },
//         { name: "Alice Johnson", role: "Manager @ TechCorp", review: "Amazing tools and great support! I've been using their templates for years." },
//     ];

//     const features = [
//         { icon: Search, title: "Wide Selection", description: "Browse through our curated list of top-notch venues." },
//         { icon: Calendar, title: "Easy Booking", description: "Streamlined process to secure your ideal date and location." },
//         { icon: Star, title: "Premium Services", description: "Additional amenities to elevate your event experience." },
//     ];


//     return (
//         <>

//             <section className="mb-10 sm:mb-16 md:mb-20 p-10">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-blue-900 ">Why Choose Us?</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//                     {features.map((feature, index) => (
//                         <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-100">
//                             <feature.icon className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-900 mb-3 sm:mb-4" />
//                             <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
//                             <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <section className="p-10">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-blue-900">What Our Users Say?</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//                     {profiles.map((profile, index) => (
//                         <div key={index} className="max-w-md mx-auto bg-white shadow-inner rounded-lg overflow-hidden hover:shadow-2xl transform transition-all hover:scale-100">
//                             <div className="p-6">
//                                 <div className="flex items-center mb-4">
//                                     <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center shadow-md cursor-pointer">
//                                         <User className="w-8 h-8 text-[#feb5b0]" />
//                                     </div>
//                                     <div className="ml-4">
//                                         <h2 className="text-2xl font-bold text-blue-900">{profile.name}</h2>
//                                         <p className="text-sm ">{profile.role}</p>
//                                     </div>
//                                 </div>
//                                 <div className="mb-4">
//                                     <p className="text-gray-800 text-sm font-poppins">"{profile.review}"</p>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
//                                         ))}
//                                     </div>
//                                     <button className="px-4 py-2 bg-blue-900 text-[#feb5b0] rounded-full font-semibold hover:bg-[#ff8d85]transition-colors">
//                                         View Profile
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </>
//     )
// }

// export default LandingPageContent;

import React from 'react';
import { Search, Calendar, Star, User, Feather, Zap, Shield} from 'lucide-react';

const LandingPageContent = () => {
  const features = [
    { icon: Search, title: "Wide Selection", description: "Browse through our curated list of top-notch venues." },
    { icon: Calendar, title: "Easy Booking", description: "Streamlined to secure your ideal date and location." },
    { icon: Star, title: "Premium Services", description: "Additional amenities to elevate your event experience." },
    { icon: Zap, title: "Fast Support", description: "24/7 customer service to assist you with any queries." },
    { icon: Shield, title: "Secure Payments", description: "Safe and encrypted transactions for your peace of mind." },
    { icon: Feather, title: "Flexible Options", description: "Customizable packages to suit your specific needs." },
  ];

  const profiles = [
    { name: "John Doe", role: "Dev @ DvaraL", review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!", avatar: "/api/placeholder/100" },
    { name: "Jane Smith", role: "Designer @ Creative", review: "The team at Creative Tim is fantastic! Their products have made my projects so much easier to complete.", avatar: "/api/placeholder/100" },
    { name: "Alice Johnson", role: "Manager @ TechCorp", review: "Amazing tools and great support! I've been using their templates for years.", avatar: "/api/placeholder/100" },
  ];

  return (
    <div className="bg-gray-50">
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 border border-gray-100">
                <feature.icon className="w-10 h-10 mb-6 text-blue-600" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {profile.avatar ? (
                        <User className="w-16 h-16" style={{ color: '#1769ED' }}/>
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="w-8 h-8 text-blue-500" />
                      </div>
                         
                    )}
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">{profile.name}</h3>
                      <p className="text-blue-600 text-sm">{profile.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">&ldquo;{profile.review}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full font-semibold hover:bg-blue-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageContent;