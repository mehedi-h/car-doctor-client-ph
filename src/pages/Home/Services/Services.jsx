// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// DRY --> Do not Repeat Yourself
const Services = () => {
    const [ ascending, setAscending ] = useState(true)
    const services = useServices(ascending);
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-doctor-server-topaz-one.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <button 
                    onClick={ () => setAscending(!ascending)}
                    className="btn btn-secondary">
                        { ascending ? 'Price : High to Low' : 'Price : low to high'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;