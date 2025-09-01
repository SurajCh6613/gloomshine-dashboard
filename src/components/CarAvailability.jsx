import { Calendar, Car, Clock } from "lucide-react";
import React from "react";

const CarAvailability = () => {
  return (
    <>
      <div className="bg-white h-auto w-full px-6 py-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-2">Car Availability</h2>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-center gap-2">
          {/* Car Number Dropdown */}
          <div className="flex items-center border rounded-lg px-3 py-1 w-full lg:w-1/4">
            <Car className="text-gray-500 w-5 h-5 mr-2" />
            <select className="flex-1 outline-none bg-transparent text-gray-700">
              <option>Car number</option>
              <option>1234</option>
              <option>5678</option>
              <option>9999</option>
            </select>
          </div>

          {/* Date & Time Inputs */}
          <div className="flex w-full lg:w-1/2 min-w-[250px]">
            <div className="flex items-center border rounded-l-lg px-3 py-1 flex-1">
              <Calendar className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="date"
                className="outline-none bg-transparent text-gray-700"
                defaultValue="2022-11-20"
              />
            </div>

            <div className="flex items-center border rounded-r-lg px-3 py-1 flex-1">
              <Clock className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="time"
                className="flex-1 outline-none bg-transparent text-gray-700"
                defaultValue="10:00"
              />
            </div>
          </div>

          {/* Button */}
          <div className="w-full lg:w-auto">
            <button className="bg-blue-600 text-white px-6 py-1 rounded-lg hover:bg-blue-700 transition w-full lg:w-auto cursor-pointer">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarAvailability;
