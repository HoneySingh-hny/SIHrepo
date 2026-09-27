import {
  OrbitControls,
  useGLTF,
  useTexture,
  useAnimations,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Dog = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Section-1",
        start: "top top",
        endTrigger: "#Section-3",
        end: "bottom bottom",
        scrub: true,
      },
    });
    tl
    .to(dogmodel.current.scene.position, {
      z: "-=0.75",
      y:"+=0.2"
    })
    .to( dogmodel.current.scene.rotation,{
        x: `+=${Math.PI/15}`
    })
    .to(dogmodel.current.scene.rotation,{
      y:`+=${Math.PI*1.19}`
    },"three")
    .to(dogmodel.current.scene.position,{
        x:"-=0.32",
        y:"-=0.22",
        z:"+=0.68"
    },"three")
  }, []);

  const model = useGLTF("/models/dog.drc.glb");
  useThree(({ scene, camera, gl }) => {
    camera.position.z = 0.7;
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  const [normalMap, sampleMatCap, branchNormalMap, branchMap] = useTexture([
    "/images/dog_normal.jpeg",
    "/matcap/mat-2.png",
    "/images/Branch_normals.jpeg",
    "/models/Branch_diffuse.jpeg",
  ]).map((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });
  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: sampleMatCap,
  });
  const branchMaterial = new THREE.MeshMatcapMaterial({
    normalMap: branchNormalMap,
    map: branchMap,
  });

  const { actions } = useAnimations(model.animations, model.scene);
  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) child.material = dogMaterial;
    else {
      child.material = branchMaterial;
    }
  });

  const dogmodel = useRef(model);
  return (
    <>
      <primitive
        object={model.scene}
        position={[0.1, -0.55, 0.2]}
        rotation={[0, Math.PI / 4.5, 0]}
      />
    </>
  );
};

export default Dog;
