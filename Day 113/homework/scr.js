import React from "react";


class Statistic {
  constructor(label, value) {
    this.label = label;
    this.value = value;
  }
}


const statistics = [
  new Statistic("Users", 1200),
  new Statistic("Sales", 350),
  new Statistic("Revenue", "$24,500"),
];

const StatisticCard = ({ stat }) => (
  <div className="bg-white shadow-lg p-4 rounded-xl text-center">
    <h3 className="text-lg font-semibold">{stat.label}</h3>
    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-6">Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statistics.map((stat, index) => (
          <StatisticCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
}
