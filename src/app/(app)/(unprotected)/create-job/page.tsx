'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Select from 'react-select';
import axios from 'axios';
import { NextPage } from 'next';
import { State } from 'country-state-city';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // import styles
import { FaPaintRoller, FaLaptop, FaPlug, FaBroom, FaWrench, FaHammer, FaLeaf, FaHome, FaSnowflake, FaWindowRestore, FaDoorClosed, FaTv, FaTools, FaLock, FaTruck, FaBug, FaSwimmingPool, FaChair, FaSolarPanel } from 'react-icons/fa';

// Load react-quill dynamically
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

/**
 * Represents a form input for job creation.
 * @typedef {Object} JobFormInput
 * @property {string} title - The title of the job.
 * @property {string} description - The description of the job.
 * @property {string} city - The city where the job is located.
 * @property {string} category - The category of the job.
 */
type JobFormInput = {
    title: string;
    description: string;
    city: string;
    category: string;
};

const services = [
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

const CreateJobPage: NextPage = () => {
    const [job, setJob] = useState<JobFormInput>({
        title: '',
        description: '',
        city: '',
        category: '',
    });
    const [selectedCity, setSelectedCity] = useState(null);
    const [cityOptions, setCityOptions] = useState<{ value: string; label: string }[]>([]);

    useEffect(() => {
        const englandCities = State.getStatesOfCountry('GB').map(state => ({
            value: state.name,
            label: state.name
        }));
        setCityOptions(englandCities);
    }, []);

    /**
     * Handles form input change.
     * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    /**
     * Handles city selection change.
     * @param {any} selectedOption - The selected city option.
     */
    const handleCityChange = (selectedOption: any) => {
        setSelectedCity(selectedOption);
        setJob({ ...job, city: selectedOption.value });
    };

    /**
     * Handles service selection change.
     * @param {string} serviceName - The selected service name.
     */
    const handleServiceClick = (serviceName: string) => {
        setJob({ ...job, category: serviceName });
    };

    /**
     * Handles description change.
     * @param {string} value - The new description value.
     */
    const handleDescriptionChange = (value: string) => {
        setJob({ ...job, description: value });
    };

    /**
     * Handles form submission.
     * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Replace with actual API endpoint for job creation
            const response = await axios.post('/api/jobs', job);
            console.log('Job created successfully:', response.data);
            // Reset form after successful submission
            setJob({ title: '', description: '', city: '', category: '' });
            setSelectedCity(null);
        } catch (error) {
            console.error('Error creating job:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <Head>
                <title>Create a Job</title>
            </Head>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Create a Job</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Job Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={job.title}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Job Description</label>
                        <ReactQuill
                            value={job.description}
                            onChange={handleDescriptionChange}
                            className="mt-1 h-32"
                            theme="snow"
                        />
                    </div>
                    <div className="mb-4 pt-10">
                        <label htmlFor="city" className="block text-gray-700">City</label>
                        <Select
                            id="city"
                            value={selectedCity}
                            onChange={handleCityChange}
                            options={cityOptions}
                            className="mt-1"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="category" className="block text-gray-700">Job Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={job.category}
                            readOnly
                            className="mt-1 p-2 w-full border rounded-lg bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">Create Job</button>
                </form>
                <h2 className="text-xl font-semibold mt-6 mb-2">Select a Service</h2>
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 text-center hover:bg-gray-100 p-2 rounded transition duration-300 ease-in-out cursor-pointer"
                            onClick={() => handleServiceClick(service.name)}
                        >
                            <div className="w-16 h-16 mx-auto mb-2 flex justify-center items-center bg-gray-200 rounded-full">
                                {service.icon}
                            </div>
                            <span className="text-sm">{service.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreateJobPage;
