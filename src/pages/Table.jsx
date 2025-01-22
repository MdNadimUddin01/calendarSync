import React, { useEffect, useState } from "react";
import {FaFilter, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EventDetails from "../component/EventDetails";
import { Calendar } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import { RiCheckboxIndeterminateFill } from "react-icons/ri";
import axios from "axios";

function Table({ getEvent, eventDetails, setEventDetails }) {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(eventDetails);
  const [date, setDate] = useState(null);
  const token = localStorage.getItem("token");
  const [eventIds, setEventIds] = useState([]);



  const deleteEvents = async (eventIds, accessToken) => {
    const baseUrl =
      "https://www.googleapis.com/calendar/v3/calendars/primary/events/";

    for (const eventId of eventIds) {
      try {
        const response = await axios.delete(`${baseUrl}${eventId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 204) {
          console.log(`Event ${eventId} deleted successfully!`);
        }
      } catch (error) {
        console.error(
          `Error deleting event ${eventId}:`,
          error.response?.data || error.message
        );
      }
    }

    getEvent(token);
  };

  useEffect(() => {
    setData(eventDetails);
  }, [eventDetails]);

  const searchHandler = (e) => {
    const val = eventDetails.filter((item) => {
      return item.summary.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setData(val);
    setSearchText(e.target.value);
  };

  function comp(a, b) {
    return (
      new Date(a.start.dateTime).getDate() <
      new Date(b.start.dateTime).getDate()
    );
  }

  const clearFilter = () => {
    setDate(null);
    setData(eventDetails);
  };

  const dateHandler = (e) => {
    const val = eventDetails.filter((item) => {
      console.log(new Date(item.start.dateTime).toLocaleDateString());
      return (
        new Date(item.start.dateTime).toLocaleDateString() ===
        new Date(e.target.value).toLocaleDateString()
      );
    });

    val.sort(comp);
    setData(val);
    setDate(e.target.value);
  };

  return (
    <div className="relative">
      <div className={`container  lg:w-[1280px] border p-2 flex flex-col flex-start gap-1 rounded-[10px] mx-auto my-auto mt-36  bg-[#f9f9f9]`}>
        <div className="p-6 border-b border-gray-200 mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Calendar Events
          </h2>
        </div>

        {/* Search and filter functionality */}
        <div className="flex py-[7px] px-[10px]  bg-[#f7f7f7] justify-between items-center rounded-md">
          <div className="w-[30%] flex py-[5px] px-[6px] items-center shrink-0 rounded-xl border-[#BEBEBE] border-[0.5px] gap-2">
            <FaSearch />
            <input
              onChange={searchHandler}
              type="text"
              name="event"
              value={searchText}
              placeholder="Search Event"
              className="outline-none bg-transparent w-[100%]"
            />
          </div>

          <div className="flex items-center gap-2 text-[#818181] relative">
            <div className="flex gap-1 items-center">
              <FaFilter />
            </div>

            <input
              value={date}
              onChange={dateHandler}
              className="px-1 border-[#BEBEBE] outline-none bg-transparent border rounded-md"
              type="date"
            />

            {date && <RxCross2 onClick={clearFilter} />}
          </div>
        </div>

        <div className="flex px-[14px] py-[10px] justify-between items-center self-stretch">
          <div className="text-sm font-medium not-italic leading-normal">
            <p className="text-[14px] text-[#7f67f6] font-medium leading-normal">{`${eventIds.length} selected out of ${eventDetails.length}`}</p>
          </div>

          <div className="flex item gap-[10px]">

            <button
              onClick={() => deleteEvents(eventIds, token)}
              className="flex items-center gap-[4px] text-[#FF2E3C]"
            >
              <MdDelete />
              <p className="text-[12px] font-normal leading-normal">
                Remove Events
              </p>
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="flex py-[4px] px-[14px] rounded-md items-center justify-between self-stretch bg-[#eee]">
          {/* </div> */}
          <div className="flex items-center gap-1 w-[35%]">
            <RiCheckboxIndeterminateFill className="w-5 h-5" />
            <div className="flex py-[10px] px-[14px] items-center self-stretch gap-1">
              <p className="text-[14px] text-[#000] font-medium leading-normal">
                Event Name
              </p>
              <p className="text-[14px] text-[#000] font-medium leading-normal">{`(${data.length})`}</p>
            </div>
          </div>

          <div className={`w-[60%] flex justify-evenly items-center`}>
            <div className="flex justify-start items-center w-[25%]">
              <p className="font-medium leading-normal">Date</p>
            </div>

            <div className="flex justify-center items-center w-[25%]">
              <p className=" font-medium leading-normal">Time</p>
            </div>
            <div className="flex justify-center w-[25%] items-center">
              <p className=" font-medium leading-normal">Status</p>
            </div>
            <div className="flex justify-center w-[25%] items-center">
              <p className=" font-medium leading-normal">Location</p>
            </div>
          </div>
        </div>

        {data &&
          data.map((item) => {
            return (
              <EventDetails
                eventIds={eventIds}
                setEventIds={setEventIds}
                item={item}
              ></EventDetails>
            );
          })}
      </div>
    </div>
  );
}

export default Table;
