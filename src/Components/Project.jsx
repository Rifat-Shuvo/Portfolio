import React from 'react';
import Partition from './Partition';
import project1 from '../../public/project1.png';
import brand from "../../public/brand.png";
import wedding from "../../public/wedding.png";
const Project = () => {
    return (
        <div>
            <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url("/Banner.jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">PROJECT</h1>

                    </div>
                </div>
            </div>

            <section className='text-center mb-16 mx-8'>
                <h1 className='text-5xl font-bold my-10 text-blue-700'>Some of my project Here</h1>
            <div>
                <Partition heading={'Gulshan Tower'} description={'✔✔✔Are you a building owner?? if the answer is yes, this website is just for you. This website is designed to maintain a apartment from remotely. Some of the feature is following:'} direction={'flex-col md:flex-row'} img={project1} point1={'👉 It is super easy and user friendly UI'} point2={'👉 There is no complexity about the source code'} point3={'👉 As the entire source code have super readability, So, all type of developer can understand easily.'} tech={'⚡ Tech: React JS, TailwindCSS, Firebase, Express JS, Node JS, MongoDb.'}  link={'https://practise-da4fb.web.app'} client={'https://github.com/Rifat-Shuvo/gulshan-tower'} server={'https://github.com/Rifat-Shuvo/gulshan-tower-server'}></Partition>

                <Partition heading={'Electronic Brand Shop'} description={'✔✔✔ It is the simple e-commerce sites. It is used to showcase in the electronic goods. It is categorized with the specific brands.'} direction={'flex-col md:flex-row-reverse'} img={brand} point1={'👉 This is the first ever fullstacjk site which is ineract the database.'} point2={'👉 This site have impressive UI which is easy to understand.'} point3={'👉 This site have no complexity, that why any developers can develop & understand thie codes'} tech={'⚡ Technology: HTML, CSS, JavaScript, React, Tailwind, Daisyui, Firebase, Express JS, Node JS, MongoDB.'} link={'https://brand-shop-12da9.web.app/'} client={'https://github.com/Rifat-Shuvo/brand-shop'} server={'https://github.com/Rifat-Shuvo/brand-shop-server'}></Partition>

                <Partition heading={'Wedding Planner'} description={'✔✔✔ It is an event management websites. Some of the Features of this project is Given Below:'} direction={'flex-col md:flex-row'} img={wedding} point1={'👉 This Website have super Easy to understand and use.'} point2={'👉 The Entire UI of this site is super impressive to visitors.'} point3={'👉 No Complexity in this UI, So, the user experienced better.'} tech={'⚡ Technology I used: HTML, CSS, JavaScript, React, Firebase, Tailwind CSS, Daisy ui.'} link={'https://first-firebase-9d0b6.web.app'} client={'https://github.com/Rifat-Shuvo/wedding-planner'}></Partition>
            </div>
            </section>
        </div>
    );
};

export default Project;