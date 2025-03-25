import React, { useState } from "react";
import Navbar from "../pages/NavBar";
import bg from "../assets/bg.jpg";

const Dashboard = () => {
  // State to track the selected sidebar item
  const [selectedItem, setSelectedItem] = useState("Today's Schedule");

  // Dummy data for each sidebar item
  const dummyData = {
    "Today's Schedule": [
      { time: "9:00 AM", event: "DSA" },
      { time: "11:00 AM", event: "React JS" },
      { time: "1:00 PM", event: "Lunch Break" },
      { time: "2:00 PM", event: "MongoDb" },
    ],
    "Mark Attendance": [
      { name: "Shravan", status: "Present" },
      { name: "MonaLisha", status: "Present" },
      { name: "Vinayak Choubey", status: "Present" },
      { name: "Rishav", status: "Present" },
    ],
    "Pending Assignments": [
      { subject: "DSA", assignment: "Linked List" },
      { subject: "React Js", assignment: "Hooks" },
      { subject: "MongoDb", assignment: "Schema" },
    ],
    "Check Profile": [
      { name: "Shravan", number: "9065252026" },
      { name: "Mona", number: "9065252026" },
      { name: "Chaturvedi", number: "9065252026" },
      { name: "Rishav", number: "9065252026" },
    ],
  };

  return (
    <>
      <Navbar />
      {/* Full-screen container with background image */}
      <div className="relative w-full h-screen">
        {/* Background image */}
        <img
          src={bg}
          alt="Background Image"
          className="w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute top-0 left-0 w-full h-full flex">
          {/* Sidebar */}
          <div className="w-64 bg-white bg-opacity-75 shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
            <ul className="space-y-2">
              {Object.keys(dummyData).map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className={`w-full flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md ${
                      selectedItem === item ? "bg-gray-200" : ""
                    }`}
                  >
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">{selectedItem}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedItem === "Today's Schedule" &&
                dummyData["Today's Schedule"].map((schedule, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md"
                  >
                    <p className="text-lg font-semibold">{schedule.time}</p>
                    <p className="text-gray-600">{schedule.event}</p>
                  </div>
                ))}

              {selectedItem === "Mark Attendance" &&
                dummyData["Mark Attendance"].map((student, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md"
                  >
                    <p className="text-lg font-semibold">{student.name}</p>
                    <p
                      className={`text-sm ${
                        student.status === "Present"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {student.status}
                    </p>
                  </div>
                ))}

              {selectedItem === "Pending Assignments" &&
                dummyData["Pending Assignments"].map((assignment, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md"
                  >
                    <p className="text-lg font-semibold">
                      {assignment.subject}
                    </p>
                    <p className="text-gray-600">{assignment.assignment}</p>
                  </div>
                ))}

              {selectedItem === "Check Profile" &&
                dummyData["Check Profile"].map((profile, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md"
                  >
                    <p className="text-lg font-semibold">{profile.name}</p>
                    <p className="text-gray-600">{profile.number}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
