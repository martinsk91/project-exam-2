import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-20">
      <div className="max-w-3xl text-center p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          We are a company focused on providing high-quality products and exceptional customer service. Our mission is to enhance the lives of our customers by offering innovative solutions and exceptional value.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Sustainability</li>
        </ul>
      </div>
    </div>
  );
}

export default About;