import React from 'react';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import Head from '../About/Head';
import ContactForm from './ContactForm';

const Contact = () => {
    const contactData = [
        {
            id: 1,
            title: "Email Us",
            info: "Interactively grow backend ideas for cross-platform models.",
            icon: FiMail,
            contact: "asifsikder23@gmail.com"
        },
        {
            id: 2,
            title: "Call Us",
            info: "Distinctively exploit optimal alignments for intuitive bandwidth",
            icon: FiPhoneCall,
            contact: "+8801872400423"
        },
        {
            id: 3,
            title: "Location",
            info: "Dania, Jatrabari, Dhaka-1236, Bangladesh",
            icon: FiMapPin,
            contact: ""
        },
    ]
    return (
        <div>
             <Head title={"Contact Us"} />
             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 mt-10 lg:my-20'>
                {
                    contactData?.map((item)=>(
                        <div key={item.id} className='border border-border flex-colo p-10 bg-slate-900 rounded-lg text-center'>
                            <span className='flex-colo w-20 h-20 rounded-full bg-black bg-opacity-30 mb-4 text-red-600 text-2xl'>
                                <item.icon/>
                            </span>
                            <h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
                            <p className='mb-0 text-sm text-white leading-7'>
                                <a href={`mailto:${item.contact}`} className='text-blue-600'>{item.contact}</a>{' '}
                                {item.info}
                            </p>
                        </div>
                    ))
                }
             </div>
             <ContactForm/>
        </div>
    );
};

export default Contact;