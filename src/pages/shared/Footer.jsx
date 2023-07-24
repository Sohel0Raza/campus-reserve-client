import Wave from 'react-wavify'
import img from '../../assets/logo1.png'
const Footer = () => {
    return (
        <div>
            <div>
                <div className='h-'>
                    <Wave fill='#85d2f2'
                        paused={false}
                        options={{
                            height: 50,
                            amplitude: 50,
                            speed: 0.25,
                            points: 3
                        }}
                    >
                    </Wave>
                </div>
                <footer className="footer p-10 -mt-20 bg-[#85d2f2] text-base-content">
                    <div>
                        <div className='h-16 w-20'>
                            <img src={img} alt="" />
                        </div>
                        <p>Campus Reserve Ltd.<br />Providing reliable tech since 2023</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">College</a>
                        <a className="link link-hover">Course</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Events</a>
                        <a className="link link-hover">Sports</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;