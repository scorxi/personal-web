'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import arrowUp from './../../assets/arrow-up.ico'
import arrowUpDiagonal from './../../assets/arrow-up-diagonal.ico'

export default function Project() {
    const [activeButton, setActiveButton] = useState('work') // work as defaults

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    return (
        <main>
            <div className="max-w-sm text-justify mb-12">
                <h1>Projects</h1>
                <p>I&apos;ve worked on both work and personal projects. These projects helps me on managing my skills and experties on front-end fields. And through this projects also I&apos;m able to see that my ability to solve problems stepping up bit by bit.</p>
            </div>

            <div className='flex flex-row justify-center gap-24 project-buttons'>
                <span className={activeButton === 'work' ? 'project-link-active' : 'project-link'} onClick={() => handleClick('work')}>Work</span>
                <span className={activeButton === 'personal' ? 'project-link-active' : 'project-link'} onClick={() => handleClick('personal')}>Personal</span>
            </div>

            {activeButton === 'work' && <WorkProjects />}
            {activeButton === 'personal' && <PersonalProjects />}
        </main>
    )
}

const WorkProjects = () => {
    const [expandButton, setExpandButton] = useState('collapsed')

    const handleClick = (stateName) => {
        setExpandButton(stateName)
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h3>PT. Bank Central Asia, Tbk.</h3>
                <h3>2023</h3>
            </div>
            <span>Confidential Internet Banking App</span>
            <p>An internet banking solution for wholesale or business customers of BCA. Fully running on web as web application similar to klikBCA. Handled by tens of separate teams and stakeholders.
                Using Angular as it Micro-frontend technologies and in-house library of components for components usage. {expandButton === 'collapsed' && <span className='expand-work-details cursor-pointer' onClick={() => handleClick('expanded')}> See more...</span>}</p>
            {expandButton === 'expanded' &&
                <div className='project-details'>
                    <div className='flex flex-row justify-between'>
                        <p>What I do :</p>
                        <p onClick={() => handleClick('collapsed')}><Image className='w-5 h-5 cursor-pointer' src={arrowUp} alt='arrow-up' /></p>
                    </div>
                    <ul>
                        <li>Focus on developing front-end side of features that conducted by Project Manager in each project cycle. I&apos;ve worked on 10-12 project cycles in total. </li>
                        <li>Present work result in daily and weekly stand-up.</li>
                        <li>Working closley with front-end and back-end teammates for integration, discussion, etc.</li>
                        <li>Conduct component testing using Karma as test runner.</li>
                        <li>Providing support and closely communicate with stakeholders to concurrently achieve project requirements.</li>
                    </ul>
                </div>
            }
            <span className='card-tech-stack'>Angular | Typescript | Git | Micro-frontend</span>
        </div>
    );
}

const PersonalProjects = () => {
    return (
        <div>
            <NovemberXi />
            <SrikandiFC />
            <PersonalNotes />
            <BookShelfApps />
        </div>
    );
}

const NovemberXi = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <span>novemberxi.dev</span>
                <div className='flex flex-row justify-between items-center'>
                    <Link href='https://my-personalnotes.netlify.app' target='_blank'>Visit Website</Link>
                    <Image href='' src={arrowUpDiagonal} alt='Visit Website' className='w-7 h-7 cursor-pointer' />
                </div>
            </div>
            <p>A personal web to keep track on my journey in tech. Will be regulary updated and enhanced. Blog pages coming soon!</p>
            <span className='card-tech-stack'>Next.js | Tailwind CSS | Javascript</span> <Link className='mx-2' href='https://github.com/scorxi/personal-web' target='_blank'>Source Code</Link>
        </div>
    )
}

const PersonalNotes = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <span>My Personal Notes</span>
                <div className='flex flex-row justify-between items-center'>
                    <Link href='https://my-personalnotes.netlify.app' target='_blank'>Visit Website</Link>
                    <Image href='' src={arrowUpDiagonal} alt='Visit Website' className='w-7 h-7 cursor-pointer' />
                </div>
            </div>
            <p>A simple web application that take notes, delete, or archive them. Equipped with search feature. Built using React Functional Components with application of modularization.</p>
            <span className='card-tech-stack'>React | Javascript</span> <Link className='mx-2' href='https://github.com/scorxi/my-personal-notes' target='_blank'>Source Code</Link>
        </div>
    )
}

const BookShelfApps = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <span>BookShelf App</span>
                <div className='flex flex-row justify-between items-center'>
                    <Link href='https://agungbookshelfapp.netlify.app' target='_blank'>Visit Website</Link>
                    <Image href='' src={arrowUpDiagonal} alt='Visit Website' className='w-7 h-7 cursor-pointer' />
                </div>
            </div>
            <p>Simple BookShelf App with the use of LocalStorage supported by web browser so that the app doesn’t need an external database. The client website is able to add book into two folders. Equipped with search feature.</p>
            <span className='card-tech-stack'>HTML | CSS | Javascript | LocalStorage</span> <Link className='mx-2' href='https://github.com/scorxi/bookshelfapps_1' target='_blank'>Source Code</Link>
        </div>
    )
}

const SrikandiFC = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <span>Srikandi FC</span>
                <div className='flex flex-row justify-between items-center'>
                    <Link href='https://srikandi-fc.vercel.app' target='_blank'>Visit Website</Link>
                    <Image href='' src={arrowUpDiagonal} alt='Visit Website' className='w-7 h-7 cursor-pointer' />
                </div>
            </div>
            <p>A fullstack web application that runs the copy center business of Srikandi FC. There are two client side for this project, Admin and Customer/Visitor. Made for thesis project using Angular for front-end and Express Js for back-end. Database used in this project is MySQL.
                Database and Express server are deployed using Google Cloud Platform service. Client are deployed using Vercel. As it stands, the deployed server on Google might be suspended because of subscription pause.</p>
            <span className='card-tech-stack'>Angular | Typescript | Material UI | Express Js | MySQL</span> <Link className='mx-2' href='https://gitlab.com/final_project5363639' target='_blank'>Source Code</Link>
        </div>
    )
}