import Navbar from '../../../components/navbar/index';
import dynamic from 'next/dynamic';

// Function to dynamically import the correct component based on slug
const getComponent = (slug) => {
    const components = {
        "cosmetic-dentistry": dynamic(() => import('../../../components/services/cosmetic_dentistry/page'))
        // Add more services here...
    };

    return components[slug] || (() => <p>Service not found</p>);
};

export default function ServicePage({ params }) {
    const ServiceComponent = getComponent(params.slug);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <ServiceComponent />
        </div>
    );
}
