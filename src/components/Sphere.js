import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import texture from "../assets/img/Concrete.jpg";

const Sphere = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const textureMap = useLoader(TextureLoader, texture);
  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[2, 32]} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  );
};

export default Sphere;
