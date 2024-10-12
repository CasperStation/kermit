
window.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        once: true
    });
})

// menu 
const menu_btn = document.querySelector('.menu_btn');
const links = document.querySelector('.links');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    links.classList.toggle('active')
})
 
 // copy address
    const copy_address = document.querySelectorAll(".copy_address");
    const copybtn = document.querySelector(".contractCopy");
    
     copybtn.addEventListener("click", function() { 
        let textSpan = copybtn.querySelector('span');
        let intervalId;
            let addressText = `00000000000000000000000000000000000000000DEAD`
            textSpan.innerHTML = 'COPY';

            if (intervalId) {  
                clearInterval(intervalId);
            }

            intervalId = setInterval(() => {
                textSpan.innerHTML = '00000000000000000000000000000000000000000DEAD'; 
                // textSpan.innerHTML = ''; 
                clearInterval(intervalId);  
            }, 1000);

            navigator.clipboard.writeText(addressText);
        }); 
        
      copy_address.forEach(copy => {
        copy.addEventListener("click", function() {   
            let message = copy.querySelector('.message');
            let intervalId;
                let addressText = `00000000000000000000000000000000000000000DEAD`
                message.classList.add('active')
                if (intervalId) {  
                    clearInterval(intervalId);
                }
    
                intervalId = setInterval(() => {
                    message.classList.remove('active')
                    clearInterval(intervalId);  
                }, 1000);
    
                navigator.clipboard.writeText(addressText);
            }); 
      })

