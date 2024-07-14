import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { BsArrowDownRight } from 'react-icons/bs';
const Services = () => {

    const services = [
        {
            num: "01",
            title: "Teaching and Curriculum Development",
            description: "Designing engaging courses, creating online content, and using innovative teaching methods to foster student learning.",
            href: "",
        },
        {
            num: "02",
            title: "Mentoring and Supervision",
            description: "Guiding graduate and postgraduate students in their research projects, theses, and career development paths.",
            href: "",
        },
        {
            num: "03",
            title: "Academic Research Consulting",
            description: "Providing guidance on research design, data analysis, and grant writing to advance scholarly pursuits.",
            href: "",
        },
        {
            num: "04",
            title: "Community and Outreach Programs",
            description: "Engaging in public lectures, educational outreach initiatives, and community-based research to promote knowledge dissemination and societal impact.",
            href: "",
        }
    ]
    return (
      <>
        <style>
        {`
          .group:hover .text-outline-hover {
            -webkit-text-stroke: 1px #00ff99;
          }
          .text-outline{
          -webkit-text-stroke: 1px #ffffff;
          }
        `}
      </style>
        <div className='w-full flex flex-col justify-center py-12 lg:py-0'>
            <div className='mx-auto w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px] w-full'>
                    {services.map((service, index) => {
                        return (
                            <div key={index} className='flex-1 flex-col justify-center gap-6 group w-full border-b border-white/20'>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-4xl text-transparent font-extrabold text-outline text-outline-hover transition-all duration-500 '>{service.num}</div>
                                    <Link href={service.href}
                                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    ><BsArrowDownRight className="text-primary text-3xl" /></Link>
                                </div>
                                <h2 className="text-[42px] mt-2 mb-5 font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60 mb-5">{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </>
    );
};

export default Services;