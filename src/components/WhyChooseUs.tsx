"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import whyChooseUsContent from "@/data/why_choose_us";

function WhyChooseUs() {
    return (
        <div>
            <div>
                <h2 className="text-center bg-gray-900 py-2 text-base text-teal-600 
                    font-semibold tracking-wide uppercase">Why Choose Us?</h2>
                <StickyScroll content={whyChooseUsContent} />
            </div>
        </div>
    )
}

export default WhyChooseUs