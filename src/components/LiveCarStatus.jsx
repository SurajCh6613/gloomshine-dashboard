import { SlidersHorizontal } from "lucide-react";

// LiveCarStatus.jsx
const cars = [
  {
    no: "01",
    driver: "John Doe",
    car: "1234",
    status: "Completed",
    earnings: "$120",
    color: "bg-green-600",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    no: "02",
    driver: "Jane Smith",
    car: "5678",
    status: "Pending",
    earnings: "$80",
    color: "bg-blue-600",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    no: "03",
    driver: "Suraj",
    car: "6613",
    status: "In Route",
    earnings: "$80",
    color: "bg-red-600",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    no: "03",
    driver: "Suraj",
    car: "6613",
    status: "In Route",
    earnings: "$80",
    color: "bg-red-600",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    no: "03",
    driver: "Suraj",
    car: "6613",
    status: "In Route",
    earnings: "$80",
    color: "bg-red-600",
    img: "https://i.pravatar.cc/40?img=3",
  },
];

export default function LiveCarStatus() {
  return (
    <div className="bg-white p-4 h-48 lg:h-1/3 overflow-hidden rounded-2xl shadow">
      <div className="flex justify-between">
        <h2 className=" font-bold mb-1">Live Car Status</h2>
        <SlidersHorizontal className="text-gray-700" />
      </div>
      <div className="max-h-48 overflow-y-scroll">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-white text-xs text-gray-500">
            <tr>
              <th className="p-2">No.</th>
              <th className="p-2">Car No.</th>
              <th className="p-2">Driver</th>
              <th className="p-2">Status</th>
              <th className="p-2">Earnings</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {cars.map((c, i) => (
              <tr key={i} className="border-t border-gray-300 text-left">
                <td className="p-2">{c.no}</td>
                <td className="p-2">
                  <p className="bg-gray-300 text-center rounded-md mr-6">
                    {c.car}
                  </p>
                </td>
                <td className="p-2 flex items-center gap-2">
                  <img src={c.img} alt="" className="w-6 h-6 rounded-full" />{" "}
                  {c.driver}
                </td>
                <td className="p-2 text-gray-600">
                  <div className="flex items-center gap-3">
                    <p className={`w-4 h-4 rounded-full ${c.color}`}></p>{" "}
                    {c.status}
                  </div>
                </td>
                <td className="p-2 text-gray-600"> {c.earnings}</td>
                <td>
                  <button className="bg-blue-600 text-xs  rounded-md py-1 px-2 text-white mt-1 mb-1 cursor-pointer hover:bg-blue-700">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
