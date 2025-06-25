"use client";

import Navbar from '../../../components/navbar/index';
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';

export default function ServicePage() {
    const params = useParams();
    const [ServiceComponent, setServiceComponent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadComponent = async () => {
            const slug = params?.slug;

            try {
                const componentMap = {
                    "cosmetic_dentistry": () => import('../../../components/services/cosmetic_dentistry')
                };

                if (slug && componentMap[slug]) {
                    const mod = await componentMap[slug]();
                    setServiceComponent(() => mod.default);
                } else {
                    setServiceComponent(() => () => <div>Service not found</div>);
                }
            } catch (error) {
                console.error("Dynamic import error:", error);
                setServiceComponent(() => () => <div>Error loading service</div>);
            } finally {
                setLoading(false);
            }
        };

        loadComponent();
    }, [params?.slug]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {loading ? (
                <div className="flex-1 flex items-center justify-center">Loading...</div>
            ) : ServiceComponent ? (
                <ServiceComponent />
            ) : (
                <div className="flex-1 flex items-center justify-center">Service not found</div>
            )}
        </div>
    );
}
