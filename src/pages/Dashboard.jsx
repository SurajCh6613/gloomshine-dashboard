import React from "react";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";
import CarAvailability from "../components/CarAvailability";
import EarningSummary from "../components/EarningSummary";
import LiveCarStatus from "../components/LiveCarStatus";
const Dashboard = () => {
  return (
    <section className="h-screen w-full flex">
      <div className="w-1/3">
        <StatsCard />
      </div>
      <div className="w-2/3 p-4 space-y-4">
        <SearchBar />
        <CarAvailability />
        <LiveCarStatus />
        <EarningSummary />
      </div>
    </section>
  );
};

export default Dashboard;
