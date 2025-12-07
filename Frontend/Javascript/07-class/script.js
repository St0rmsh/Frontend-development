let H2 = document.querySelector('p')
text = H2.textContent




let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let itr= 0 
function matrix(){

    
    const str = text.split("").map((elem,id)=>{

    if (id < itr) {
        return elem
        
    }
    return character[Math.floor(Math.random()*52)]
    
 }).join("")
     itr+=0.25

H2.textContent = str


}


 

setInterval(matrix,100)

// let char = character.split("")
// char[Math.floor(Math.random()*52)]

// console.log(char[Math.floor(Math.random()*52)]);

