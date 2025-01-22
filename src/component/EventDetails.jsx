import React, { useState } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function EventDetails({item , setEventIds , eventIds}) {
  // console.log(item)
  // console.log(item)
  const [check , setChecked] = useState(false);
  const checkHandler = () => {

    const tempData = eventIds.filter((id) => {
      return id != item.id
    })

    if(!check){
      tempData.push(item.id);
    }
    
    setEventIds(tempData);

    setChecked(!check);
    console.log(tempData);
    
  }
  return (
    <div className="flex py-[8px] px-[14px] rounded-md items-center justify-between self-stretch bg-[#Fff]">
      {/* </div> */}
      <div className="flex items-center gap-1 w-[38%]">
        {check && <IoIosCheckbox className="w-[20px] h-[20px]" onClick={checkHandler}/>}
        {!check && <MdCheckBoxOutlineBlank className="w-[20px] h-[20px]" onClick={checkHandler}></MdCheckBoxOutlineBlank>}
        <div className="flex w-[32%] py-[10px] px-[14px] items-center gap-1 self-stretch">
          <p className="text-[14px] text-[#000]  font-medium leading-normal">
            {item?.summary == null ? "-" : item.summary}
          </p>
        </div>
      </div>

      <div className={`w-[60%] flex justify-between items-center text-[14px] text-[#000]`}>

        <div className="flex justify-start w-[25%]">
          <p className="font-medium leading-normal">{new Date(item.start.dateTime).toDateString()}</p>
        </div>

        <div className="flex justify-center w-[25%]">
          <p className=" font-medium leading-normal">
            {item?.start?.dateTime === null ? "-" : (new Date(item.start.dateTime)).toLocaleTimeString()}
          </p>
        </div>

        <div className="flex justify-center w-[25%] items-center">
          <p className=" font-medium leading-normal">
            {item?.status == null ? "-" : item?.status}
          </p>
        </div>

        <div className="flex justify-center w-[25%] items-center">
          <p className=" font-medium leading-normal">
            {item.location ? item.location : "-"}
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default EventDetails;
