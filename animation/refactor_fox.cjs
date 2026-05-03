const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, 'src/Components/Fox.jsx');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Imports
content = content.replace(
  'import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";',
  "import { CharacterCore } from '../ai-engine/core/CharacterCore';"
);
content = content.replace('import "@tensorflow/tfjs-backend-webgl";', '');

// 2. Replace refs and old state logic (lines 42-90 approx)
const stateRegex = /const headVelocity = useRef[\s\S]*?timer: 0\r?\n}\)/;
content = content.replace(stateRegex, `const bonesRef = useRef({ head: null, eyeL: null, eyeR: null });\nconst coreRef = useRef(null);`);

// 3. Replace the first useEffect for model traversal
const traverseRegex = /useEffect\(\(\) => \{\r?\n  model\.scene\.traverse\(\(obj\) => \{\r?\n[\s\S]*?\}\)\r?\n\}, \[model\]\)/;
content = content.replace(traverseRegex, `useEffect(() => {
  model.scene.traverse((obj) => {
    const name = obj.name;
    if (name === "DOGSTUDIO_RIGJNT_head") bonesRef.current.head = obj;
    if (name.includes("upperlid_l")) bonesRef.current.eyeL = obj;
    if (name.includes("upperlid_r")) bonesRef.current.eyeR = obj;
  });

  if (bonesRef.current.head) {
    coreRef.current = new CharacterCore(bonesRef.current, model);
  }
}, [model]);`);

// 4. Delete the video/face/speech useEffects
const faceSpeechRegex = /useEffect\(\(\) => \{\r?\n  const init = async \(\) => \{[\s\S]*?rec\.stop\(\)\r?\n\}, \[\]\)/;
content = content.replace(faceSpeechRegex, '');

// 5. Replace the feed event listener
const feedRegex = /useEffect\(\(\) => \{\r?\n  const feed = \(e\) => \{[\s\S]*?removeEventListener\("keydown", feed\)\r?\n\}, \[\]\)/;
content = content.replace(feedRegex, `useEffect(() => {
  const interact = (e) => {
    if (!coreRef.current) return;
    if (e.key === "p") coreRef.current.interact("pet");
    if (e.key === "f") coreRef.current.interact("feed");
  };
  window.addEventListener("keydown", interact);
  return () => window.removeEventListener("keydown", interact);
}, []);`);

// 6. Replace duplicate useFrames
const allOldFramesRegex = /useFrame\(\(\{mouse\}\)=>\{[\s\S]*?const \{actions\}/;
content = content.replace(allOldFramesRegex, `useFrame((state, delta) => {
  if (!coreRef.current) return;
  coreRef.current.userPosition.x = state.mouse.x;
  coreRef.current.userPosition.y = state.mouse.y;
  coreRef.current.tick(delta, state.clock.elapsedTime);
});

const {actions}`);

// 7. Remove the other stray useFrames at the bottom
const bottomFramesRegex = /const blink = useRef\(\{[\s\S]*?head\.current\.rotation\.y \+= randomInterest \* 0\.02\r?\n  \}\r?\n\}\)/;
content = content.replace(bottomFramesRegex, '');

// 8. Update onClick handler in the primitive
const onClickRegex = /onClick=\{\(\) => \{[\s\S]*?\}\}\r?\n\/>/;
content = content.replace(onClickRegex, `onClick={() => {
  if (coreRef.current) {
    coreRef.current.interact('hit');
    gsap.to(model.scene.rotation, {
      y: "+=0.5",
      duration: 0.2,
      yoyo: true,
      repeat: 1
    });
  }
}}\n/>`);

// 9. Change Eye Color!
content = content.replace('setEyeColor("#2a1b12")', 'setEyeColor("#00e5ff") // Icy blue for premium AI aesthetic');


fs.writeFileSync(targetFile, content);
console.log('Fox.jsx refactored and eye color changed successfully.');
