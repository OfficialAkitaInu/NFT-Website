import React from 'react'
import HeroSection from '../components/Sections/HeroSection';
import AboutSection from '../components/Sections/AboutSection';
import ScheduleSection from '../components/Sections/ScheduleSection';
import RoadmapSection from '../components/Sections/RoadmapSection';
import TeamSection from '../components/Sections/TeamSection';

const Home = () => {

    return (
        <>
            <HeroSection />
            <AboutSection />
            <ScheduleSection />
            <TeamSection />
            <RoadmapSection />
        </>
    )
}

export default Home
