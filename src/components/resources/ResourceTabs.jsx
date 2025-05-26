import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { resources, tabs } from '../../data';

const ResourceTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const openForm = (resource) => {
        setSelectedResource(resource);
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
        setFormData({ name: '', email: '' });
        setErrors({});
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Enter a valid email';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const serviceID = 'service_hzqkqj6';
        const templateID = 'template_r5nhlxa';
        const publicKey = '_hE5FK0e73MmOnlBf';

        const templateParams = {
            name: formData.name,
            email: formData.email,
            resource: selectedResource.title,
        };

        setLoading(true);
        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            setLoading(false);
            closeForm();
            window.location.href = selectedResource.link;
        } catch (error) {
            console.error('EmailJS Error:', error);
            setLoading(false);
        }
    };

    const filteredResources = resources[activeTab.id]?.filter((resource) =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    return (
        <div className='py-6'>
            {/* Search + Category Dropdown */}
            <div className='flex flex-col md:flex-row gap-4 mb-6'>
                <input
                    type='text'
                    placeholder='Search resources...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                />

                <Listbox value={activeTab} onChange={setActiveTab}>
                    <div className='relative w-full md:w-1/2'>
                        <Listbox.Button className='w-full py-2 pl-4 pr-10 text-left bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary'>
                            {activeTab.label}
                            <ChevronUpDownIcon className='absolute right-3 top-2 h-5 w-5 text-gray-400' />
                        </Listbox.Button>
                        <Listbox.Options className='absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none'>
                            {tabs.map((tab) => (
                                <Listbox.Option
                                    key={tab.id}
                                    value={tab}
                                    className={({ active }) =>
                                        `cursor-pointer select-none relative px-4 py-2 ${
                                            active ? 'bg-primary text-white' : 'text-black'
                                        }`
                                    }>
                                    {tab.label}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                </Listbox>
            </div>

            {/* Resource Grid */}
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5'>
                {filteredResources.length > 0 ? (
                    filteredResources.map((item, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-[250px] md:max-w-[350px] mx-auto'>
                            <Link to={`/book/${encodeURIComponent(item.title)}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='w-full h-[180px] md:h-[350px] object-cover cursor-pointer'
                                />
                            </Link>
                            <div className='p-3 flex flex-col flex-grow justify-between'>
                                <div>
                                    <h3 className='font-semibold text-xs md:text-lg mb-1 text-black'>
                                        {item.title}
                                    </h3>
                                    <p className='text-gray-600 mb-3 text-xs md:text-base'>
                                        Available for: {item.price}
                                    </p>
                                </div>
                                <button
                                    onClick={() => openForm(item)}
                                    className='inline-block w-full text-center bg-primary text-[#F5E9DC] px-3 py-2 rounded-md text-xs md:text-base mt-auto'>
                                    Get Now
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='w-full text-center text-[#F5E9DC] text-xl col-span-full'>
                        No resources found.
                    </div>
                )}
            </div>

            {/* Keep your form modal as-is */}
            {showForm && (
                // [your form modal code remains unchanged]
            )}
        </div>
    );
};

export default ResourceTabs;