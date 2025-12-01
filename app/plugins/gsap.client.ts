import { defineNuxtPlugin } from "#app";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";
import SplitText from "gsap/SplitText";

export default defineNuxtPlugin(()=>{
    gsap.registerPlugin(ScrollTrigger,TextPlugin,SplitText)

    return {
        provide:{
            gsap,
            SplitText
        }
    }
})