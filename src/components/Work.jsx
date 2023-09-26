import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        Company: "Amazon",
        title: "Lead Software Architect",
        duration: "3 years",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium minima doloribus ad, nisi quas sit facilis quia numquam suscipit eveniet aspernatur accusamus modi beatae libero illum dolore? In corporis illum sequi necessitatibus voluptatem repudiandae consectetur illo saepe officiis eius."
    },
    {
        year: 2017,
        company: "Google",
        title: "Senior Dev Engineer",
        duration: "3 years",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium minima doloribus ad, nisi quas sit facilis quia numquam suscipit eveniet aspernatur accusamus modi beatae libero illum dolore? In corporis illum sequi necessitatibus voluptatem repudiandae consectetur illo saepe officiis eius."
    },
    {
        year: 2015,
        company: "Facebook",
        title: "UI/UX Desinger",
        duration: "2 years",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium minima doloribus ad, nisi quas sit facilis quia numquam suscipit eveniet aspernatur accusamus modi beatae libero illum dolore? In corporis illum sequi necessitatibus voluptatem repudiandae consectetur illo saepe officiis eius."
    },
    {
        year: 2012,
        company: "Uber",
        title: "Backend Developer",
        duration: '3 years',
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium minima doloribus ad, nisi quas sit facilis quia numquam suscipit eveniet aspernatur accusamus modi beatae libero illum dolore? In corporis illum sequi necessitatibus voluptatem repudiandae consectetur illo saepe officiis eius."
    }
]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-4'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} item={item} />
            ))}
        </div>
    )
}

export default Work