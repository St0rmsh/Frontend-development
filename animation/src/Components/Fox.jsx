import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useFrame } from '@react-three/fiber'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useFaceTracking } from '../hooks/useFaceTracking';
import { useAttention } from '../hooks/useAttention';
import { useEmotion } from '../hooks/useEmotion';
import { IKController } from '../ai-engine/motor/IKController';






const Fox = () => {

  gsap.registerPlugin(ScrollTrigger)

  const model = useGLTF(
    "/models/dog.drc.glb",
    true,
    (loader) => {
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath("/draco/")
      loader.setDRACOLoader(dracoLoader)
    }
  )

  const { camera, gl } = useThree()

  useEffect(() => {
    camera.position.z = 0.7
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = 1.0
    gl.outputColorSpace = THREE.SRGBColorSpace
  }, [camera, gl])



  const bonesRef = useRef({ head: null, eyeL: null, eyeR: null, lidL: null, lidR: null, tail: [] });
  const ikRef = useRef(null);

  const facePosition = useFaceTracking();
  const { targetAttention, updateAttention } = useAttention();
  const personalityTraits = useRef({ aggression: 0, loyalty: 0.5, curiosity: 0.8 });
  const { emotion, interact, updateEmotion } = useEmotion(personalityTraits);


  useEffect(() => {
    model.scene.traverse((obj) => {
      const name = obj.name;
      if (name === "DOGSTUDIO_RIGJNT_head") bonesRef.current.head = obj;
      if (name.includes("upperlid_l")) {
        bonesRef.current.eyeL = obj.parent;
        bonesRef.current.lidL = obj;
      }
      if (name.includes("upperlid_r")) {
        bonesRef.current.eyeR = obj.parent;
        bonesRef.current.lidR = obj;
      }
      if (name.toLowerCase().includes("tail") && obj.isBone) {
        bonesRef.current.tail.push(obj);
      }
    });

    if (bonesRef.current.tail) {
      bonesRef.current.tail.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (bonesRef.current.head) {
      ikRef.current = new IKController(bonesRef.current);
    }
  }, [model]);

  useEffect(() => {
    model.scene.traverse((m) => {
      if (!m.isMesh) return

      const name = m.name.toLowerCase()

      if (name.includes("iris")) {
        m.material = irisMaterial
      }
      else if (name.includes("sclera")) {
        m.material = scleraMaterial
      }
      else if (name.includes("cornea")) {
        m.material = corneaMaterial
      }
      else if (name.includes("dog")) {
        m.material = Foxmaterial
      }
      else {
        m.material = BranchMaterial
      }
    })
  }, [model])



  // useEffect(() => {
  //   const video = document.createElement("video")

  //   navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  //     video.srcObject = stream
  //     video.play()
  //   })

  //   const track = () => {
  //     faceTarget.current.x = (Math.random() - 0.5) * 0.3
  //     faceTarget.current.y = (Math.random() - 0.5) * 0.2
  //     requestAnimationFrame(track)
  //   }

  //   track()
  // }, [])




  useEffect(() => {
    const handleInteract = (e) => {
      if (e.key === "p") interact("play");
      if (e.key === "f") interact("feed");
    };
    window.addEventListener("keydown", handleInteract);
    return () => window.removeEventListener("keydown", handleInteract);
  }, [interact]);


  useFrame((state, delta) => {
    if (!ikRef.current) return;
    
    // Tick hooks
    updateAttention(delta);
    
    // Fallback if state.mouse isn't active, use pointer
    const mx = state.mouse ? state.mouse.x : (state.pointer ? state.pointer.x : 0);
    const my = state.mouse ? state.mouse.y : (state.pointer ? state.pointer.y : 0);
    const mousePos = { x: mx, y: my };
    
    const emotionOffset = updateEmotion(delta, mousePos);

    // Light detection (environment awareness)
    let brightLightDetected = false;
    model.scene.traverse((obj) => {
      if (obj.isLight && obj.intensity > 3) brightLightDetected = true;
    });
    ikRef.current.squintAmount = (brightLightDetected && emotion.current !== "angry") ? 0.6 : 0;

    // Combine targets (Mouse + Face tracking + Attention)
    const MAX_Y = 0.32;
    const MAX_X = 0.15;
    const combinedTargetX = my * MAX_X + facePosition.current.y;
    const combinedTargetY = mx * MAX_Y + facePosition.current.x + targetAttention.current.x;

    // Apply IK logic directly
    ikRef.current.update(
      delta, 
      combinedTargetX, 
      combinedTargetY, 
      emotionOffset.x, 
      emotionOffset.z, 
      personalityTraits.current.curiosity
    );
  });

  const { actions } = useAnimations(model.animations, model.scene)
  useEffect(() => {
    actions['Take 001'].play();
  }, [actions])

  const [
    mat1, mat2, mat3, mat4, mat5,
    mat6, mat7, mat8, mat9, mat10,
    mat11, mat12, mat13, mat14, mat15,
    mat16, mat17, mat18, mat19, mat20
  ] = (useTexture([
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
    "/matcap/mat-20.png",

  ])).map((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  })

  const material = useRef({
    uMatcap1: { value: mat19 },
    uMatcap2: { value: mat1 },
    uProgress: { value: 1.0 },
  })

  const [normalMap] = (useTexture(["/dog_normals.jpg"
  ])).map((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = false;
    return texture;
  })

  const [branchMap, branchNormalMap] = (useTexture(["/branches_diffuse.jpg", "/dog_normals.jpg"])).map((texture) => {
    texture.flipY = true;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  })

  const Foxmaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: mat2,

  })












  const BranchMaterial = new THREE.MeshMatcapMaterial({
    normalMap: branchNormalMap,
    matcap: mat2,
  })





  function onBeforeCompile(shader) {
    shader.uniforms.uMatcapTexture1 = material.current.uMatcap1;
    shader.uniforms.uMatcapTexture2 = material.current.uMatcap2;
    shader.uniforms.uProgress = material.current.uProgress;


    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
        `
    )

    shader.fragmentShader = shader.fragmentShader.replace(
      "vec4 matcapColor = texture2D( matcap, uv );",
      `
          vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
          vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
          float transitionFactor  = 0.2;
          
          float progress = smoothstep(uProgress - transitionFactor,uProgress, (vViewPosition.x+vViewPosition.y)*0.5 + 0.5);

          vec4 matcapColor = mix(matcapColor2, matcapColor1, progress );
        `
    )
  }
  Foxmaterial.onBeforeCompile = onBeforeCompile;
  BranchMaterial.onBeforeCompile = onBeforeCompile


  const irisCanvas = document.createElement("canvas");
  irisCanvas.width = irisCanvas.height = 512;
  const ctx = irisCanvas.getContext("2d");


  const drawIris = (tint = "#1b140f") => {
    ctx.clearRect(0, 0, 512, 512)


    ctx.fillStyle = "#3a2b1f";
    ctx.fillRect(0, 0, 512, 512);


    for (let i = 0; i < 2200; i++) {
      const angle = Math.random() * Math.PI * 2
      const r1 = 80 + Math.random() * 120
      const r2 = r1 + Math.random() * 20

      ctx.strokeStyle = `rgba(40,30,20,${Math.random() * 0.035})`
      ctx.beginPath()
      ctx.moveTo(
        256 + Math.cos(angle) * r1,
        256 + Math.sin(angle) * r1
      )
      ctx.lineTo(
        256 + Math.cos(angle) * r2,
        256 + Math.sin(angle) * r2
      )
      ctx.stroke()
    }

    // Soft pigment variation
    const pigment = ctx.createRadialGradient(256, 256, 70, 256, 256, 200)
    pigment.addColorStop(0, "#050403")
    pigment.addColorStop(0.65, tint)
    pigment.addColorStop(1, "#020202")

    ctx.fillStyle = pigment
    ctx.fillRect(0, 0, 512, 512)

    // Strong limbal ring
    const limbal = ctx.createRadialGradient(256, 256, 180, 256, 256, 256)
    limbal.addColorStop(0.6, "rgba(0,0,0,0)")
    limbal.addColorStop(1, "rgba(0,0,0,0.95)")

    ctx.fillStyle = limbal
    ctx.fillRect(0, 0, 512, 512)
  }


  drawIris("#1a120c")



  const irisTexture = new THREE.CanvasTexture(irisCanvas);
  irisTexture.colorSpace = THREE.SRGBColorSpace;
  irisTexture.needsUpdate = true;

  const irisMaterial = new THREE.MeshStandardMaterial({
    map: irisTexture,
    roughness: 0.55,
    metalness: 0,
    envMapIntensity: 0.15,
    color: new THREE.Color(0xffffff),
  });


  irisMaterial.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <map_fragment>',
      `
      #include <map_fragment>
      diffuseColor.rgb = pow(diffuseColor.rgb, vec3(1.1));
    `
    )
  }

  const scleraMaterial = new THREE.MeshStandardMaterial({
    color: "#e6e1dc",
    roughness: 0.55,
    metalness: 0,
    envMapIntensity: 0.2
  });

  const corneaMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.85,
    thickness: 0.03,
    roughness: 0.04,
    ior: 1.4,
    clearcoat: 1,
    clearcoatRoughness: 0.03,
    envMapIntensity: 0.4
  });



  const setEyeColor = (hex) => {
    drawIris(hex)
    irisTexture.needsUpdate = true
  }

  setEyeColor("#2a1b12")




  const foxModel = useRef(model)

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section1",
        endTrigger: "#section4",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    })

    tl
      .to(foxModel.current.scene.position, {
        z: "-=0.5",
        y: "+=0.001"
      })
      .to(foxModel.current.scene.rotation, {
        x: `+=${Math.PI / 20}`
      })

      .to(foxModel.current.scene.rotation, {
        y: `-=${Math.PI}`
      }, "third")
      .to(foxModel.current.scene.position, {
        z: "+=0.6",
        x: "-=0.5",
        y: "-=0.2"
      }, "third")
  }, [])









  useEffect(() => {
    document.querySelector(`.title[img-title= "tomorrowland"]`).addEventListener("mouseenter", () => {
      material.current.uMatcap1.value = mat19;

      gsap.to(material.current.uProgress, {
        value: 0.0,
        duration: 0.7,
        onComplete: () => {
          material.current.uMatcap2.value = material.current.uMatcap1.value
          material.current.uProgress.value = 1.0;

        }
      })
    })
    document.querySelector(`.title[img-title= "Navy"]`).addEventListener("mouseenter", () => {
      material.current.uMatcap1.value = mat8;
      gsap.to(material.current.uProgress, {
        value: 0.0,
        duration: 0.7,
        onComplete: () => {
          material.current.uMatcap2.value = material.current.uMatcap1.value
          material.current.uProgress.value = 1.0;

        }
      })
    })
    document.querySelector(`.title[img-title= "MSI-chicago"]`).addEventListener("mouseenter", () => {
      material.current.uMatcap1.value = mat9;
      gsap.to(material.current.uProgress, {
        value: 0.0,
        duration: 0.7,
        onComplete: () => {
          material.current.uMatcap2.value = material.current.uMatcap1.value
          material.current.uProgress.value = 1.0;

        }
      })
    })
    document.querySelector(`.title[img-title= "Louise"]`).addEventListener("mouseenter", () => {
      material.current.uMatcap1.value = mat12;
      gsap.to(material.current.uProgress, {
        value: 0.0,
        duration: 0.7,
        onComplete: () => {
          material.current.uMatcap2.value = material.current.uMatcap1.value
          material.current.uProgress.value = 1.0;

        }
      })
    })
    document.querySelector(`.title[img-title= "KIKK"]`).addEventListener("mouseenter", () => {
      material.current.uMatcap1.value = mat10;
      gsap.to(material.current.uProgress, {
        value: 0.0,
        duration: 0.7,
        onComplete: () => {
          material.current.uMatcap2.value = material.current.uMatcap1.value
          material.current.uProgress.value = 1.0;

        }
      })
    })
    document.querySelector(`.title[img-title= "kennedy"]`).addEventListener("mouseenter", () => {
      material.current.uMatcap1.value = mat8;
      gsap.to(material.current.uProgress, {
        value: 0.0,
        duration: 0.7,
        onComplete: () => {
          material.current.uMatcap2.value = material.current.uMatcap1.value
          material.current.uProgress.value = 1.0;

        }
      })
    })
    document.querySelector(`.title[img-title= "red"]`).addEventListener("mouseenter", () => {
      material.current.uMatcap1.value = mat13;
      gsap.to(material.current.uProgress, {
        value: 0.0,
        duration: 0.7,
        onComplete: () => {
          material.current.uMatcap2.value = material.current.uMatcap1.value
          material.current.uProgress.value = 1.0;

        }
      })
    })

    document.querySelector(`.titles`).addEventListener("mouseleave", () => {
      material.current.uMatcap1.value = mat2;
      gsap.to(material.current.uProgress, {
        value: 0.0,
        duration: 0.7,
        onComplete: () => {
          material.current.uMatcap2.value = material.current.uMatcap1.value
          material.current.uProgress.value = 1.0;

        }
      })
    })
  }, [])


  return (
    <>
      <primitive
        object={model.scene}
        position={[0.23, -0.5, 0]}
        rotation={[0, Math.PI / 3, 0]}
        onClick={() => {
          interact('hit');
          gsap.to(model.scene.rotation, {
            y: "+=0.5",
            duration: 0.2,
            yoyo: true,
            repeat: 1
          });
        }}
      />

      <ambientLight intensity={0.25} />
      <pointLight position={[0.2, 0.05, 0.3]} intensity={0.6} distance={0.6} color={"#ffffff"} />
      <directionalLight color={0xffffff} position={[2, 2, 5]} intensity={10} />
    </>
  )
}

export default Fox

