import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
    const stats =[
        {
            num: 12,
            text:"Years of experience",
        },
        {
            num: 26,
            text:"Research Publications",
        },
        {
            num: 8,
            text:"Student Projects Supervised",
        },
        {
            num: 5,
            text:"Conferences Attended",
        }
    ]
    return (
        <div className='pt-4 pb-12 lg:pt-0 lg:pb-0'>
            <div className="container mx-auto">
                <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none'>
                    {stats.map((item,index)=>{
                        return (
                            <div key={index} className='flex-1 flex gap-4 items-center justify-center lg:justify-start'>
                                <CountUp 
                                end={item.num} 
                                duration={5}
                                delay={2}
                                className='text-4xl lg:text-6xl font-extrabold'
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                    {item.text}
                                </p>
                            </div>

                            
                        );
                    })}
                </div>
            </div>
            
        </div>
    );
};

export default Stats;