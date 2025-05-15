
import { Footer } from "@/components/about-us/Footer";
import {HeroSection} from "@/components/about-us/HeroSection" ;
import HowWeThrive from "@/components/about-us/HowWeThrive";
import {MissionSection} from "@/components/about-us/MissionSection";
import { Navbar } from "@/components/about-us/Navbar";
import PhilosophySection from "@/components/about-us/PhilosophySection";
import SlidingCards from "@/components/about-us/SlidingCard";


import StoryBehind from "@/components/about-us/StoryBehind";
import { VisionSection } from "@/components/about-us/VisionSection";
function Page (){
    return (
    <> 
    <Navbar />
    <HeroSection/> 
    <VisionSection/> 
    <StoryBehind/>
    <PhilosophySection/> 
    <HowWeThrive/>
   <SlidingCards/>
    <MissionSection/>
    <Footer/> 
    </> 
    )
}

export default Page ;

