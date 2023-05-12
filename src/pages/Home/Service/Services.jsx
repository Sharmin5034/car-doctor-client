import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
   
    return (
        <div className="my-28">
            <div className='text-center space-y-4 mb-14'>
                <h3 className='text-2xl font-bold text-orange-600'>Our Services </h3>
                <h2 className='text-5xl'>Our Service Area</h2>
                <p className="text-lg">the majority have suffered alteration in some form, by injected humour,
                     or randomised <br/> words which donot look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mx-auto">
            {
                  services.map(service =><ServicesCard key={service.service_id} service={service}></ServicesCard>)
            }
            </div>
            <div className="items-center justify-center">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">More Services</button>
            </div>
        </div>
    );
};

export default Services;