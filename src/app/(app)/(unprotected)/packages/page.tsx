'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

/**
 * Represents a package option.
 * @typedef {Object} PackageOption
 * @property {string} name - The name of the package.
 * @property {number} price - The price of the package.
 * @property {string} description - The description of the package.
 * @property {number} shortlists - The number of shortlists included in the package.
 * @property {string} benefits - The benefits of the package.
 */
type PackageOption = {
    name: string;
    price: number;
    description: string;
    shortlists: number;
    benefits: string;
};

/**
 * List of available packages.
 * @type {PackageOption[]}
 */
const packages: PackageOption[] = [
    {
        name: "Pay as You Go",
        price: 5,
        description: "Ideal for tradesmen starting their business or seeking extra income.",
        shortlists: 0,
        benefits: "Gain client contact information even if you do not win the job."
    },
    {
        name: "Silver",
        price: 35,
        description: "Professional package for steady job leads.",
        shortlists: 25,
        benefits: "Limited access to the invoicing and quotation system, cost-effective for steady job leads."
    },
    {
        name: "Gold",
        price: 50,
        description: "Premium package for established tradesmen.",
        shortlists: 70,
        benefits: "Unlimited access to the invoicing and quotation system, ad-free experience."
    }
];

const PackageSelectionPage: NextPage = () => {
    const [selectedPackage, setSelectedPackage] = useState<PackageOption | null>(null);
    const [message, setMessage] = useState<string>("");

    /**
     * Handles the selection of a package.
     * @param {PackageOption} pkg - The selected package.
     */
    const handleSelectPackage = (pkg: PackageOption) => {
        setSelectedPackage(pkg);
        setMessage("");
    };

    /**
     * Handles the confirmation of the selected package.
     */
    const handleConfirmPackage = () => {
        if (selectedPackage) {
            // Handle package selection logic here (e.g., save to user profile, initiate payment process)
            console.log(`Selected package: ${selectedPackage.name} - £${selectedPackage.price}`);
            setMessage(`You have selected the ${selectedPackage.name} package.`);
        }
    };

    return (
        <div className="container min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 py-10">
            <Head>
                <title>Select a Package</title>
            </Head>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-4xl w-full mx-4">
                <h1 className="text-4xl font-bold mb-10">Choose Your Plan</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <Link key={pkg.name} href={`/packages/${pkg.name.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                            <div
                                className={`p-6 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 ${selectedPackage?.name === pkg.name ? 'ring-4 ring-blue-300' : 'hover:ring-4 hover:ring-blue-100'}
                                ${pkg.name === "Pay as You Go" ? 'bg-purple-500 text-white' : pkg.name === "Silver" ? 'bg-gray-300 text-black' : 'bg-yellow-300 text-black'}`}
                                onClick={() => handleSelectPackage(pkg)}
                            >
                                <h2 className="text-3xl font-bold mb-2">{pkg.name}</h2>
                                <p className="text-xl mb-4">{pkg.description}</p>
                                <p className="text-5xl font-bold mb-2">£{pkg.price}</p>
                                {pkg.shortlists > 0 && <p className="text-lg mb-4">Includes {pkg.shortlists} shortlists per month</p>}
                                <p className="text-lg">{pkg.benefits}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                {selectedPackage && (
                    <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow-md w-full">
                        <h2 className="text-2xl font-bold mb-2">Confirm Your Selection</h2>
                        <p className="text-gray-700 mb-4">
                            You have selected the <strong>{selectedPackage.name}</strong> package. This will cost you <strong>£{selectedPackage.price}</strong>.
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Description:</strong> {selectedPackage.description}
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Benefits:</strong> {selectedPackage.benefits}
                        </p>
                        {selectedPackage.shortlists > 0 && (
                            <p className="text-gray-700 mb-4">
                                <strong>Shortlists Included:</strong> {selectedPackage.shortlists}
                            </p>
                        )}
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
                            onClick={handleConfirmPackage}
                        >
                            Confirm Package
                        </button>
                    </div>
                )}
                {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
            </div>
        </div>
    );
};

export default PackageSelectionPage;
