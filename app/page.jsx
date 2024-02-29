'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import instagramIcon from './../assets/instagram.ico'
import linkedinIcon from './../assets/linkedin.ico'
import githubIcon from './../assets/github.ico'
import emailIcon from './../assets/email.ico'
import arrowUp from './../assets/arrow-up.ico'

export default function Home() {
  return (
    <main>
      <section className='section-about'>
        <div className='max-w-sm'>
          <h1>Hi there! I&apos;m Agung Darmawan</h1>
          <p className='text-justify'>A software engineering graduate with 1 year experience as Front End Developer using Angular.
            Have a lot of passion for software development mainly web application using Angular, Next.js, and Express Js</p>
        </div>

        <div className="flex-column min-w-44">
          <div className='mb-6 flex justify-end button-resume'>
            <Link href="https://drive.google.com/uc?export=download&id=1wc9_ow7qL88CI6vVfTvmhXDb89ls1WPK" target='_blank'>
              <button className="btn-primary">View Resume</button>
            </Link>
          </div>
          <div className='flex justify-end gap-6 social-links'>
            <Link href='https://www.instagram.com/agungdarmawan_11/' target='_blank'><Image className='w-6 h-6' src={instagramIcon} alt='instagram' /></Link>
            <Link href='https://www.linkedin.com/in/agungdarmawan11/' target='_blank'><Image className='w-6 h-6' src={linkedinIcon} alt='linkedin' /></Link>
            <Link href='https://github.com/scorxi' target='_blank'><Image className='w-6 h-6' src={githubIcon} alt='github' /></Link>
            <Link href='mailto:agungdarmawan1187@gmail.com'><Image className='w-7 h-6' src={emailIcon} alt='email' /></Link>
          </div>
        </div>
      </section>

      <h2>Experiences</h2>

      <ExperienceBCA />
      <ExperienceTA_2 />
      <ExperienceTA_1 />
    </main>
  )
}

const ExperienceBCA = () => {
  const [expandButton, setExpandButton] = useState('collapsed');

  const handleClick = (stateName) => {
    setExpandButton(stateName);
  }

  return (
    <div className="card">
      <div className='card-header'>
        <h3>PT. Bank Central Asia, Tbk.</h3>
        <h3>Jan 2023 - Dec 2023</h3>
      </div>
      <span>Application Developer Intern (Front End)</span>
      <p>Working hands on together with 3 to 4 team members developing features throughout each fast paced project cycles that takes about 3 to 10 working days. I work closely with business, IT, and QA team to concurrently achieve and completes the feature requirements. {expandButton === 'collapsed' && <span onClick={() => handleClick('expanded')} className='expand-work-details cursor-pointer'>See more...</span>}</p>
      {expandButton === 'expanded' &&
        <div className='work-details'>
          <div className='flex flex-row justify-between'>
            <p>Responsible for :</p>
            <p onClick={() => handleClick('collapsed')}><Image className='w-5 h-5 cursor-pointer' src={arrowUp} alt='arrow-up' /></p>
          </div>
          <ul>
            <li>Developing features and handle components testing using Angular as part of micro-frontend of a large internet banking app handled by cluster of groups from number of stakeholders for business customers.</li>
            <li>Closely communicate to back-end developer as teammates for integration purposes.</li>
            <li>Providing support and managing communication with Quality Assurance team in relation for troubleshoot or fix features problem.</li>
          </ul>
          <p>Work Achievements :</p>
          <ul>
            <li>Manage to increase unit/component test coverage from 40% to 88% to ensure the feature are eligible for testing in UAT environment.</li>
            <li>Manage to migrate existing HTML, CSS -Bootstrap design to in-house library of components on one of the transfer feature.</li>
            <li>Contributing and being part of the prime team that handled the main feature of the large internet banking app.</li>
          </ul>
        </div>
      }
      <span className='card-tech-stack'>Angular | Typescript | Git | Micro-frontend</span>
    </div>
  )
}

const ExperienceTA_2 = () => {
  const [expandButton, setExpandButton] = useState('collapsed');

  const handleClick = (stateName) => {
    setExpandButton(stateName);
  }

  return (
    <div className="card">
      <div className='card-header'>
        <h3>Tarumanagara University</h3>
        <h3>Aug 2022 - Dec 2022</h3>
      </div>
      <span>Teaching Assistant</span>
      <p>TA for Analysis and Design of Information System. In this role, I particularly developing desktop application using Visual Studio with .NET Framework and Visual Basic as programming language. I also responsible for managing classes and arranging assignments in MS Teams for 100+ students in total.
        Becoming a Teaching Assistant, really driven me to maintain good communication with students in a way that students will enjoy learning and completing their projects. {expandButton === 'collapsed' && <span onClick={() => handleClick('expanded')} className='expand-work-details cursor-pointer'> See more...</span>}
      </p>
      {expandButton === 'expanded' &&
        <div className='work-details'>
          <div className='flex flex-row justify-between'>
            <p>Responsible for :</p>
            <p onClick={() => handleClick('collapsed')}><Image className='w-5 h-5 cursor-pointer' src={arrowUp} alt='arrow-up' /></p>
          </div>
          <ul>
            <li>Guide and teach students how to develop .Net project using Visual Studio and Visual Basic.</li>
            <li>Manage couple of classes and arrange assignments for more than 100 students.</li>
            <li>Evaluate mid term and final projects conducted by students.</li>
          </ul>
        </div>
      }
      <span className='card-tech-stack'>.Net | Visual Basic | Visual Studio</span>
    </div>
  )
}

const ExperienceTA_1 = () => {
  const [expandButton, setExpandButton] = useState('collapsed');

  const handleClick = (stateName) => {
    setExpandButton(stateName);
  }

  return (
    <div className="card">
      <div className='card-header'>
        <div><h3>Tarumanagara University</h3></div>
        <div><h3>Feb 2022 - Jun 2022</h3></div>
      </div>
      <span>Teaching Assistant</span>
      <p>TA for Database Design and Management. In this role, I specifically assists in weekly classes to introduce and teach students about high-level programming language using PL/SQL.
        As my first time becoming a Teaching Assistant, I learnt to not just teach students the subjects but also guide them deeper into the concept of PL/SQL so that they can solve Pl/SQL problems not only with memorizing the syntax.
        {expandButton === 'collapsed' && <span onClick={() => handleClick('expanded')} className='expand-work-details cursor-pointer'> See more...</span>}
      </p>
      {expandButton === 'expanded' &&
        <div className='work-details'>
          <div className='flex flex-row justify-between'>
            <p>Responsible for :</p>
            <p onClick={() => handleClick('collapsed')}><Image className='w-5 h-5 cursor-pointer' src={arrowUp} alt='arrow-up' /></p>
          </div>
          <ul>
            <li>Guide and teach students the programming fundamental using PL/SQL on Oracle Apex.</li>
            <li>Manage a class and arrange assignments for more than 50 students.</li>
            <li>Evaluate mid term and final PL/SQL tests done by students.</li>
          </ul>
        </div>
      }
      <span className='card-tech-stack'>PL/SQL | Database Design</span>
    </div>
  )
}