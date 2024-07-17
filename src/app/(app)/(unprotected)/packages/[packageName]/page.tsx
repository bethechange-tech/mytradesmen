import { NextPage } from 'next';
import Head from 'next/head';
import packages from '../data'; // Import your packages data

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
const PackageDetailPage: NextPage<any> = ({ params }) => {
    const { packageName } = params;

    const pkg = packages.find((p) => p.name.toLowerCase().replace(/\s+/g, '-') === packageName);

    if (!pkg) {
        return <p>Package not found</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <Head>
                <title>{pkg.name} Package Details</title>
            </Head>
            <div className="p-4 text-center">
                <h1 className="text-4xl font-bold mb-10">{pkg.name} Package Details</h1>
                <div className={`p-6 rounded-lg shadow-md ${pkg.name === "Pay as You Go" ? 'bg-purple-500 text-white' : pkg.name === "Silver" ? 'bg-gray-300 text-black' : 'bg-yellow-300 text-black'}`}>
                    <h2 className="text-3xl font-bold mb-2">{pkg.name}</h2>
                    <p className="text-xl mb-4">{pkg.description}</p>
                    <p className="text-5xl font-bold mb-2">£{pkg.price}</p>
                    {pkg.shortlists > 0 && <p className="text-lg mb-4">Includes {pkg.shortlists} shortlists per month</p>}
                    <p className="text-lg mb-4">{pkg.benefits}</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200">
                        Select Package
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PackageDetailPage;
