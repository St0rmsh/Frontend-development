(function increment(){
   
    let arr = [
        {
            team:"MI",
            primary:"blue",
            secondry:"gold",
            captain:"Hardik Pandaya",
            fullName:"Mumbai Indians"
        },
        {
            team:"RCB",
            primary:"red",
            secondry:"black",
            captain:"Rajat Patidar",
            fullName:"Royal Challengers Bengalore"

        },
        {
            team:"KKR",
            primary:"purple",
            secondry:"gold",
            captain:"Sheriyas Iyer",
            fullName:"Kolkata Knight Riders"

        },
        {
            team:"PBKS",
            primary:"crimson",
            secondry:"white",
            captain:"Shikar Dhawan",
            fullName:"Punjab Kings"

        },
        {
            team:"RR",
            primary:"pink",
            secondry:"blue",
            captain:"Ravindra Jadeja",
            fullName:"Rajasthan Royals"

        },
        {
            team:"LSG",
            primary:"blue",
            secondry:"white",
            captain:"Rishab Pant",
            fullName:" Lucknow Super Giant"

        },
    ]

    let button = document.querySelector('button')
    let main = document.querySelector('main');
    let box = document.querySelector('#box')
    let h1 = document.querySelector('h1')
    let h5 = document.querySelector('h5')
    let p = document.querySelector('p')


    button.addEventListener('click',()=>{
        let random = Math.floor(Math.random()*arr.length)
        let nums = arr[random]

        h1.textContent = nums.team;

        main.style.backgroundColor = nums.primary;
        box.style.backgroundColor = nums.secondry;
        main.style.backgroundColor = nums.primary;
        box.style.backgroundColor = nums.secondry;
        h5.textContent = nums.fullName
        p.textContent = nums.captain
        

        let dark = "black"

        if (dark.includes(nums.secondry.toLocaleLowerCase())) {
            h1.style.color = "white"
            h5.style.color = "white"
            p.style.color = "white" 
        
            
        }else{
            h1.style.color = "black"
            h5.style.color = "black"
            p.style.color = "black"
            
        }

    })
    
 
   



})()








