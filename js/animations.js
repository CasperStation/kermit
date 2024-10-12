document.addEventListener("DOMContentLoaded", () => {
 

    // how to buy
    gsap.fromTo('.howItem1', 
        { x: '-50vw' , y: '-20vw'},  
        { 
            x: "0vw",  
            y: "0vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: ".how-buy__wrap",
                start: "-10% 100%", 
                end: "100% 100%",  
                scrub: 2,  
            }
        }
    );
 
    gsap.fromTo('.howItem2', 
        { x: '50vw' , y: '-20vw'},  
        { 
            x: "0vw",  
            y: "0vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: ".how-buy__wrap",
                start: "-10% 100%", 
                end: "100% 100%",  
                scrub: 2,  
            }
        }
    );

    gsap.fromTo('.howItem3', 
        { x: '-50vw' , y: '20vw'},  
        { 
            x: "0vw",  
            y: "0vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: ".how-buy__wrap",
                start: "-10% 100%", 
                end: "100% 100%",  
                scrub: 2,  
            }
        }
    );

    gsap.fromTo('.howItem4', 
        { x: '50vw' , y: '20vw'},  
        { 
            x: "0vw",  
            y: "0vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: ".how-buy__wrap",
                start: "-10% 100%", 
                end: "100% 100%",  
                scrub: 2,  
            }
        }
    );
     
});