let piano = document.querySelectorAll(".keys");
let blackkeys = document.querySelectorAll(".blackkeys");
console.log(blackkeys);


let body = document.body;


let main = document.querySelector(".main2");
let h1 = document.querySelector(".box h1");

function key() {
  
  piano[0].addEventListener("click", () => {
    let audio = new Audio("./46.mp3");
    audio.play();
  });
  piano[1].addEventListener("click", () => {
    let audio = new Audio("./28.mp3");
    audio.play();
  });
  piano[2].addEventListener("click", () => {
    let audio = new Audio("./29.mp3");
    audio.play();
  });
  piano[3].addEventListener("click", () => {
    let audio = new Audio("./30.mp3");
    audio.play();
  });
  piano[4].addEventListener("click", () => {
    let audio = new Audio("./31.mp3");
    audio.play();
  });
  piano[5].addEventListener("click", () => {
    let audio = new Audio("./32.mp3");
    audio.play();
  });
  piano[6].addEventListener("click", () => {
    let audio = new Audio("./33.mp3");
    audio.play();
  });
  piano[7].addEventListener("click", () => {
    let audio = new Audio("./34.mp3");
    audio.play();
  });
  piano[8].addEventListener("click", () => {
    let audio = new Audio("./35.mp3");
    audio.play();
  });
  piano[9].addEventListener("click", () => {
    let audio = new Audio("./36.mp3");
    audio.play();
  });
  piano[10].addEventListener("click", () => {
    let audio = new Audio("./37.mp3");
    audio.play();
  });
  piano[11].addEventListener("click", () => {
    let audio = new Audio("./38.mp3");
    audio.play();
  });
  piano[12].addEventListener("click", () => {
    let audio = new Audio("./39.mp3");
    audio.play();
  });
  piano[13].addEventListener("click", () => {
    let audio = new Audio("./40.mp3");
    audio.play();
  });
  piano[14].addEventListener("click", () => {
    let audio = new Audio("./42.mp3");
    audio.play();
  });
  piano[15].addEventListener("click", () => {
    let audio = new Audio("./43.mp3");
    audio.play();
  });
  piano[16].addEventListener("click", () => {
    let audio = new Audio("./44.mp3");
    audio.play();
  });
  piano[17].addEventListener("click", () => {
    let audio = new Audio("./45.mp3");
    audio.play();
  });
  piano[18].addEventListener("click", () => {
    let audio = new Audio("./47.mp3");
    audio.play();
  });
  piano[19].addEventListener("click", () => {
    let audio = new Audio("./48.mp3");
    audio.play();
  });
  piano[20].addEventListener("click", () => {
    let audio = new Audio("./49.mp3");
    audio.play();
  });
}

