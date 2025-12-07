const reelsData = [
  {
    username: "storm_creator",
    userProfile: "https://i.pravatar.cc/180?img=15",
    caption: "New edit 🔥 What do you think? 🎧",
    video: "./videoss.mp4",
    likeCount: 12891,
    isLiked: true,
    commentCount: 342,
    shareCount: 201,
    isFollowed: false,
    isMuted: true,
  },
  {
    username: "tech_alpha",
    userProfile: "https://i.pravatar.cc/180?img=28",
    caption: "AI robots are getting smarter 🤖💡",
    video: "./video2.mp4",
    likeCount: 9543,
    isLiked: false,
    commentCount: 124,
    shareCount: 99,
    isFollowed: true,
    isMuted: true
  },
  {
    username: "food_magic",
    userProfile: "https://i.pravatar.cc/180?img=11",
    caption: "This burger hits different 🍔✨",
    video:"./video3.mp4",
    likeCount: 39122,
    isLiked: true,
    commentCount: 512,
    shareCount: 331,
    isFollowed: true,
    isMuted: true
  },
  {
    username: "travel_waves",
    userProfile: "https://i.pravatar.cc/180?img=34",
    caption: "Maldives paradise 🌊🌴",
    video: "./video4.mp4",
    likeCount: 21004,
    isLiked: false,
    commentCount: 179,
    shareCount: 144,
    isFollowed: false,
    isMuted: true
  },
  {
    username: "dance_boom",
    userProfile: "https://i.pravatar.cc/180?img=45",
    caption: "Rate the moves! 💃🔥",
    video: "./video5.mp4",
    likeCount: 77210,
    isLiked: true,
    commentCount: 937,
    shareCount: 648,
    isFollowed: true,
    isMuted: true
  },
  {
    username: "funny_panda",
    userProfile: "https://i.pravatar.cc/180?img=57",
    caption: "This panda is too funny 🐼🤣",
    video: "./video6.mp4",
    likeCount: 18234,
    isLiked: false,
    commentCount: 210,
    shareCount: 120,
    isFollowed: true,
    isMuted: true
  },
  {
    username: "car_maniac",
    userProfile: "https://i.pravatar.cc/180?img=71",
    caption: "Hyper cars are insane 🏎️⚡",
    video: "./video1.mp4",
    likeCount: 65788,
    isLiked: true,
    commentCount: 811,
    shareCount: 540,
    isFollowed: false,
    isMuted: true
  },
  {
    username: "gym_beast",
    userProfile: "https://i.pravatar.cc/180?img=18",
    caption: "No excuses, just results 💪🔥",
    video: "./video3.mp4",
    likeCount: 91822,
    isLiked: true,
    commentCount: 1021,
    shareCount: 742,
    isFollowed: false,
    isMuted: true
  },
  {
    username: "pet_world",
    userProfile: "https://i.pravatar.cc/180?img=23",
    caption: "Cute pets compilation 🐶🐱💗",
    video: "./video4.mp4",
    likeCount: 24551,
    isLiked: false,
    commentCount: 334,
    shareCount: 180,
    isFollowed: true,
    isMuted: true
  },
  {
    username: "art_vibes",
    userProfile: "https://i.pravatar.cc/180?img=62",
    caption: "Watch this insane art transformation 🎨✨",
    video: "./video2.mp4",
    likeCount: 35290,
    isLiked: true,
    commentCount: 542,
    shareCount: 302,
    isFollowed: false,
    isMuted: true
  }
];



let all = document.querySelector('.all-reels')


function reels(){
  let sum = ""
reelsData.forEach((elem,idx)=>{
  console.log(idx);
  
    sum+=`<div class="reel">
                    <video autoplay  loop ${elem.isMuted? "muted" : ""} src="${elem.video}"></video>
                     <div class="mute"  id=${idx}>
                     ${elem.isMuted? ' <i class="ri-volume-mute-line"></i>' :'<i class="ri-volume-up-line"></i>'}
                </div>
                
                <div class="bottom">
                    <div class="user">
                        
                        <img src=${elem.userProfile} alt="">
                      <h4>${elem.username}</h4>
                      <button id=${idx} class="follow" >${elem.isFollowed? "UnFollow" : "Follow"}</button>

                    
                    </div>
                    <h3>${elem.caption}</h3>
                </div>

                <div class="right">
                    <div id=${idx} class="like">
                        <h4 class="like-icon">${elem.isLiked?'<i class="ri-heart-3-fill  heart"></i>'  : '<i class="ri-heart-line"></i>'} </h4>
                        <h6>${elem.likeCount}</h6>
                    </div>
                       <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>
                       <div class="share">
                        <h4 class="share-icon"><i class="ri-send-plane-fill"></i></h4>
                        <h6>${elem.shareCount}</h6>
                    </div>
                      <div class="more">
                        <h4 class="more-icon"><i class="ri-more-2-fill"></i></h4>
                    </div>

                </div>
                
                </div>`    
})
all.innerHTML = sum

}

function click(){
  all.addEventListener("click",(elem)=>{
  
  if (elem.target.className === "like") {

   if ( !reelsData[elem.target.id].isLiked) {
     reelsData[elem.target.id].likeCount++
    reelsData[elem.target.id].isLiked = true
    
   }else{
        reelsData[elem.target.id].likeCount--
    reelsData[elem.target.id].isLiked = false

  }
      reels() 

  }

  if (elem.target.className === "follow") {
    
   if ( !reelsData[elem.target.id].isFollowed) {
    reelsData[elem.target.id].isFollowed = true
    
   }else{
    reelsData[elem.target.id].isFollowed = false

  }
        reels() 

  }
    if (elem.target.className === "mute") {
    
   if ( !reelsData[elem.target.id].isMuted) {
    reelsData[elem.target.id].isMuted = true
    
   }else{
    reelsData[elem.target.id].isMuted = false

  }
          reels() 


  }
  

  
  

  
  
  
})

}


function enableAutoPlayOnScroll(){
  const videos = document.querySelectorAll(".reel video");

  function playVisibleVideo(){
    let screenCenter = window.innerHeight / 2;

    videos.forEach((video, index) => {
      const rect = video.getBoundingClientRect();
      const videoCenter = rect.top + rect.height / 2;

      // Check if the video's center is near screen center (visible)
      if (videoCenter > screenCenter - 100 && videoCenter < screenCenter + 100) {
        video.muted = false;
        video.play();
      } else {
        video.muted = true;
        video.pause(); // optional but saves CPU
      }
    });
  }

  document.querySelector('.all-reels').addEventListener("scroll", playVisibleVideo);
  playVisibleVideo(); // run on load
}
enableAutoPlayOnScroll()

reels()
click()
