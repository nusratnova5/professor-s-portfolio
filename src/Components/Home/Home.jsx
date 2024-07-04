import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import SocialIcons from './SocialIcons';
import Photo from './Photo';

const Home = () => {
    return (
        <div className='w-3/4 mx-auto h-full'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className='text-center lg:text-left order-2 lg:order-none'>
                    <span className='text-xl'>Lecturer & Researcher</span>
                    <h1 className='text-5xl lg:text-6xl font-semibold mb-5'>Hello,I'm <br /> <span className='text-accent'>Adib Morshed Yeasin</span>

                    </h1>
                    <p className='max-w-[500px] mb-9 text-white/80'> I am Dr. [Lecturer's Name], guiding students through the dynamic world of Computer Science at [Your University Name]. Delve into my portfolio to uncover how I integrate cutting-edge research with hands-on learning experiences</p>
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
        </div>
    );
};

export default Home;