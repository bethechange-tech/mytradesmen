'use client';
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
    FaPaintRoller,
    FaLaptop,
    FaPlug,
    FaBroom,
    FaWrench,
    FaHammer,
    FaLeaf,
    FaHome,
    FaSnowflake,
    FaWindowRestore,
    FaDoorClosed,
    FaTv,
    FaTools,
    FaLock,
    FaTruck,
    FaBug,
    FaSwimmingPool,
    FaChair,
    FaSolarPanel
} from 'react-icons/fa';

interface Service {
    name: string;
    icon: JSX.Element;
}

interface ServiceItem {
    id: number;
    category: string;
    title: string;
    description: string;
    price: string;
    image: string;
}

const services: Service[] = [
    { name: 'Painters', icon: <FaPaintRoller className="text-4xl text-blue-500" /> },
    { name: 'PC/Laptop', icon: <FaLaptop className="text-4xl text-blue-500" /> },
    { name: 'Electrician', icon: <FaPlug className="text-4xl text-blue-500" /> },
    { name: 'Cleaning', icon: <FaBroom className="text-4xl text-blue-500" /> },
    { name: 'Plumbing', icon: <FaWrench className="text-4xl text-blue-500" /> },
    { name: 'Carpentry', icon: <FaHammer className="text-4xl text-blue-500" /> },
    { name: 'Landscaping', icon: <FaLeaf className="text-4xl text-blue-500" /> },
    { name: 'Roofing', icon: <FaHome className="text-4xl text-blue-500" /> },
    { name: 'HVAC', icon: <FaSnowflake className="text-4xl text-blue-500" /> },
    { name: 'Flooring', icon: <FaWrench className="text-4xl text-blue-500" /> },
    { name: 'Window Installation', icon: <FaWindowRestore className="text-4xl text-blue-500" /> },
    { name: 'Door Services', icon: <FaDoorClosed className="text-4xl text-blue-500" /> },
    { name: 'Electronics Repair', icon: <FaTv className="text-4xl text-blue-500" /> },
    { name: 'Appliance Repair', icon: <FaTools className="text-4xl text-blue-500" /> },
    { name: 'Security Installations', icon: <FaLock className="text-4xl text-blue-500" /> },
    { name: 'Moving Services', icon: <FaTruck className="text-4xl text-blue-500" /> },
    { name: 'Pest Control', icon: <FaBug className="text-4xl text-blue-500" /> },
    { name: 'Pool Services', icon: <FaSwimmingPool className="text-4xl text-blue-500" /> },
    { name: 'Furniture Assembly', icon: <FaChair className="text-4xl text-blue-500" /> },
    { name: 'Locksmith', icon: <FaLock className="text-4xl text-blue-500" /> },
    { name: 'Solar Panel Installation', icon: <FaSolarPanel className="text-4xl text-blue-500" /> },
];

const mockServices: ServiceItem[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    category: 'Cleaning',
    title: `Service ${i + 1}`,
    description: 'A service that involves general house cleaning jobs...',
    price: `₹ ${100 + i * 10}`,
    image: `/images/cleaning${(i % 3) + 1}.png`,
}));

const Browse: NextPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 10;

    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = mockServices.slice(indexOfFirstService, indexOfLastService);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="container min-h-screen bg-gray-50">
            <Head>
                <title>Browse Services</title>
            </Head>
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <button className="text-gray-700 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <h1 className="text-xl font-bold">Browse</h1>
                <button className="text-gray-700 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 19.121A1.5 1.5 0 006.243 21H17.757a1.5 1.5 0 001.122-2.121l-6-10.5a1.5 1.5 0 00-2.243 0l-6 10.5z" />
                    </svg>
                </button>
            </header>
            <main className="p-4">
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    {services.map((service, index) => (
                        <div key={index} className="flex-shrink-0 text-center hover:bg-gray-100 p-2 rounded transition duration-300 ease-in-out">
                            <div className="w-16 h-16 mx-auto mb-2 flex justify-center items-center bg-gray-200 rounded-full">
                                {service.icon}
                            </div>
                            <span className="text-sm">{service.name}</span>
                        </div>
                    ))}
                </div>
                <section className="mt-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Cleaning Services</h2>
                        <Link href="/cleaning" passHref>
                            <span className="text-sm text-blue-500 cursor-pointer hover:underline">view all</span>
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {currentServices.map(service => (
                            <Link href={`/jobs/${service.id}`} key={service.id} className="bg-white p-4 rounded-lg shadow flex hover:bg-gray-100 transition duration-300 ease-in-out">
                                <div className="w-16 h-16 mr-4">
                                    <Image src={service.image} alt={service.title} width={64} height={64} className="object-cover rounded-lg" />
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold">{service.title}</h3>
                                    <p className="text-sm text-gray-600">{service.description}</p>
                                    <p className="text-sm font-bold text-blue-500">{service.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Pagination
                            servicesPerPage={servicesPerPage}
                            totalServices={mockServices.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

interface PaginationProps {
    servicesPerPage: number;
    totalServices: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ servicesPerPage, totalServices, paginate, currentPage }) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalServices / servicesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex space-x-2">
                {pageNumbers.map(number => (
                    <li
                        key={number}
                        className={`cursor-pointer px-3 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Browse;
