import { ref,onMounted,onBeforeMount,onActivated, } from "vue";

export const useScrollSmoother= ()=>{

    let smoother : any ;



/**============  use onmunted  */

onMounted(()=>{
    //------------ import gsap requred plugins -------
    const {$gsap,$ScrollSmoother}=useNuxtApp()


    //------- create scrollsmoother --------
    smoother= $ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth:1,
        effects:true,
        smoothTouch:0.5,
    })



})
/**===========  end on mounted ========== */


/**============  Return all variable here ========= */

return{
    smoother
}


// export end here    
}