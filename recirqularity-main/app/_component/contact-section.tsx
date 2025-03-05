"use client";

import React, { useState } from "react";
import { Mail, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    request: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        throw new Error("Error in API calls");
      }

      console.log("Form submitted successfully");
      alert("Form submitted successfully!");

      setFormData({ name: "", email: "", mobile: "", request: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#E5EFEB] rounded">
      <div className="lg:px-8 py-12 px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 md:col-span-2">
          <h2 className="text-2xl font-bold text-[#023024] mb-6 underline">
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:grid md:grid-cols-2"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#023024]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm text-gray-700"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#023024]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block mb-1 text-sm text-gray-700"
              >
                Mobile No
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#023024]"
                placeholder="Enter your mobile number"
              />
            </div>
            <div>
              <label
                htmlFor="request"
                className="block mb-1 text-sm text-gray-700"
              >
                Your Request
              </label>
              <textarea
                id="request"
                name="request"
                value={formData.request}
                onChange={handleChange}
                required
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#023024]"
                placeholder="Please describe your request"
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#023024] text-white rounded-lg font-bold text-lg hover:bg-[#023024]/90 transition-colors"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#D3E0DB] p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold text-[#023024] mb-3 underline">
            Registered Address
          </h3>
          <address className="text-sm not-italic text-gray-700">
            Aurobindo Galaxy, Hyderabad Knowledge City, <br />
            Hitech City Road, Hyderabad, <br />
            Telangana 500081, IN
          </address>

          <h3 className="text-xl font-bold text-[#023024] mt-6 mb-3 underline">
            Connect With Us
          </h3>
          <div className="space-y-2">
            <a
              href="https://www.linkedin.com/company/re-cirqularity"
              className="flex items-center text-sm text-gray-700 hover:text-[#023024]"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
            <a
              href="mailto:info@resustainability.com"
              className="flex items-center text-sm text-gray-700 hover:text-[#023024]"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@resustainability.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
