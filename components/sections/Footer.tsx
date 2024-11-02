const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <a href="https://github.com/Bhavyamm" target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/bhavyam-mittal-071b95184/" target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 mb-2 ml-1" />
                    </div>
                </a>
            </div>

            <p className="text-white-500">© 2024 Bhavyam Mittal. All rights reserved.</p>
        </footer>
    );
};

export default Footer;