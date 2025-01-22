import React from "react";
import {
    Calendar,
    Clock,
    Filter,
    Lock,
    Star,
    Users,
    Bell,
  } from "lucide-react";
  import { FcGoogle } from "react-icons/fc";

function FrontPage({loginHandler , user}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      

      {/* Hero Section */}
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              ✨ Your Schedule, Simplified
            </span>
            <h1 className="text-4xl font-bold text-gray-900  sm:text-5xl md:text-6xl tracking-tight">
              Manage Your Calendar
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl leading-relaxed">
              Access your Google Calendar events in one place. Filter, organize,
              and stay on top of your schedule with our intuitive interface.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-x-4">
              {/* <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                <span>Get Started Free</span>
                <ChevronRight className="w-4 h-4" />
              </button> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="140"
                height="140"
                viewBox="0 0 48 48"
              >
                <rect width="22" height="22" x="13" y="13" fill="#fff"></rect>
                <polygon
                  fill="#1e88e5"
                  points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"
                ></polygon>
                <path
                  fill="#1e88e5"
                  d="M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"
                ></path>
                <polygon
                  fill="#fbc02d"
                  points="34,42 14,42 13,38 14,34 34,34 35,38"
                ></polygon>
                <polygon
                  fill="#4caf50"
                  points="38,35 42,34 42,14 38,13 34,14 34,34"
                ></polygon>
                <path
                  fill="#1e88e5"
                  d="M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"
                ></path>
                <polygon fill="#e53935" points="34,34 34,42 42,34"></polygon>
                <path
                  fill="#1565c0"
                  d="M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          id="features"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything you need
            </h2>
            <p className="mt-4 text-gray-500">
              Powerful features to help you manage your schedule effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature Cards */}
            {[
              {
                icon: Lock,
                title: "Secure SSO Login",
                description:
                  "Quick and secure access with Google authentication.",
              },
              {
                icon: Clock,
                title: "Real-time Events",
                description: "View all your calendar events instantly.",
              },
              {
                icon: Filter,
                title: "Smart Filtering",
                description: "Easily filter and find events by date.",
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                description: "Never miss an important event again.",
              },
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-200"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg shadow-indigo-100/20 hover:shadow-xl transition-all duration-200">
                  <feature.icon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          id="testimonials"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Loved by users</h2>
            <p className="mt-4 text-gray-500">
              Here's what our users have to say about CalendarSync.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg shadow-indigo-100/20 border border-gray-100/20 hover:border-indigo-200 transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "CalendarSync has transformed how I manage my schedule. It's
                  intuitive and powerful!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Happy User</div>
                    <div className="text-gray-500 text-sm">Product Manager</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default FrontPage;
