import React from 'react';
import { motion } from "framer-motion"
import img from '../Home/images/Yeasin.png'

const Photo = () => {
    return (
        <div>
            <motion.div>
                <div className='w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten'>
                    <img src={img} priority quality={100} fill className='object-fill rounded-full'></img>
                </div>
            </motion.div>
        </div>
    );
};

export default Photo;