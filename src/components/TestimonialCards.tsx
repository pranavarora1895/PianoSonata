'use client';

import React from 'react'
import testimonials from '@/data/testimonials';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

function PianoClassTestimonials() {
    return (
        <div className='h-[40rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative 
        flex flex-col items-center justify-center overflow-hidden'>
            <h2 className='text-3xl font-bold text-center mb-8 z-10'>Harmonious Hymns: Stories from Our Piano Players</h2>
            <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-6xl'>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>

        </div>
    )
}

export default PianoClassTestimonials

