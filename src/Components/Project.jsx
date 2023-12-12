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
                <Partition heading={'Gulshan Tower'} description={'Are you a building owner?? if the answer is yes, this website is just for you. This website is designed to maintain a apartment from remotely.Some of the feature is following:👉 It is super easy and user friendly UI,👉 There is no complexity about the source code,👉 As the entire source code have super readability, So, all type of developer can understand easily.⚡ Tech: React JS, TailwindCSS, Firebase, Express JS, Node JS, MongoDb. ✔Github repository client: https://github.com/Rifat-Shuvo/gulshan-tower. ✔ Github repository server: https://github.com/Rifat-Shuvo/gulshan-tower-server'} direction={'flex-col md:flex-row'} img={project1}></Partition>

                <Partition heading={'Electronic Brand Shop'} description={'👉 This is the first ever fullstacjk site which is ineract the database.👉 This site have impressive UI which is easy to understand.👉 This site have no complexity, that why any developers can develop & understand thie codes⚡ Technology: HTML, CSS, JavaScript, React, Tailwind, Daisyui, Firebase, Express JS, Node JS, MongoDB ✔ Github repository client: https://github.com/Rifat-Shuvo/brand-shop ✔ Github repository server : https://github.com/Rifat-Shuvo/brand-shop-server'} direction={'flex-col md:flex-row-reverse'} img={brand}></Partition>
                <Partition heading={'Wedding Planner'} description={'Some of the Features of this project is Given Below:👉 This Website have super Easy to understand and use.👉 The Entire UI of this site is super impressive to visitors.👉 No Complexity in this UI, So, the user experienced better. ⚡ Technology I used: HTML, CSS, JavaScript, React, Firebase, Tailwind CSS, Daisy ui. ✔ Github repository: https://github.com/Rifat-Shuvo/wedding-planner'} direction={'flex-col md:flex-row'} img={wedding}></Partition>
            </div>
            </section>
        </div>
    );
};

export default Project;