'use client';
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineBell } from 'react-icons/ai';

const jobRequests = [
    {
        id: 1397,
        category: 'Cleaning',
        name: 'Sven Muleba',
        date: '17 Aug 2021, 03:30 PM',
        address: 'Elluminatti, 2nd floor, Aditya Complex, Jalaram 2, SBI building, Rajkot - 360001',
        services: [
            { name: 'Basic House Cleaning', price: '₹ 200' },
            { name: 'Deep Cleaning', price: '₹ 2250' }
        ],
        total: '₹ 2450',
        image: '/images/user1.png'
    },
    {
        id: 1398,
        category: 'Electrician',
        name: 'Marco Testi',
        date: '18 Aug 2021, 10:00 AM',
        address: 'Kalawad Road, opp Amitya University, near RMC office, Rajkot - 360005',
        services: [
            { name: 'Installation of electrical instruments', price: '₹ 100/hr' }
        ],
        total: '₹ 100/hr',
        image: '/images/user2.png'
    },
    {
        id: 1399,
        category: 'Plumbing',
        name: 'John Doe',
        date: '19 Aug 2021, 11:00 AM',
        address: '123 Main Street, Rajkot - 360001',
        services: [
            { name: 'Pipe Fixing', price: '₹ 500' },
            { name: 'Leakage Repair', price: '₹ 1500' }
        ],
        total: '₹ 2000',
        image: '/images/user3.png'
    },
    {
        id: 1400,
        category: 'Carpentry',
        name: 'Jane Smith',
        date: '20 Aug 2021, 02:00 PM',
        address: '456 Elm Street, Rajkot - 360002',
        services: [
            { name: 'Furniture Repair', price: '₹ 800' },
            { name: 'Custom Shelving', price: '₹ 1200' }
        ],
        total: '₹ 2000',
        image: '/images/user4.png'
    },
    {
        id: 1401,
        category: 'Landscaping',
        name: 'Alice Johnson',
        date: '21 Aug 2021, 09:00 AM',
        address: '789 Oak Street, Rajkot - 360003',
        services: [
            { name: 'Garden Design', price: '₹ 3000' },
            { name: 'Lawn Maintenance', price: '₹ 1000' }
        ],
        total: '₹ 4000',
        image: '/images/user5.png'
    },
    // Add more mock data here to demonstrate pagination
    // ...
];

const ITEMS_PER_PAGE = 5;

const Requests: NextPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(jobRequests.length / ITEMS_PER_PAGE);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const currentData = jobRequests.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="container min-h-screen bg-gray-50">
            <Head>
                <title>Job Requests</title>
            </Head>
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <button className="text-gray-700 hover:text-gray-900">
                    <AiOutlineMenu className="h-6 w-6" />
                </button>
                <h1 className="text-xl font-bold">Hi, John</h1>
                <button className="text-gray-700 hover:text-gray-900">
                    <AiOutlineBell className="h-6 w-6" />
                </button>
            </header>

            <main className="p-4">
                <h2 className="text-lg font-semibold mb-4">{`Let's get to work`}</h2>
                <p className="text-sm text-gray-600 mb-6">You have {jobRequests.length} new job requests. Please respond back.</p>
                <div className="space-y-6">
                    {currentData.map((request) => (
                        <Link key={request.id} href={`/requests/${request.id}`} passHref>
                            <div className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer relative overflow-hidden mb-5">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 relative">
                                        <Image src={request.image} alt={request.name} layout="fill" className="object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-semibold">{request.name}</h3>
                                        <p className="text-sm text-gray-500">{request.date}</p>
                                        <p className="text-sm text-gray-500">{request.address}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    {request.services.map((service, index) => (
                                        <p key={index} className="text-sm text-gray-700">
                                            {service.name}: <span className="font-bold">{service.price}</span>
                                        </p>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-sm font-bold text-blue-500">{request.total}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-6 flex justify-center">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                            disabled={currentPage === 1}
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 010 1.414L8.414 10l3.879 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === i + 1 ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                            disabled={currentPage === totalPages}
                        >
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 010-1.414L11.586 10 7.707 6.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </main>
        </div>
    );
};

export default Requests;
