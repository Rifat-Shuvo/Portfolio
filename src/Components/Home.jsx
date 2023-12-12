import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url("/Banner.jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hey, Welcome to my personal website</h1>
                        <p className="mb-5">This is Rifat H Shuvo, a MERN stack Web developer,   passionate about building innovative and user-friendly web software</p>
                        <Link to='/contact'><button className="btn btn-primary">Contact</button></Link>
                        {/* <button className="btn btn-primary ml-5">Resume</button> */}
                        <a href="https://raw.githubusercontent.com/Rifat-Shuvo/Portfolio/9ca09c2998abd5f64303018c5d73ed46e70e1535/public/samplecv.pdf" download>
                        <button className="btn btn-primary ml-5">Resume</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* service section */}

            <section className='text-center mb-16 mx-8'>
                <h1 className='text-5xl font-bold my-10 text-blue-700'>What I Do ?</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                    <div className="card bg-primary text-primary-content">
                        <div className="card-body">

                            <h2 className="card-title text-2xl">Front-end Development</h2>
                            <p className='text-justify'>I am a passionate frontend web developer with a strong eye for user experience and clean, responsive design. I leverage my skills in HTML, CSS, JavaScript, and various frontend frameworks to create beautiful and user-friendly web applications that enhance user engagement and achieve business goals.</p>

                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Responsive Design</h2>
                            <p className='text-justify'>I craft websites that look and function flawlessly across all devices, desktops to smartphones and tablets. I leverage my expertise in responsive design principles and modern web development technologies to create user-centric experiences that are both visually appealing and highly usable.</p>

                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Back-end development</h2>
                            <p className='text-justify'>I am a skilled backend developer with a passion for building robust and scalable APIs. I leverage the power of Node.js and Express.js to create high-performance web applications that meet the needs of modern businesses.</p>

                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Database Management</h2>
                            <p className='text-justify'>I am a skilled and experienced MongoDB Atlas database manager with a passion for ensuring high availability, scalability, and performance for critical applications. I have a deep understanding of MongoDB Atlas features and functionalities and leverage them to design, implement, and manage robust and secure database solutions.</p>

                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Website Authentication & First level security</h2>
                            <p className='text-justify'>Security is very important for the today’s world. So, it’s more important for the websites because, different kinds of information are stored in a website. I was implemented website authentication using Firebase and JWT for secure user access and authorization.</p>

                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Fixing Errors & Bugs</h2>
                            <p className='text-justify'>With a keen eye for detail and a passion for user experience, I possess a strong track record in identifying and resolving bugs and errors on websites. I leverage my comprehensive understanding of web development principles and technologies to pinpoint the root cause of issues, implement efficient fixes, and ensure smooth website functionality.</p>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;