import React from 'react';

const data = [
    {
        image: "./E-commerce.png",
        name: "E-Commerce Website",

    },
    {
        image: "./E-commerce.png",
        name: "Donation Web sites",
    },
    {
        image: "./E-commerce.png",
        name: "xyz"
    }
];

function Projectdata({ image, name }) {
    return (
        <div className='hover:shadow-2xl shadow-black px-2 py-2' >
            <img src={image} alt={name} />
            <p className='text-[#999999---
            ] text-center mt-4'>{name}</p>
        </div>
    );
}

export default function Projects() {
    return (
        <div>
            <h1 className="text-center text-[24px] md:text-[50px] font-bold mt-8">Projects</h1>
            <p className="text-center text-[16px] md:text-[20px] text-[#999999]">Something Built With Passion</p>
            <div className='grid grid-cols-1  mt-8 items-center gap-5 px-11 md:grid-cols-3 rounded-xl bg-gray-300/10 hover:shadow-2xl shadow-black '> 
                {data.map((project, index) => (
                    <Projectdata key={index} image={project.image} name={project.name} />
                ))}
            </div>
        </div>
    );
}
