import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// StatsCard.jsx
export default function StatsCard() {
  const data = [
    {
      name: "Hired",
      value: 54,
      color: "bg-blue-600",
      arrow: "↑",
      arrowColor: "text-green-600",
      chartColor: "#2563eb",
    }, // blue
    {
      name: "Cancelled",
      value: 20,
      color: "bg-green-600",
      arrow: "↑",
      arrowColor: "text-green-600",
      chartColor: "#16a34a",
    }, // green
    {
      name: "Pending",
      value: 26,
      color: "bg-red-600",
      arrow: "↓",
      arrowColor: "text-red-600",
      chartColor: "#dc2626",
    }, // red
  ];
  return (
    <section className="w-full h-full bg-yellow-50 px-2 py-3">
      <div>
        <div>
          <h2 className="text-sm sm:text-xl text-gray-700">
            Todays Statistics
          </h2>
          <p className="text-xs sm:text-sm">Tue, 11 Jul, 2025, 11:30 AM</p>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          {/* Income Card */}
          <div className="w-full h-full flex flex-col gap-1 bg-white p-4 shadow-md rounded-md">
            <div className="flex justify-between px-2 mb-2 text-xs sm:text-sm">
              <p>Income</p>
              <p className="bg-gray-200 px-2 text-xs py-1 rounded-sm">Today</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-xl font-semibold">$ 9460.00</p>{" "}
              <p className="text-red-500">↓ 1.5%</p>
            </div>
            <p className="text-sm text-gray-500">Compared to $9940 yesterday</p>
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <p className="">Last week income</p> <p className="">$25684.00</p>
            </div>
          </div>
          {/* middle Card */}
          <div className="w-full h-full flex flex-col gap-1 bg-white p-4 shadow-md rounded-md">
            <div className="flex justify-between px-2 mb-2 text-xs sm:text-sm">
              <p>Expenses</p>
              <p className="bg-gray-200 px-2 text-xs py-1 rounded-sm">Today</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-xl font-semibold">$ 5660.00</p>{" "}
              <p className="text-green-500">↑ 2.5%</p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Compared to $5240 yesterday
            </p>
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <p>Last week income</p> <p className="">$25684.00</p>
            </div>
          </div>
          {/* Bottom Card */}
          <div className="w-full h-full flex flex-col gap-1 bg-white p-2 shadow-md rounded-md">
            <div className="flex text-xs lg:text-sm justify-between px-2">
              <p>Hire vs Cancel</p>
              <p className="bg-gray-200 px-3 text-xs py-1  rounded-sm">Today</p>
            </div>
            <div className="w-full md:h-15">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={30}
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={entry.chartColor} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {data.map((entry, index) => (
              <div
                key={index}
                className="flex text-xs sm:text-sm items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <p className={`w-4 h-4 rounded-full ${entry.color}`}></p>
                  <span>{entry.name}</span>
                </div>
                <p>
                  {entry.value}%{" "}
                  <span className={`font-semibold ${entry.arrowColor}`}>
                    {entry.arrow}
                  </span>{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
