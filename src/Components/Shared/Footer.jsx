import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-transparent text-white p-4">
            <aside>
                <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;