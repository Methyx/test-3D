/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SamTheCaribbean (https://sketchfab.com/SamTheCaribbean)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/jukebox-f93f606c43f8454fa428b6c365ac789b
title: Jukebox
*/

import { useGLTF } from "@react-three/drei";

const Jukebox = (props) => {
  const { nodes, materials } = useGLTF("/jukebox.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.GLASS} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.red1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.red2} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.red2} />
      </group>
    </group>
  );
};

useGLTF.preload("/jukebox.gltf");

export default Jukebox;
