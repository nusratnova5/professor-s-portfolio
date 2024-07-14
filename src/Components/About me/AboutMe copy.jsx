import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
    const info = {
        birthday: "10 June 1993",
        age: "31",
        degree: "Msc in CSE",
        city: "Dhaka",
        email: "yeasin@gmail.com",
        phone: "9832487402",
        status: "Employed",
        nationality: "Bangladeshi",
        skills: [
            { name: 'Curriculum Development', percentage: 90 },
            { name: 'Effective Communication', percentage: 95 },
            { name: 'Team Leadership', percentage: 85 },
            { name: 'Student Engagement', percentage: 90 },
            { name: 'Problem Solving', percentage: 80 },
        ],
    };

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Set isVisible to true when the section is in view
    if (inView) {
        setIsVisible(true);
    }

    return (
        <div className='w-full mx-auto' ref={ref}>
            <div className="relative inline-block text-4xl font-bold text-white mb-3">
                <h1 className='my-2'>About</h1>
                <div className="absolute left-0 w-1/2 h-0.5 my-1 bg-accent -bottom-1"></div>
                <div className="absolute left-0 w-1/4 h-0.5 bg-accent -bottom-2"></div>
            </div>
            <div>
                <h1 className='text-2xl mt-4 mb-1'>I am <span className='font-bold'>Yeasin</span></h1>
                <p className='text-xl'>A passionate university lecturer dedicated to fostering student growth and success. With a focus on practical learning and collaboration, I strive to create an inclusive and engaging environment that prepares students for their future careers. Committed to bridging the gap between theory and practice, I aim to inspire and equip the next generation of professionals.</p>
            </div>
            <div className='mt-7'>
                <div className='flex lg:flex-row flex-col gap-10'>
                    <div className="grid w-full">
                        <div className='flex  w-full gap-5'>
                            <div className='w-full'>
                                <p className='border-b my-5 border-gray-400'>Birthday: {info.birthday}</p>
                                <p className='border-b my-5 border-gray-400'>Age: {info.age}</p>
                                <p className='border-b my-5 border-gray-400'>Email: {info.email}</p>
                                <p className='border-b my-5 border-gray-400'>Phone: {info.phone}</p>
                            </div>
                            <div className='w-full'>
                                <p className='border-b my-5 border-gray-400'>Degree: {info.degree}</p>
                                <p className='border-b my-5 border-gray-400'>City: {info.city}</p>
                                <p className='border-b my-5 border-gray-400'>Status: {info.status}</p>
                                <p className='border-b my-5 border-gray-400'>Status: {info.nationality}</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <button className='btn-sm bg-white px-2rounded-lg text-black'>Download CV</button>
                            <button className='btn-sm bg-accent px-2 rounded-lg text-white'>Hire me</button>
                        </div>
                    </div>
                    <div className='w-full '>
                        {isVisible && info.skills.map((skill, index) => (
                            <div key={index} className="mb-4">
                                <div className='flex justify-between'>
                                    <p className="mb-2">{skill.name}</p>
                                    <p>
                                        <CountUp
                                            end={skill.percentage}
                                            duration={2.5}
                                            decimals={0}
                                        />%
                                    </p>
                                </div>
                                <div className="bg-gray-200 h-3 rounded-lg w-full relative">
                                    <div className="bg-accent rounded-lg h-full" style={{ width: `${skill.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
