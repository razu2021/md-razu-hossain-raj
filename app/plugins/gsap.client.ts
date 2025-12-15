import { defineNuxtPlugin } from "#app";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {TextPlugin} from "gsap/TextPlugin";
import SplitText from "gsap/SplitText";


export default defineNuxtPlugin(()=>{
    gsap.registerPlugin(ScrollTrigger,TextPlugin,SplitText,ScrollSmoother)

    return {
        provide:{
            gsap,
            SplitText,
            ScrollSmoother,
            ScrollTrigger
        }
    }
})