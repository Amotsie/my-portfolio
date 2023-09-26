import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import myImage from '../assets/main1.JPG';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover' src={myImage} alt="A photo of Motsie wearing a suit." />
            {/* overlay */}
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Andreas Motsie</h1>
                    <h2 className='sm:text-3xl text-2xl'>
                        <TypeAnimation
                            sequence={[
                                'I am a Developer',
                                1000,
                                'I am an Engineer',
                                1000,
                                'I am a Teacher',
                                1000,
                                'I am a Tech Enthusiast',
                                1000
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ fontSize: '1em', paddingLeft: '5px', color: 'red' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main