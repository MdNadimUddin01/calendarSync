import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import FrontPage from "../component/FrontPage";
import Navbar from "../component/Navbar";
import Table from "./Table";

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
      })
      .catch((error) => {
        console.error(`Error fetching calendar list: ${error.message}`);
      });
  };

  const logoutHandler = () => {
    localStorage.clear();
    setToken(null);
    setUser(null);
    setEventDetails([]);
  }


  useEffect(() => {
    if (token) {
      getEvent(token);
      console.log(eventDetails);
    }
  }, []);

  return (
    <div>
      <Navbar user={user} logoutHandler={logoutHandler} loginHandler={loginHandler}></Navbar>
      {!user && (
        <FrontPage loginHandler={loginHandler} user={user}></FrontPage>
      )}

      {user && <Table getEvent={getEvent} eventDetails={eventDetails} setEventDetails={setEventDetails}></Table>}

    </div>
  );
};

export default Home;
