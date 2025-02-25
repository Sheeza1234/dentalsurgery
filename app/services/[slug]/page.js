"use client";

import Navbar from '../../../components/navbar/index';
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';

// Function to dynamically import the correct component based on slug
const getComponent = (slug) => {
    const components = {
        "cosmetic_dentistry": dynamic(() => import('../../../components/services/cosmetic_dentistry/index'))
        // Add more services here...
    };

    return components[slug] || (() => <p>Service not found</p>);
};

export default function ServicePage() {
    const params = useParams();
    const [ServiceComponent, setServiceComponent] = useState(null);

    useEffect(() => {
        if (params?.slug) {
            setServiceComponent(() => getComponent(params.slug)); // ✅ Ensure it's a function
        }
    }, [params?.slug]);

    if (!ServiceComponent) {
        return <div className="min-h-screen flex flex-col items-center justify-center text-lg">Loading...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {/* ✅ Ensure ServiceComponent is rendered correctly */}
            <ServiceComponent key={params.slug} />
        </div>
    );
}
