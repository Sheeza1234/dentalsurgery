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
                    "cosmetic_dentistry": () => import('../../../components/services/cosmetic_dentistry'),
                    "general_dentistry": () => import('../../../components/services/general_dentistry'),
                    "emergency_dentistry": () => import('../../../components/services/emergency_dentistry'),
                    "restorative_dentistry": () => import('../../../components/services/restorative_dentistry'),
                    "wisdom_teeth": () => import('../../../components/services/wisdom_teeth'),
                    "teeth_grinding": () => import('../../../components/services/teeth_grinding'),
                    "sleep_dentistry": () => import('../../../components/services/sleep_dentistry'),
                    "sleep_apnoea": () => import('../../../components/services/sleep_apnoea'),
                    "senior_dental": () => import('../../../components/services/senior_dental'),
                    "orthodontics": () => import('../../../components/services/orthodontics'),
                    "invisalign": () => import('../../../components/services/invisalign'),
                    "dentures": () => import('../../../components/services/dentures'),
                    "dental_implants": () => import('../../../components/services/dental_implants'),
                    "children_dental": () => import('../../../components/services/children_dental'),
                    "brixsm": () => import('../../../components/services/brixsm'),
                    "bad_breath": () => import('../../../components/services/bad_breeth'),
                    "all_on_4":()=>import('@/components/services/all_on_4')
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
        <div className="min-h-screen w-full flex flex-col">
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
