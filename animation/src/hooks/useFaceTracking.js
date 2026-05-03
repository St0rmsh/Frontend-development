import { useEffect, useRef } from 'react';
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import "@tensorflow/tfjs-backend-webgl";

export const useFaceTracking = () => {
  const facePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let active = true;
    let video;

    const init = async () => {
      try {
        const model = await faceLandmarksDetection.load(
          faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
        );

        video = document.createElement("video");
        video.style.display = "none";
        document.body.appendChild(video);

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        await video.play();

        const detect = async () => {
          if (!active) return;
          const faces = await model.estimateFaces({ input: video });
          
          if (faces.length > 0) {
            const nose = faces[0].scaledMesh[1];
            facePosition.current.x = (nose[0] / video.videoWidth - 0.5) * 2;
            facePosition.current.y = (nose[1] / video.videoHeight - 0.5) * 2;
          }
          requestAnimationFrame(detect);
        };
        detect();
      } catch (e) {
        console.warn("Face tracking not available:", e);
      }
    };

    init();

    return () => {
      active = false;
      if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        video.remove();
      }
    };
  }, []);

  return facePosition;
};
