'use client';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FaCheck, FaTimes, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const jobApplications = {
    1: [
        {
            id: 101,
            name: "Alice Johnson",
            experience: "5 years",
            image: "/images/user1.png",
            email: "alice@example.com",
            phone: "(123) 456-7890",
            address: "123 Apple St, City, Country",
            bio: "Alice is a seasoned professional with a background in various cleaning services."
        },
        {
            id: 102,
            name: "Bob Smith",
            experience: "3 years",
            image: "/images/user2.png",
            email: "bob@example.com",
            phone: "(321) 654-0987",
            address: "456 Orange Ave, City, Country",
            bio: "Bob has extensive experience in plumbing and electrical services."
        }
    ]
};

const jobDetails = {
    id: 1,
    title: "House Cleaning",
    description: "A thorough house cleaning job including living room, bedrooms, and kitchen.",
    location: "789 Pine St, City, Country",
    owner: {
        name: "John Doe",
        phone: "(555) 123-4567",
        email: "john.doe@example.com"
    }
};

const RequestPage: NextPage<any> = ({ params }) => {
    const { id } = params;

    const applications = jobApplications[id as unknown as keyof typeof jobApplications] || [];

    const handleAccept = (applicantId: number) => {
        console.log(`Accepted applicant ${applicantId} for job ${id}`);
        // Handle accept logic here
    };

    const handleDeny = (applicantId: number) => {
        console.log(`Denied applicant ${applicantId} for job ${id}`);
        // Handle deny logic here
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Job Applications</title>
            </Head>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Job Applications for {jobDetails.title}</h1>
                <div className="bg-white p-4 rounded-lg shadow mb-4">
                    <h2 className="text-lg font-semibold mb-2">Job Details</h2>
                    <p className="text-gray-700 mb-2">{jobDetails.description}</p>
                    <p className="text-gray-700 mb-2"><FaMapMarkerAlt className="inline mr-2" />{jobDetails.location}</p>
                    <p className="text-gray-700 mb-2"><FaPhoneAlt className="inline mr-2" />{jobDetails.owner.phone}</p>
                    <p className="text-gray-700"><FaEnvelope className="inline mr-2" />{jobDetails.owner.email}</p>
                </div>


                {applications.length > 0 ? (
                    <div className="space-y-4">
                        {applications.map(applicant => (
                            <div key={applicant.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between hover:bg-gray-100 transition duration-300 ease-in-out">
                                <div className="flex items-center">
                                    <Image src={applicant.image} alt={applicant.name} width={50} height={50} className="rounded-full" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">{applicant.name}</h3>
                                        <p className="text-gray-600">{applicant.experience}</p>
                                        <p className="text-gray-600"><FaEnvelope className="inline mr-2" />{applicant.email}</p>
                                        <p className="text-gray-600"><FaPhoneAlt className="inline mr-2" />{applicant.phone}</p>
                                        <p className="text-gray-600"><FaMapMarkerAlt className="inline mr-2" />{applicant.address}</p>
                                        <p className="text-gray-600 mt-2">{applicant.bio}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-200"
                                        onClick={() => handleAccept(applicant.id)}
                                    >
                                        <FaCheck />
                                    </button>
                                    <button
                                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
                                        onClick={() => handleDeny(applicant.id)}
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-700">No applications found for this job.</p>
                )}
            </div>
        </div>
    );
};

export default RequestPage;