function black(){
   blackkeys[0].addEventListener("click",()=>{
    let audio1 = new Audio('./54.mp3')
    let audio2 = new Audio('./42.mp3')
    audio1.play()
    audio2.play()
   })

   blackkeys[1].addEventListener("click",()=>{
    let audio1 = new Audio('./56.mp3')
    let audio2 = new Audio('./40.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[2].addEventListener("click",()=>{
    let audio1 = new Audio('./57.mp3')
    let audio2 = new Audio('./41.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[3].addEventListener("click",()=>{
    let audio1 = new Audio('./28.mp3')
    let audio2 = new Audio('./50.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[4].addEventListener("click",()=>{
    let audio1 = new Audio('./59.mp3')
    let audio2 = new Audio('./49.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[5].addEventListener("click",()=>{
    let audio1 = new Audio('./60.mp3')
    let audio2 = new Audio('./47.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[6].addEventListener("click",()=>{
    let audio1 = new Audio('./61.mp3')
    let audio2 = new Audio('./32.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[7].addEventListener("click",()=>{
    let audio1 = new Audio('./62.mp3')
    let audio2 = new Audio('./35.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[8].addEventListener("click",()=>{
    let audio1 = new Audio('./29.mp3')
    let audio2 = new Audio('./63.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[9].addEventListener("click",()=>{
    let audio1 = new Audio('./38.mp3')
    let audio2 = new Audio('./31.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[10].addEventListener("click",()=>{
    let audio1 = new Audio('./36.mp3')
    let audio2 = new Audio('./42.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[11].addEventListener("click",()=>{
    let audio1 = new Audio('./57.mp3')
    let audio2 = new Audio('./38.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[12].addEventListener("click",()=>{
    let audio1 = new Audio('./43.mp3')
    let audio2 = new Audio('./34.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[13].addEventListener("click",()=>{
    let audio1 = new Audio('./58.mp3')
    let audio2 = new Audio('./45.mp3')
    audio1.play()
    audio2.play()
   })
   blackkeys[14].addEventListener("click",()=>{
    let audio1 = new Audio('./56.mp3')
    let audio2 = new Audio('./51.mp3')
    audio1.play()
    audio2.play()
   })
  
}

function doub(){
      let keyPressed = {}


  body.addEventListener('keydown',(e)=>{
    keyPressed[e.code] = true;  // mark key as pressed

    // Check combination for black keys
    if (keyPressed["KeyC"] && keyPressed["KeyD"]) {
        let audio = new Audio("./62.mp3");
        let audio1 = new Audio("./60.mp3");
        audio.play();
        audio1.play();
        blackkeys[0].classList.add("active");
        setTimeout(() => blackkeys[0].classList.remove("active"), 200);
        return
    }

  })
      
}

// doub()

function play() {
  body.addEventListener("keydown", (elem) => {
    console.log(elem.code);

    if (elem.code === "KeyD") {
      let audio = new Audio("./62.mp3");
      audio.play();
      piano[0].classList.add("active")
      setTimeout(()=>{ piano[0].classList.remove('active')},200)
    }
    if (elem.code === "KeyC") {
      let audio = new Audio("./42.mp3");
      audio.play();
      blackkeys[0].classList.add("active");
        setTimeout(() => blackkeys[0].classList.remove("active"), 200);
    }
    if (elem.code === "KeyA") {
      let audio = new Audio("./41.mp3");
      audio.play();
         blackkeys[1].classList.add("active");
        setTimeout(() => blackkeys[1].classList.remove("active"), 200);
   
    }
    if (elem.code === "KeyB") {
      let audio = new Audio("./40.mp3");
         blackkeys[3].classList.add("active");
        setTimeout(() => blackkeys[3].classList.remove("active"), 200);
      audio.play();
 
    }
    if (elem.code === "KeyQ") {
      let audio = new Audio("./31.mp3");
      audio.play();
         blackkeys[2].classList.add("active");
        setTimeout(() => blackkeys[2].classList.remove("active"), 200);
       
    }
    if (elem.code === "KeyW") {
      let audio = new Audio("./30.mp3");
      audio.play();
         blackkeys[4].classList.add("active");
        setTimeout(() => blackkeys[4].classList.remove("active"), 200);
      
    }
    if (elem.code === "KeyE") {
      let audio = new Audio("./28.mp3");
      audio.play();
         blackkeys[6].classList.add("active");
        setTimeout(() => blackkeys[6].classList.remove("active"), 200);
      
    }
    if (elem.code === "KeyR") {
      let audio = new Audio("./29.mp3");
      audio.play();
         blackkeys[7].classList.add("active");
        setTimeout(() => blackkeys[7].classList.remove("active"), 200);
     
    }
    if (elem.code === "KeyT") {
      let audio = new Audio("./32.mp3");
      audio.play();
         blackkeys[8].classList.add("active");
        setTimeout(() => blackkeys[8].classList.remove("active"), 200);
      
    }
    if (elem.code === "KeyY") {
      let audio = new Audio("./33.mp3");
      audio.play();
         blackkeys[9].classList.add("active");
        setTimeout(() => blackkeys[9].classList.remove("active"), 200);
      
    }
    if (elem.code === "KeyU") {
      let audio = new Audio("./34.mp3");
      audio.play();
         blackkeys[10].classList.add("active");
        setTimeout(() => blackkeys[10].classList.remove("active"), 200);

    }
    if (elem.code === "KeyI") {
      let audio = new Audio("./35.mp3");
      audio.play();
        piano[1].classList.add("active")
      setTimeout(()=>{ piano[1].classList.remove('active')},200)
    }
    if (elem.code === "KeyO") {
      let audio = new Audio("./36.mp3");
      audio.play();
        piano[2].classList.add("active")
      setTimeout(()=>{ piano[2].classList.remove('active')},200)
    }
    if (elem.code === "KeyP") {
      let audio = new Audio("./37.mp3");
      audio.play();
        piano[3].classList.add("active")
      setTimeout(()=>{ piano[3].classList.remove('active')},200)
    }
    if (elem.code === "KeyS") {
      let audio = new Audio("./38.mp3");
      audio.play();
        piano[4].classList.add("active")
      setTimeout(()=>{ piano[4].classList.remove('active')},200)
    }
    if (elem.code === "KeyD") {
      let audio = new Audio("./39.mp3");
      audio.play();
        piano[5].classList.add("active")
      setTimeout(()=>{ piano[5].classList.remove('active')},200)
    }
    if (elem.code === "KeyF") {
      let audio = new Audio("./43.mp3");
      audio.play();
        piano[6].classList.add("active")
      setTimeout(()=>{ piano[6].classList.remove('active')},200)
    }
    if (elem.code === "KeyG") {
      let audio = new Audio("./44.mp3");
      audio.play();
        piano[7].classList.add("active")
      setTimeout(()=>{ piano[7].classList.remove('active')},200)
    }
    if (elem.code === "KeyH") {
      let audio = new Audio("./45.mp3");
      audio.play();
        piano[8].classList.add("active")
      setTimeout(()=>{ piano[8].classList.remove('active')},200)
    }
    if (elem.code === "KeyJ") {
      let audio = new Audio("./46.mp3");
      audio.play();
        piano[9].classList.add("active")
      setTimeout(()=>{ piano[9].classList.remove('active')},200)
    }
    if (elem.code === "KeyK") {
      let audio = new Audio("./47.mp3");
      audio.play();
        piano[10].classList.add("active")
      setTimeout(()=>{ piano[10].classList.remove('active')},200)
    }
    if (elem.code === "KeyL") {
      let audio = new Audio("./48.mp3");
      audio.play();
        piano[11].classList.add("active")
      setTimeout(()=>{ piano[11].classList.remove('active')},200)
    }
    if (elem.code === "KeyZ") {
      let audio = new Audio("./49.mp3");
      audio.play();
        piano[12].classList.add("active")
      setTimeout(()=>{ piano[12].classList.remove('active')},200)
    }
    if (elem.code === "KeyX") {
      let audio = new Audio("./50.mp3");
      audio.play();
        piano[13].classList.add("active")
      setTimeout(()=>{ piano[13].classList.remove('active')},200)
    }
    if (elem.code === "KeyV") {
      let audio = new Audio("./51.mp3");
      audio.play();
        piano[14].classList.add("active")
      setTimeout(()=>{ piano[14].classList.remove('active')},200)
    }
    if (elem.code === "KeyB") {
      let audio = new Audio("./52.mp3");
      audio.play();
        piano[15].classList.add("active")
      setTimeout(()=>{ piano[15].classList.remove('active')},200)
    }
    if (elem.code === "KeyN") {
      let audio = new Audio("./53.mp3");
      audio.play();
        piano[16].classList.add("active")
      setTimeout(()=>{ piano[16].classList.remove('active')},200)
    }
    if (elem.code === "KeyM") {
      let audio = new Audio("./54.mp3");
      audio.play();
        piano[17].classList.add("active")
      setTimeout(()=>{ piano[17].classList.remove('active')},200)
    }

    if (elem.code === "Space") {
      let audio = new Audio("./56.mp3");
      audio.play();
        piano[18].classList.add("active")
      setTimeout(()=>{ piano[18].classList.remove('active')},200)
    }

    if (elem.code === "ShiftLeft") {
      let audio = new Audio("./58.mp3");
      audio.play();
        piano[19].classList.add("active")
      setTimeout(()=>{ piano[19].classList.remove('active')},200)
    }
    if (elem.code === "ControlLeft") {
      let audio = new Audio("./59.mp3");
      audio.play();
        piano[20].classList.add("active")
      setTimeout(()=>{ piano[20].classList.remove('active')},200)
    }
  });
}

play();
black()
key();