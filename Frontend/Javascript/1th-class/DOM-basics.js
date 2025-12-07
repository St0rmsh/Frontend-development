// // -----------------> 1.  The DOM (Document Object Model) <----------

// //  // Dom tree structure : DOM have tree like like structure with elements given below

// //    // node

// //    //  element

// //    //  text

// //    //  commtents

// //    // autofocus, draggable

// //  // Select elements:

// //      // getElementById :

// //      let byId = document.getElementById('byId')

// //      byId.textContent = "Hello Sujit kaisa Ho bhai" // for changing text only

// //      byId.innerHTML = "Hello Brother <sup>Kismat</sup>" // Using innertHtml we can change text as well as we can add Html tags just like this

// //      // getElementByClassName

// //          let byClasss = document.getElementsByClassName('byClass')

// //          // Since it is in Html collection so we can use forEach or [0] to select first element in the collection . we can Use     console.dir(byClasss); to get HTMLCollection and by opening we can get elements list and it is just ;ike array we can use foorEach loop or [0] or [1] to pick elemets . But it is Not Array it is just array like

// //          //Example given below

// //         byClasss[0].textContent= "Hello meow" // for changing text only

// //      byClasss[0].innerHTML = "Hello Brother <sup>Kismat</sup>" // Using innertHtml we can change text as well as we can add Html tags just like this

// //      // querySelector

// //      //using querySelector we can select tags using their name like h1,li or p tags but for class we can use .ExampleName and for Id elements we can use #ExampleElements

// //      // it is for selecting single element

// //      let querySelector = document.querySelector("h1")
// //               console.dir(querySelector);

// //               querySelector.textContent = "querySelector"
// //               querySelector.draggable = true

// //      // querySelectorAll

// //      // for all elements that have the same name or tags

// //      // it will also bring in NodeList form so we can use select using [Element number] or all elements using forEach Loop

// //      let querySelectorAll = document.querySelectorAll('h1')
// //                    console.dir(querySelectorAll);

// //      querySelectorAll[4].textContent= 'True True'

// //      // or

// //      querySelectorAll.forEach((Value)=>{
// //             Value.textContent = "False inner "

// //      })

//   // Text/Content access:

//       // innerText : Changes the text content in h1,h2,h3,h4,h5,h6 and p tags

//       // textContent : Changes the text content in h1,h2,h3,h4,h5,h6 and p tags

//       // innerHTML : Changes the text content in h1,h2,h3,h4,h5,h6 and p tags and can also used to add HTML tags into it

//   // Attribute manipulation:

//        // getAttribute is used to get attribute of an Html tag like src,class,id,char,href etc;

//      //   let a = document.querySelector('#attribute >a')
//      //   console.log(a.getAttribute('href'))

//        //setAttribute is used to set the attribute of an element or change the attribute

//        // in setattribute first we have to select attribute and second will be the  value we have to give

//      //   a.setAttribute('href',"https://facebook.com")

//        //removeAttribute is used to remove attribute of an Html tag

//      //   a.removeAttribute('href') // this will remove given attribute from the Html tag

//   // Dynamic DOM manipulation:

//               let div3 = document.querySelector('#createEle')

//        // createElement is used to create a new element in Html
//        let h2inDic3 = document.createElement('h2')
//        h2inDic3.innerHTML = "<i>This is Element created with CreateElement</i>"

//        // appendChild is used to append / add or insert Single element createdElement to the end of the node

//        div3.appendChild(h2inDic3)

//        // append is used to append multiple node and strings to in the end of the node

//        // removeChild is used to remove child from  the parent node . parentnode.removeChild(childnode)

//       //  div3.removeChild(h2inDic3)

//        // prepend  is used to append child to the Start of the Node
//        let prepend = document.createElement('p')
//        prepend.textContent = "Prepend Child"

//        div3.prepend(prepend)

//   // Style updates via.

//        // style and classList(add,remove,toggle)
// let style = document.querySelector('#styleElement')
// let h3tag = document.createElement("h3")
// h3tag.innerHTML = "<i>Hello JS </i>"

// style.appendChild(h3tag)

// h3tag.addEventListener('click',()=>{

//   h3tag.classList.toggle('hello')
// })

// console.dir(h3tag);

// document.getElementsByClassName(h3tag) // it returns HTML Collection

let btns = document.querySelectorAll("#buttons > .buynow");
console.log(btns);

let Heading = document.querySelector("#page > #Heading");
Heading.textContent = "Hello Guys Now it is Welcome";

console.log(Heading);

let Ul_Elements = document.querySelectorAll("#lielem >#ul-Elments");
Ul_Elements.forEach((value) => {
  console.log(value.textContent);
});
let newLi = document.createElement("li");
newLi.textContent = "New li node";
console.log(newLi);

let ul = document.querySelector("#lielem >#ul-Elments");
console.log(ul);

ul.appendChild(newLi);

let lii = document.querySelector("#lielem >#ul-Elments >li");
console.log(lii);

ul.removeChild(lii);

console.log(ul);

let para = document.querySelector("#lielem > p");

para.innerHTML = "* <b>Updated</b> by JavaScript *";

let img = document.querySelector("#lielem> img");
img.setAttribute(
  "src",
  "https://images.pexels.com/photos/16642613/pexels-photo-16642613.jpeg"
);

console.log(img.getAttribute("src"));

let href = document.querySelector("#lielem > a");
href.setAttribute("href", "https://www.facebook.com");

let div33 = document.querySelector("#lielem");
div33.setAttribute("title", "HelloTitle");
console.dir(div33);

// Remove an attribute
div33.removeAttribute("title", "HelloTitle");

// Create a new image element with a placeholder source and add it at the top of a div

