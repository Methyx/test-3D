import "./App.css";
import Sphere from "./components/Sphere";
import Jukebox from "./components/Jukebox";
import MyAvatar from "./components/MyAvatar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas className="sphere">
        <ambientLight intensity={0.8} />
        <directionalLight position={[-2, 10, 2]} intensity={1} />
        <OrbitControls enableZoom={true} />
        <Sphere />

        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach="geometry" args={[10, 10]} />
            <meshStandardMaterial attach="material" color="green" />
          </mesh>
        </group>
      </Canvas>
      <Canvas className="jukebox" camera={{ position: [-10, 10, 40], fov: 3 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[-2, 10, 2]} intensity={1} />
        <OrbitControls enableZoom={true} />
        <Jukebox position={[0, -0.8, 0]} rotation={[0, -Math.PI / 2, 0]} />
      </Canvas>
      <Canvas className="avatar" camera={{ position: [-20, 20, 50], fov: 2 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[-2, 10, 2]} intensity={1} />
        <OrbitControls enableZoom={true} />
        <MyAvatar position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
