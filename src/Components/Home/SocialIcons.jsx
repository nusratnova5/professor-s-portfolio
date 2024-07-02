import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialIcons = () => {
    return (
        <div className='flex justify-center items-center gap-5'>
          <Link><FaFacebook className='w-9 h-9 p-1 border border-accent rounded-full  text-accent text-base hover:bg-accent hover:text-primary '/>
          </Link>  
          <Link><FaGithub className='w-9 h-9 p-1 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary '/>
          </Link>  
          <Link><FaTwitter className='w-9 h-9 p-1 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary '/>
          </Link>  
          <Link><FaLinkedinIn className='w-9 h-9 p-1 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary '/>
          </Link>  
        </div>
    );
};

export default SocialIcons;