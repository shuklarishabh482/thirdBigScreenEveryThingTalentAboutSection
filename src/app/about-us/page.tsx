// import { Everything } from "@/components/about-us/EveryThing";
import { Footer } from "@/components/about-us/Footer";
import {HeroSection} from "@/components/about-us/HeroSection" ;
import HowWeThrive from "@/components/about-us/HowWeThrive";
import {MissionSection} from "@/components/about-us/MissionSection";
// import { JoinOurMission } from "@/components/about-us/JoinOurMission";
import { Navbar } from "@/components/about-us/Navigation";
// import { OurValues } from "@/components/about-us/OurValues";
import PhilosophySection from "@/components/about-us/PhilosophySection";
import StackingCards from "@/components/about-us/SlidingCard";
// import SlidingCards from "@/components/about-us/SlidingCard";
import StoryBehind from "@/components/about-us/StoryBehind";
import { VisionSection } from "@/components/about-us/VisionSection";

function Page (){
    return (
    <> 
    <Navbar/>
    <HeroSection/> 
    <VisionSection/> 
    <StoryBehind/>
    <PhilosophySection/> 
    <HowWeThrive/>
    {/* <OurValues/> */}
   <StackingCards/>
    {/* <SlidingCards/> */}
    
    <MissionSection/>
    
   <Footer/> 
    </> 
    )
}

export default Page ;

