import { useAnimations, useGLTF, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three';
import { MeshStandardMaterial } from 'three';

const Scene = () => {

    const {scene,animations} = useGLTF("/animatedstylizedrhinomodel.glb")
    const group = useRef()

    useThree(({scene,camera,gl})=>{
     
    })

    console.log(animations);
    const { actions } = useAnimations(animations, group)

      const [currentAction, setCurrentAction] = useState(null)


      console.log(scene);
      
      const [activeMatcap, setActiveMatcap] = useState(8)



      const standardMat = useRef()

useEffect(() => {
  standardMat.current = new MeshStandardMaterial({
    color: "#4fd1c5",
    roughness: 0.4,
    metalness: 0.2,
  })

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = standardMat.current
    }
  })
}, [scene])



  const matcaps = (useTexture([
    "/matcap/mat-1.png",
    "/matcap/mat-2.png",
    "/matcap/mat-3.png",
    "/matcap/mat-4.png",
    "/matcap/mat-5.png",
    "/matcap/mat-6.png",
    "/matcap/mat-7.png",
    "/matcap/mat-8.png",
    "/matcap/mat-9.png",
    "/matcap/mat-10.png",
    "/matcap/mat-11.png",
    "/matcap/mat-12.png",
    "/matcap/mat-13.png",
    "/matcap/mat-14.png",
    "/matcap/mat-15.png",
    "/matcap/mat-16.png",
    "/matcap/mat-17.png",
    "/matcap/mat-18.png",
    "/matcap/mat-19.png",
    "/matcap/mat-20.png"
  ]))


useEffect(() => {
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshMatcapMaterial({
        matcap: matcaps[activeMatcap],
      })
      child.material.needsUpdate = true
    }
  })
}, [scene, matcaps, activeMatcap])




   useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        child.material.needsUpdate = true
      }
    })
  }, [scene])



    useEffect(() => {
    if (!actions) return

    const run = actions[animations[2]?.name]
    if (run) {
      run.reset().fadeIn(1.5).play()
      setCurrentAction(run)
    }

    return () => run?.fadeOut(0.5)
  }, [actions, animations])




    
    
  return (
    <>
    <primitive ref={group} object={scene} scale={2} position={[0, -2, 0]} rotation={[0, 0, 0]} />
     <ambientLight intensity={0.6} />
        <pointLight position={[0.2,0.05,0.3]} intensity={0.6} distance={1.6} color={"#ffffff"} />
        <directionalLight color={0xffffff}  position={[2,4,5]} intensity={2}/>
    </>
  )
}

export default Scene