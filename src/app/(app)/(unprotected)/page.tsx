'use client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaPlug, FaBroom, FaWrench, FaPaintRoller, FaHammer, FaLeaf, FaHome, FaSnowflake, FaWindowRestore, FaDoorClosed, FaTv, FaTools, FaLock, FaTruck, FaBug, FaSwimmingPool, FaChair, FaSolarPanel } from 'react-icons/fa';

const services = [
  { name: "Electrical", icon: <FaPlug className="text-4xl text-blue-500" />, description: "Electrical installations and repairs" },
  { name: "Cleaning", icon: <FaBroom className="text-4xl text-blue-500" />, description: "Complete house cleaning services" },
  { name: "Plumbing", icon: <FaWrench className="text-4xl text-blue-500" />, description: "Piping and leakage fixes" },
  { name: "Painting", icon: <FaPaintRoller className="text-4xl text-blue-500" />, description: "Interior and exterior painting" },
  { name: "Carpentry", icon: <FaHammer className="text-4xl text-blue-500" />, description: "Custom furniture and repair" },
  { name: "Landscaping", icon: <FaLeaf className="text-4xl text-blue-500" />, description: "Garden design and maintenance" },
  { name: "Roofing", icon: <FaHome className="text-4xl text-blue-500" />, description: "Roof repair and installation" },
  { name: "HVAC", icon: <FaSnowflake className="text-4xl text-blue-500" />, description: "Heating and air conditioning services" },
  { name: "Flooring", icon: <FaWrench className="text-4xl text-blue-500" />, description: "Installation and repair of all types of flooring" },
  { name: "Window Installation", icon: <FaWindowRestore className="text-4xl text-blue-500" />, description: "Window fitting and repair" },
  { name: "Door Services", icon: <FaDoorClosed className="text-4xl text-blue-500" />, description: "Door installation and repair" },
  { name: "Electronics Repair", icon: <FaTv className="text-4xl text-blue-500" />, description: "Repair of household electronics" },
  { name: "Appliance Repair", icon: <FaTools className="text-4xl text-blue-500" />, description: "Home appliance troubleshooting and repair" },
  { name: "Security Installations", icon: <FaLock className="text-4xl text-blue-500" />, description: "Home security systems installation" },
  { name: "Moving Services", icon: <FaTruck className="text-4xl text-blue-500" />, description: "Help with moving houses" },
  { name: "Pest Control", icon: <FaBug className="text-4xl text-blue-500" />, description: "Extermination and pest management" },
  { name: "Pool Services", icon: <FaSwimmingPool className="text-4xl text-blue-500" />, description: "Pool cleaning and maintenance" },
  { name: "Furniture Assembly", icon: <FaChair className="text-4xl text-blue-500" />, description: "Household furniture assembly" },
  { name: "Locksmith", icon: <FaLock className="text-4xl text-blue-500" />, description: "Emergency lockout services" },
  { name: "Solar Panel Installation", icon: <FaSolarPanel className="text-4xl text-blue-500" />, description: "Solar technology installation and maintenance" }
];

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Handyman Services</title>
      </Head>
      <div className="container mx-auto pt-5 px-4">
        {/* Services Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-lg font-bold mb-4 text-center">Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link href={`/services/${service.name}`} key={service.name}>
                <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow hover:bg-gray-200 transition duration-300 ease-in-out">
                  <div className="w-16 h-16 mb-2 flex justify-center items-center bg-gray-200 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-center">{service.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
