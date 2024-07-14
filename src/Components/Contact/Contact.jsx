import { Input } from 'postcss';
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';



const info = [
    {
        icon: <FaPhone />,
        title: "Phone",
        description: "01521260100"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "yeasin@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Jatrabari,Dhaka",
    }
]
const Contact = () => {
    return (
        <div>
            <div className='w-full mx-auto flex flex-col lg:flex-row gap-[100px]'>
                <div className='lg:w-[54%] order-1 lg:order-none'>
                    <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                        <h3 className='text-4xl text-accent'>Let's work together</h3>
                        <p className='text-white/60'>I’d love to hear from you! For questions, collaborations, or just to connect, feel free to reach out via email, phone, or the form below. I’ll respond as soon as possible.
                       </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <input className='flex rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none' type="firstname" placeholder="First name" />
                            <input className='flex rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none' type="lastname" placeholder="Last name" />
                            <input className='flex rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none' type="email" placeholder="Email address" />
                            <input className='flex rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none' type="phone" placeholder="Phone number" />
                        </div>

                        <select className='flex w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/60 placeholder:text-white/10 focus:border-accent outline-none'>
                            <option className=' border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none' value="1">Teaching and Curriculum Development</option>
                            <option value="2">Mentoring and Supervision</option>
                            <option value="4">Community and Outreach Programs</option>
                        </select>
                        <textarea className='flex min-h[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none	' placeholder='Type your message here.' />
                        <div className='flex'>
                        <button className='btn border-none bg-accent rounded-full'>Send message</button>
                        </div>
                    </form>
                </div>
                <div className='flex-1 flex items-center order-1 lg:order-none mb-8 lg:mb-0'>
                    <ul className='flex flex-col gap-10'>
                        {info.map((item, index) => {
                            return <li className='flex items-center gap-6'>
                                <div className='w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                    <div className='text-[28px]'>{item.icon}</div>
                                </div>
                                <div className='flex-1'>
                                    <p className='text-white/60'>{item.title}</p>
                                    <h3 className='text-xl'>{item.description}</h3>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;