import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url("/Banner.jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">ABOUT</h1>

                    </div>
                </div>
            </div>
            <section className='flex gap-5 flex-col md:flex-row m-14 p-7'>
                <div><div className="avatar flex justify-center items-center">
                    <div className="w-96 rounded-full">
                        <img src="/myphoto.jpg" />
                    </div>
                </div></div>
                <div className='flex justify-center items-center'><div>
                <p className='text-lg text-blue-600 font-bold text-justify p-5'>
                    As a MERN stack web developer, I was build website and web app with awesome functionalities by MongoDB, Express JS, React and Node JS. I was work with more than 100+ projects with implemented verities of functionalities by this stack. I spend more than a thousand of hour coding in this stack which helps me more professional and easy way to write codes now.</p>
                    <a className='underline p-5 font-semibold text-rose-500' href='https://github.com/Rifat-Shuvo'>Click to see my Github profile</a>
                    </div></div>
            </section>

            <section className='text-center px-9 mb-16'>
                <h1 className='text-5xl font-bold my-10 text-blue-700'>Overview</h1>
                <div className="stats shadow w-full">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Project Completed</div>
                        <div className="stat-value text-primary">120</div>
                        <div className="stat-desc">They Are Happy Customer.</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Total Project</div>
                        <div className="stat-value text-secondary">144</div>
                        <div className="stat-desc">10 project Remaining</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="/myphoto.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">90%</div>
                        <div className="stat-title">Progress</div>
                        <div className="stat-desc text-secondary">31% Progress from last year</div>
                    </div>

                </div>
            </section>

            <section className='text-center px-9 mb-16'>
                <h1 className='text-4xl font-bold my-10 text-blue-700'>Technology I Expert</h1>
                <p align="center">
                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=html,css,js,react,tailwind,express,nodejs,mongo,git,github,figma" />
                    </a>
                </p>
            </section>
            <section className='text-center px-9 mb-16'>
                <h1 className='text-4xl font-bold my-10 text-blue-700'>Courses & Education</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">2020-present</time>
                            <div className="text-lg font-black">Startting My University</div>
                           In 2020, I was admitted into Jagannath University. I'm Studying Microbiology. Currently I'm n 4th Semester.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">2023</time>
                            <div className="text-lg font-black">Programming Hero Course</div>
                            In Mid June of 2023, I was Admitted in programming hero Web course. And learn MERN stack Web development.
                        </div>
                        <hr />
                    </li>
                    {/* <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">2001</time>
                            <div className="text-lg font-black">iPod</div>
                            The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
                        </div>
                        <hr />
                    </li> */}
                    
                </ul>
            </section>
        </div>
    );
};

export default About;