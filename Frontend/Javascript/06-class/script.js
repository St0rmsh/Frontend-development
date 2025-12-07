let main = document.querySelector('main');

let section = document.querySelectorAll('.sec')

section.forEach(elem => {
    elem.addEventListener('mouseenter',()=>{
        console.log("hello");
        
    })
    
    
});


main.addEventListener('mousemove',(elem)=>{

    document.documentElement.style.setProperty('--x',elem.clientX +"px")
    document.documentElement.style.setProperty('--y',elem.clientY +"px")
    
})