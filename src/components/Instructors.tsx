'use client';
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import instructors from "../data/instructors";

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">

            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Introducing the Maestros Behind the Keys</p>
            <div className="flex flex-row item-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
        
        </div>
  )
}

export default Instructors