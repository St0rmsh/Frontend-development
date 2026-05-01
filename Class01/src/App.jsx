import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
const users = [
  {
    username: "storm_dev",
    description: "Building GenAI systems and mastering DSA",
    likesCount: 120,
    followCount: 450,
    isLiked: true
  },
  {
    username: "code_master",
    description: "JavaScript | MERN | Open Source Contributor",
    likesCount: 89,
    followCount: 310,
    isLiked: false
  },
  {
    username: "ai_builder",
    description: "Creating AI agents and automation tools",
    likesCount: 205,
    followCount: 980,
    isLiked: true
  },
  {
    username: "dsa_grinder",
    description: "Grinding LeetCode for MAANG interviews",
    likesCount: 56,
    followCount: 190,
    isLiked: false
  },
  {
    username: "mern_ninja",
    description: "Full-stack developer with MERN stack",
    likesCount: 143,
    followCount: 520,
    isLiked: true
  },
  {
    username: "frontend_freak",
    description: "React, UI/UX, and performance optimization",
    likesCount: 76,
    followCount: 260,
    isLiked: false
  },
  {
    username: "backend_beast",
    description: "Node.js, APIs, Databases, and Scaling",
    likesCount: 164,
    followCount: 610,
    isLiked: true
  },
  {
    username: "system_arch",
    description: "Designing scalable system architectures",
    likesCount: 98,
    followCount: 430,
    isLiked: false
  },
  {
    username: "dev_ops",
    description: "CI/CD, Docker, Kubernetes enthusiast",
    likesCount: 112,
    followCount: 390,
    isLiked: true
  },
  {
    username: "ai_researcher",
    description: "Researching ML, LLMs, and Agentic AI",
    likesCount: 230,
    followCount: 1200,
    isLiked: true
  }
];





  return (
    <>
    <main className='h-screen w-full bg-black p-4  flex gap-1.5 '>
     {users.map((elem,idx)=>{ 
      return (
        <div key={idx}>
          <Card username={elem.username} description={elem.description} likes={elem.likesCount} follow={elem.followCount} isLiked={elem.isLiked} />
        </div>
      )
      })}
    </main>

    </>
  )
}

export default App
