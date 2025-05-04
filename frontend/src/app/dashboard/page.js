
"use client";
import Link from "next/link";

export default function CompanyDashboard() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: 'url("/assets/images/dashboard.jpg")', // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-10">Company Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Add Packages */}
        <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-3">Add Packages</h2>
          <p className="mb-4 text-gray-600">
            Create exciting travel packages for your customers.
          </p>
          <Link
            href="/add_package"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add
          </Link>
        </div>

        {/* Manage Packages */}
        <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-3">Manage Packages</h2>
          <p className="mb-4 text-gray-600">
            View, search and manage all your packages.
          </p>
          <Link
            href="/managePackages"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Manage
          </Link>
        </div>
      </div>
    </div>
  );
}

