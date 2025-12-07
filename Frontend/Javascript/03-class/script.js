const users = [
  {
    username: "Aarav Sharma",
    tags: ["developer", "javascript", "frontend"],
    description: "Passionate about building interactive UI and web tools.",
    profession: "Frontend Developer",
    location: "Mumbai, India",
    profilePic: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
  },
  {
    username: "Priya Verma",
    tags: ["designer", "ui/ux", "branding"],
    description: "Creates meaningful user experiences with simple design.",
    profession: "UI/UX Designer",
    location: "Delhi, India",
    profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    username: "Kabir Singh",
    tags: ["ml", "ai", "python"],
    description: "Working on ML models and data-driven applications.",
    profession: "Machine Learning Engineer",
    location: "Pune, India",
    profilePic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
  },
  {
    username: "Meera Patel",
    tags: ["marketing", "socialmedia", "ads"],
    description: "Helps brands reach millions through digital marketing.",
    profession: "Digital Marketer",
    location: "Ahmedabad, India",
    profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    username: "Rohan Joshi",
    tags: ["backend", "nodejs", "database"],
    description: "Builds secure and scalable server-side applications.",
    profession: "Backend Developer",
    location: "Bangalore, India",
    profilePic: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    username: "Sofia Khan",
    tags: ["cybersecurity", "pentesting", "linux"],
    description: "Protecting systems from hackers and vulnerabilities.",
    profession: "Cyber Security Analyst",
    location: "Hyderabad, India",
    profilePic: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"
  },
  {
    username: "Vikram Rao",
    tags: ["gaming", "animation", "3d"],
    description: "Creates realistic worlds for games and films.",
    profession: "Game & 3D Artist",
    location: "Chennai, India",
    profilePic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
  }
];

let main = document.querySelector('main')
let time = " ";
users.forEach((elem)=>{

  time+= ` <div class="cards">
            <div class="imag">
                   <img class="image" src=${elem.profilePic} alt="not now">
               </div>
               <h3>Name : ${elem.username}</h3>
               <h4>Profession : ${elem.profession}</h4>
               <h5> Tags :${elem.tags}</h5>
               <p>Description : ${elem.description}</p>
               <h5>Location : ${elem.location}</h5>
   
           </div>`
  
           
  
})

main.innerHTML = time






