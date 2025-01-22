import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import FrontPage from "../component/FrontPage";
import Navbar from "../component/Navbar";
import Table from "./Table";
import toast from "react-hot-toast"

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [eventDetails, setEventDetails] = useState([]);

  const loginHandler = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/calendar",
    onSuccess: (tokenResponse) => {
      const { access_token } = tokenResponse;

      const userInfoResponse = axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          const userData = response.data;
          console.log(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("token", access_token);
          setUser(userData);
          setToken(access_token);
          console.table([user, token]);
          getEvent(access_token);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  const getEvent = async (access_token) => {
    if (!access_token) {
      console.log("TOKEN NOT FOUND");
      return;
    }
    const loadingToast = toast.loading("Loading");
    await axios
      .get("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        params: {
          fields: `items(id,summary,start,end,location,status,description)`,
        },
      })
      .then((response) => {
        console.log("HELLO");
        setEventDetails(response.data.items);
        toast.success("Event Fetched Successfully")
      })
      .catch((error) => {
        console.error(`Error fetching calendar list: ${error.message}`);
        toast.error("Event doesn't fetch")
      });

      toast.dismiss(loadingToast);
  };

  const logoutHandler = () => {
    localStorage.clear();
    setToken(null);
    setUser(null);
    setEventDetails([]);
  };

  useEffect(() => {
    if (token) {
      getEvent(token);
      console.log(eventDetails);
    }
  }, []);

  return (
    <div classname="container lg:w-[1280px]">
      <Navbar
        user={user}
        logoutHandler={logoutHandler}
        loginHandler={loginHandler}
      ></Navbar>
      {!user && <FrontPage loginHandler={loginHandler} user={user}></FrontPage>}

      {user && (
        <Table
          getEvent={getEvent}
          eventDetails={eventDetails}
          setEventDetails={setEventDetails}
        ></Table>
      )}

      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-lg border-t mt-32">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Product",
                links: ["Features", "Security"],
              },
              {
                title: "Company",
                links: ["About", "Blog"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 CalendarSync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
