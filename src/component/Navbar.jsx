import React from "react";
import { FcGoogle } from "react-icons/fc";
import { TfiUser } from "react-icons/tfi";
import UserMenu from "./UserMenu";

function Navbar({ user, loginHandler, logoutHandler }) {
  console.log(user);
  return (
    <nav className="border-b bg-white/70 backdrop-blur-lg fixed w-full top-0 z-50">
      <div className="container lg:w-[1280px] mx-auto">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
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
            <span className="ml-2 text-xl font-semibold text-gray-900">
              CalendarSync
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {!user && (
              <button
                onClick={() => loginHandler()}
                className="group relative px-6 py-2.5 w-full bg-white text-gray-800 font-normal rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 flex items-center space-x-2 transform hover:-translate-y-0.5"
              >
                <FcGoogle />
                <span>Sign in with Google</span>
                <div className="absolute left-0 -translate-x-[4%] z-10 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-0 h-full group-hover:opacity-10 rounded-lg transition-opacity duration-200 w-full"></div>
              </button>
            )}
            {user && (
              <div
                className={"cursor-pointer group relative"}
                onClick={() => {}}
              >
                {/* {" "} */}
                <p className="text-l font-semibold text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 justify-center rounded-full flex items-center bg-[#eee]">
                    <TfiUser className="text-xl" />
                  </div>

                  <p>{user.given_name}</p>
                </p>
                <div className="invisible absolute group-hover:visible -translate-x-[10%] top-[110%]">
                  <UserMenu logoutHandler={logoutHandler}></UserMenu>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
