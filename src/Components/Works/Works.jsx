import React, { useState, useEffect } from 'react';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Works = () => {
    const [scrollDirection, setScrollDirection] = useState('down');
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    const info = [
        {
            id: 1,
            title: "Stamford University Bangladesh",
            designation: "Lecturer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis perferendis commodi cum accusamus odio ad accusantium eos beatae dignissimos?",
            location: "Dhaka",
            date: "2014-2028"
        },
        {
            id: 2,
            title: "Stamford University Bangladesh",
            designation: "Lecturer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis perferendis commodi cum accusamus odio ad accusantium eos beatae dignissimos",
            location: "Dhaka",
            date: "2014-2028"
        },
        {
            id: 3,
            title: "Stamford University Bangladesh",
            designation: "Lecturer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis perferendis commodi cum accusamus odio ad accusantium eos beatae dignissimos?",
            location: "Dhaka",
            date: "2014-2028"
        },
        {
            id: 4,
            title: "Stamford University Bangladesh",
            designation: "Lecturer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis perferendis commodi cum accusamus odio ad accusantium eos beatae dignissimos?",
            location: "Dhaka",
            date: "2014-2028"
        },
    ];

    return (
        <div className='relative flex flex-col justify-center items-center bg-gray-900 text-white text-base pb-8 sm:text-lg m-4'>
            <div
                className={`fixed top-0 left-0 w-1 bg-red-500 h-full opacity-60 z-20 ${
                    scrollDirection === 'down' ? 'visible' : 'invisible'
                }`}
            ></div>
            {info.map((item, index) => (
                <InViewComponent key={item.id} index={index} item={item} />
            ))}
        </div>
    );
};

const InViewComponent = ({ item, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    if (inView) {
        controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: index * 0.3 }
        });
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            className='flex mb-10'
        >
            <div className='hidden items-start w-44 pt-0.5 relative sm:flex'>
                <div className='w-4/5 text-gray-500'>{item.date}</div>
                <div className='border border-red-600 w-px h-full translate-x-5 translate-y-10 opacity-30'></div>
                <MdOutlineWorkHistory className='text-3xl z-20' />
                <div className='border border-red-500 h-px w-8 translate-y-5 opacity-30'></div>
            </div>
            <div className='border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96'>
                <div className='text-xl font-medium'>{item.title}</div>
                <div className='text-gray-300 mb-6 sm:mb-8 sm:text-xs'>
                    {item.location}
                    <span className='sm:hidden'>{item.date}</span>
                </div>
                <div className='mb-4 text-left'>{item.description}</div>
            </div>
        </motion.div>
    );
};

export default Works;
