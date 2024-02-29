'use client'

import Image from "next/image"

import profilePhoto from "./../../assets/profile-photo.png"

export default function About() {
    return (
        <main>
            <h1>About Me</h1>
            <div className="flex justify-center items-center px-2 py-2 mb-12">
                <div className="w-52 h-52 overflow-hidden rounded-full">
                    <Image src={profilePhoto} alt='profile-photo' placeholder="blur" className="profile-photo w-full h-full object-cover" />
                </div>
            </div>
            <div className="about-description text-justify">
                <p><strong>Hi there! I am Agung Darmawan.</strong> A recent software engineering graduate that have a lot passion in software development/engineering.
                    I&apos;m planning to continue on learning and developing my skills in tech fields. Throughout my college, I have been exploring software engineering fields
                    and land my focus in web development either for it to be the back-end or the front-end.</p>

                <p>Also throughout my college, I realised that a way of learning tech skills can be achieved by sharing our knowledge about tech to others. Therefore, I was motivated
                    to be able to share my knowledge I got from my early fundamental classes back in college. To make it happened, I applied for Teaching Assistant position and I was glad
                    that I&apos;m eligible to fill the position for a year handling 2 different subjects, 3 classes, and 150+ students in total. Experienced as Teaching Assistant, thought me how
                    to be consistent on what we have been practicing, so that the knowledge become entangled to us. Apart from that, I have learnt how to effectively communicate and convey our
                    thoughts so that others fully understand what we mean, thus fostering a better environment for learning, teaching, and discussion in general.
                </p>

                <p>At the start of 2023, I landed my first internship as an Application Developer Intern at PT. Bank Central Asia, Tbk. I joined in ITBCA&apos;s Modernization team that
                    initiate and handled a large internet banking solution for wholesale customers similar to klikBCA. As an intern, I addressed my learning abilities
                    to the best, effective way possible and I was then trusted to handle the feature development directly together with 3-4 IT teammates. Becoming a software developer
                    that contributed in high-scale project thought me a bunch of valuable skills that demanded by industry, the important ones beside technial skills is the capability
                    to express our thoughts and communicate it between stakeholders in order to achieve successful outcomes.
                </p>
            </div>
        </main>
    )
}