let imgtag = document.createElement("img");
imgtag.setAttribute(
  "src",
  "https://images.pexels.com/photos/33752165/pexels-photo-33752165.jpeg"
);

let to0p = document.querySelector("#lielem");
to0p.prepend(imgtag);

// Adding a highlight class to every element in a li

let high = document.querySelectorAll("#lielem > #ul-Elments li:nth-child(2n)");
high.forEach((value) => {
  value.classList.add("highlight");
});

let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", () => {
  buttons.classList.toggle("active");
});

para.style.fontSize = "40px";
console.log(para);

// ==============================================================> EVENTS And EVENTs HANDLER <===================================================================================

// Event binding   :

// addEventListener :
let h2 = document.querySelector("#event > h2");
h2.addEventListener("click", () => {
  h2.textContent = "Magicc Right....  click event";
  h2.style.color = "orange";
});

// or

function h2Event() {
  h2.style.color = "yellow";
  h2.style.backgroundColor = "green";
  h2.innerHTML = "<i>Hello this is magic right Boiii dblclick  event</i>";
}

h2.addEventListener("dblclick", h2Event);

//removeEventListener:

h2.removeEventListener("dblclick", h2Event);

// Common events :

// click :
h2.addEventListener("click", () => {
  h2.textContent = "Magicc Right....  click event";
  h2.style.color = "orange";
});

// input :
let inp = document.querySelector("#event > input");
inp.addEventListener("input", (e) => {
  if (e.data !== null || e.data === "") {
    console.log(e.data);
  }
});

// change :

let selected = document.querySelector("#change > select");
let htag = document.querySelector("#change > h3");

selected.addEventListener("change", () => {
  htag.textContent = `${selected.value} Device Selected`;
});

// 2nd 

(function(){

  let fileInput = document.querySelector('#inpfile')
  let Input = document.querySelector('#inp > input')
  
  fileInput.addEventListener('click',()=>{
    Input.click()
  })
  
  Input.addEventListener('change',(details)=>{
    let dets = details.target.files[0]
    if (dets) {
      fileInput.textContent = dets.name
      
    }
    
  })
  
  

})()



// Keydown :

  
let tagh3 = document.querySelector("main > h1");

window.addEventListener("keydown", (value) => {
  if (value.key === " ") {
    tagh3.textContent = "Space";
  } else {
    tagh3.textContent = `${value.key}`;
  }
})



// submit : 

let fom = document.querySelector('Form')
let input = document.querySelectorAll('Form > input')

let data = document.querySelector('#Form')
 

let cards = document.querySelector('.cards')

 

fom.addEventListener('submit',(event)=>{
  event.preventDefault()
   
    let diiv = document.createElement('div')
    diiv.classList.add('innerDiv');
    let NameValue = event.target[0].value
    let AgeValue = event.target[1].value
    let EmailValue = event.target[2].value
    let ImageValue = event.target[3].value


   

    let imag = document.createElement('img')

    let name = document.createElement('h3')

    let age = document.createElement('h4')

    let Email = document.createElement('h3')
    


  name.textContent = `Name : ${NameValue}`;
  age.textContent = `Age : ${AgeValue} `;
  Email.textContent = `Email : ${EmailValue}`;
  imag.setAttribute('src' , ImageValue)

  diiv.appendChild(imag)
  diiv.appendChild(name)
  diiv.appendChild(age)
  diiv.appendChild(Email)
   
  cards.appendChild(diiv)
  data.appendChild(cards)


  fom.reset()
    
    
  })  







// mouseover :

let Over = document.querySelector('.over')

Over.addEventListener('mouseover',()=>{
  Over.style.backgroundColor = "yellow"
})
Over.addEventListener('mouseout',()=>{
  Over.style.backgroundColor = "crimson"
})

// keyup :

// Event object :

// target : Gives the content of the value in Dom

//type : Describes which type of Event is used

// preventDefault : disables refresh/relod when form is submitted 



// Event bubbling :

// Event capturing :

// Event delegation :


                     // Extra
                     
                     
         let btn = document.querySelector('#tasks button')
           
         let Scree = document.querySelector('#tasks')
        
         let arr = ["Now ","What","To","Do","IN","JavaScript","I don't", "Know"]

         btn.addEventListener('click',()=>{
          let h1 = document.createElement('h1')
          

        




          let rando = Math.floor(Math.random()*arr.length)
          let x = Math.floor(Math.random()*100)
          let y = Math.floor(Math.random()*100)

          let c1 = Math.floor(Math.random()*256)
          let c2 = Math.floor(Math.random()*256)
          let c3 = Math.floor(Math.random()*256)
          let scale = Math.floor(Math.random()*3)

          let rotate = Math.floor(Math.random()*360)


         

          h1.textContent = arr[rando] 
          
          
           h1.style.position = "absolute";
           h1.style.top = x+"%"
           h1.style.left = y+"%"
           h1.style.rotate = rotate+"deg"
           h1.style.scale = scale
           h1.style.display = "wrap" 
         
           h1.style.color = `rgb(${c1},${c2},${c3})`

          Scree.appendChild(h1)    
          
          console.log(h1);
          
          
         })
         



          let div = document.querySelector('#outer .inner')
          let butt = document.querySelector('#outer button')

          let h1 = document.querySelector('.bottom h1')
          

          let a = 0
          butt.addEventListener('click',()=>{

           let intver =  setInterval(()=>{
              a++
              div.style.width = a+"%"
              h1.textContent = a+"%"

            },200)

          setTimeout(()=>{
            clearInterval(intver)
            butt.textContent = "Downloaded"

          },20000)


          })




          let click = document.querySelector('.image')

          click.addEventListener('dblclick',()=>{
            console.log('hello');
            
          })
          

          