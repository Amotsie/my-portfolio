import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
            <form action="https://getform.io/f/51186252-a771-4cc1-8b4c-aaca8e0f3a44" method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2' htmlFor="name">Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" id='name' name='name' required="true" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2' htmlFor="phone">Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" id='phone' name='phone' />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2' htmlFor="email">Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" id='email' name='email' required="true" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2' htmlFor="subject">Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" id='subject' name='subject' required="true" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2' htmlFor="message">Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' name="message" id="message" cols="30" rows="10" required="true"></textarea>
                </div>
                <button type="submit" className='bg-[#001b5e] mt-4 p-4 rounded-lg text-gray-100 hover:bg-[#23325a] ease-in'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact