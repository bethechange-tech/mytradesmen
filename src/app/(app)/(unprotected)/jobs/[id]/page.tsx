'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';

const job = {
    title: "House Cleaning",
    description: "A thorough house cleaning job including living room, bedrooms, and kitchen.",
    owner: {
        name: "John Doe",
        address: "123 Main Street, City, Country",
        phone: "(123) 456-7890",
        email: "john@example.com",
        image: "/images/user-profile.png"
    },
    location: [51.505, -0.09] as LatLngTuple, // Example coordinates for the map
};

const mockUsers = [
    {
        name: "Jane Smith",
        email: "jane@example.com",
        package: "Pay as You Go", // Possible values: "Pay as You Go", "Silver", "Gold"
        shortlistsRemaining: 0 // Only for Silver and Gold packages
    },
    {
        name: "John Doe",
        email: "john@example.com",
        package: "Silver", // Possible values: "Pay as You Go", "Silver", "Gold"
        shortlistsRemaining: 10 // Only for Silver and Gold packages
    },
    {
        name: "Alice Johnson",
        email: "alice@example.com",
        package: "Gold", // Possible values: "Pay as You Go", "Silver", "Gold"
        shortlistsRemaining: 70 // Only for Silver and Gold packages
    }
];

const JobPage: NextPage = () => {
    const [currentUser, setCurrentUser] = useState(mockUsers[1]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [charge, setCharge] = useState(0);
    const [shortlistsUsed, setShortlistsUsed] = useState(0);
    const [message, setMessage] = useState("");

    const handleApplyClick = () => {
        let calculatedCharge = 0;
        let usedShortlists = 0;

        if (currentUser.package === "Pay as You Go") {
            calculatedCharge = 5;
        } else if (currentUser.package === "Silver" || currentUser.package === "Gold") {
            if (currentUser.shortlistsRemaining > 0) {
                usedShortlists = 1;
            } else {
                calculatedCharge = 5; // Example charge for additional shortlists
            }
        }

        setCharge(calculatedCharge);
        setShortlistsUsed(usedShortlists);
        setMessage("");
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleProceedClick = () => {
        setIsModalOpen(false);
        if (shortlistsUsed > 0) {
            currentUser.shortlistsRemaining -= shortlistsUsed;
            setMessage("Shortlist deducted from your package.");
        }
        if (charge > 0) {
            console.log(`Charged £${charge} for applying to the job`);
            setMessage(`Charged £${charge} for applying to the job.`);
            // initiatePaymentProcess(charge).then(() => applyForJob());
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>{job.title}</title>
            </Head>
            <div className="container mx-auto p-4">
                <div className="relative bg-white shadow rounded-lg p-6 z-10">
                    <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
                    <p className="text-gray-700 mb-6">{job.description}</p>
                    <h2 className="text-lg font-semibold mb-4">Job Location</h2>
                    <div className="w-full h-64 mb-6 z-0">
                        <MapContainer center={job.location} zoom={13} className="w-full h-full z-0">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={job.location}>
                                <Popup>{job.title}</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">Job Owner</h2>
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 mr-4">
                            <Image src={job.owner.image} alt={job.owner.name} width={64} height={64} className="rounded-full" />
                        </div>
                        <div>
                            <h3 className="text-md font-semibold flex items-center"><FaUser className="mr-2" /> {job.owner.name}</h3>
                            <p className="text-sm text-gray-700 flex items-center"><FaMapMarkerAlt className="mr-2" /> {job.owner.address}</p>
                            <p className="text-sm text-gray-700 flex items-center"><FaPhoneAlt className="mr-2" /> {job.owner.phone}</p>
                            <p className="text-sm text-gray-700 flex items-center"><FaEnvelope className="mr-2" /> {job.owner.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleApplyClick}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
                        Apply for Job
                    </button>
                    {message && <p className="mt-4 text-green-500">{message}</p>}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full z-50">
                        <h2 className="text-xl font-bold mb-4">Apply for Job</h2>
                        <p className="mb-4">
                            You will be charged {shortlistsUsed > 0 ? "1 shortlist from your package" : `£${charge}`} to apply for this job.
                            <br />
                            Breakdown:
                        </p>
                        <ul className="list-disc pl-5 mb-4">
                            {shortlistsUsed > 0 && <li>1 shortlist deducted from your package.</li>}
                            {charge > 0 && <li>Charge: £{charge}</li>}
                        </ul>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200">
                                Cancel
                            </button>
                            <button
                                onClick={handleProceedClick}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobPage;
