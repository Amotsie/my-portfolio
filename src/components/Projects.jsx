import React from 'react';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import stp from '../assets/setup.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam distinctio, consequatur voluptatem laborum maxime atque repudiandae adipisci accusamus consequuntur earum reprehenderit aliquam nostrum dignissimos blanditiis vel illo, deserunt officiis!</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={img1} title='Crypto App' />
                <ProjectItem img={img2} title='Property App' />
                <ProjectItem img={img3} title='Netflix App' />
                <ProjectItem img={stp} title='Twitch App' />
            </div>
        </div>
    )
}

export default Projects