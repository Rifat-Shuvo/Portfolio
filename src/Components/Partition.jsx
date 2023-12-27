import React from 'react';
import { Link } from 'react-router-dom';

const Partition = ({ heading, description, direction, img, point1, point2, point3, tech, link, client, server}) => {
    return (
        <div className={`flex gap-5 ${direction} p-5 mb-10`}>
            <div className='my-auto font-bold text-justify md:w-1/2'>
                <h1 className='text-blue-600 text-4xl font-semibold mb-5'>{heading}</h1>
                <p className=''>{description}</p>
                <ul className='my-3'>
                    <li>{point1}</li>
                    <li>{point2}</li>
                    <li>{point3}</li>
                </ul>
                <p>{tech}</p>
                <div className='mt-5'>
                <Link className='mr-3' to={link}><button className="btn btn-primary">live site</button></Link>
                <Link className='mr-3' to={client}><button className="btn btn-primary">Github Client</button></Link>
                <Link className='mr-3' to={server}><button className="btn btn-primary">Github server</button></Link>
                </div>
            </div>
            <div className='md:w-1/2'>
                <img className='rounded-2xl' src={img} alt="" />
            </div>
        </div>
    );
};

export default Partition;