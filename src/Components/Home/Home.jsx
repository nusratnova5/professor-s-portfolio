import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import SocialIcons from './SocialIcons';
import Photo from './Photo';
import Stats from './Stats';
import Services from '../Services/Services';
import Footer from '../Shared/Footer';
import Works from '../Works/Works';
import AboutMe from '../About me/AboutMe';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div id='home' className='w-3/4 mx-auto h-full'>
            <div className='flex flex-col lg:flex-row items-center justify-between mb-10'>
                <div className='text-center lg:text-left order-2 lg:order-none'>
                    <span className='text-xl'>Lecturer & Researcher</span>
                    <h1 className='text-5xl lg:text-6xl font-semibold mb-5'>Hello,I'm <br /> <span className='text-accent'>Adib Morshed Yeasin</span>

                    </h1>
                    <p className='max-w-[500px] mb-9 text-white/80'> I am Yeasin, guiding students through the dynamic world of Computer Science at Stamford University Bangladesh. Dive into my portfolio to uncover how I integrate cutting-edge research with hands-on learning experiences.</p>
                    <div className='flex flex-col lg:flex-row items-center gap-8'>
                        <button className='uppercase flex items-center gap-2 border border-accent rounded-full text-accent p-3 hover:bg-accent-hover hover:text-white'>
                            <span className='text-sm'>Download CV</span>
                            <MdOutlineFileDownload />
                        </button>
                        <div className='mb-8 lg:mb-0'>
                            <SocialIcons />
                        </div>
                    </div>
                </div>

                <div className='order-1 lg:order-none mb-8 lg:mb-0'>
                    <Photo/>
                </div>
            </div>
            <Stats/>
            <div id='services' className='w-full mt-20'>
                <h1 className='text-center font-bold text-5xl  mb-10 text-accent'>INSPIRE, EDUCATE, INNOVATE SERVICES</h1>
            <Services/>
            </div>
            <div id='works' className='w-full my-20'>
                <h1 className='text-center font-bold text-5xl  mb-10 text-accent'>Teaching Career Highlights</h1>
            <Works/>
            </div>
            <div id='about' className='w-full my-20'>
                <h1 className='text-center font-bold text-5xl  mb-10 text-accent'>Get to Know Me</h1>
            <AboutMe/>
            </div>
            <div id='contact' className='w-full my-20'>
                <h1 className='text-center font-bold text-5xl  mb-10 text-accent'>Get in Touch</h1>
            <Contact/>
            </div>
           
        </div>
    );
};

export default Home;