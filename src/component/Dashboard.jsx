import React from "react";

const DashboardPage = () => {
 
  const tableData = [
    {
      id: 1,
      name: "Sandeep Chauhan",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Quantam",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Virat Kohli",
      role: "Manager",
      status: "Active",
    },
    {
      id: 4,
      name: "MS Dhoni",
      role: "Admin",
      status: "Active",
    },
  ];

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-teal-600 to-teal-300">
      <div className="bg-blue-950 rounded-lg shadow-lg p-6 w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-teal-300 text-center mb-6">
          User Dashboard
        </h2>

        <table className="min-w-full table-auto text-teal-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="bg-gray-800 hover:bg-teal-500 transition duration-300">
                <td className="py-2 px-4 border-b">{row.name}</td>
                <td className="py-2 px-4 border-b">{row.role}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`${
                      row.status === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    } font-semibold`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b flex space-x-2 justify-center">
                  <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition duration-200">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;






