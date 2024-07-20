/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 final.glb 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'




export function Model(props) {
  const { nodes, materials } = useGLTF('/final.glb')
  const group = useRef()
  const data = useScroll()
  useFrame(() => {
    group.current.rotation.y = data.offset * 2.2
    group.current.position.y = data.offset * -0.3
      group.current.position.z = data.offset * -3
      group.current.position.x = data.offset * -0.01

  })
  
  return (
    <group {...props} dispose={null} ref={group}>
      <pointLight intensity={5} decay={1} color={'white'} position={[12, 2, 4.439]} rotation={[10.418, -1.072, -1.398]} scale={10.87} />
      <directionalLight intensity={1} position={[-4.747, 3.452, -0.439]} rotation={[-1.418, -1.072, -1.398]} scale={10.87} />
      <directionalLight intensity={2} position={[2, -2.822, -4.176]} rotation={[-3.113, 1.035, 3.117]} scale={13.955} />
      <spotLight intensity={10} angle={Math.PI / 9} penumbra={1} decay={2} position={[3 ,2, 1]} rotation={[-Math.PI / 2, 0, 0]} />
      <group position={[0.262, 0.756, -0.853]} scale={[1, 0.822, 1.292]}>
        <mesh geometry={nodes.Cylinder020.geometry} material={materials.metal} />
        <mesh geometry={nodes.Cylinder020_1.geometry} material={materials.yellow} />
      </group>
      <group position={[0.295, 0.51, -2.548]} rotation={[Math.PI, -0.007, Math.PI]} scale={[0.075, 0.039, 0.016]}>
        <mesh geometry={nodes.Cube010.geometry} material={materials.gold} />
        <mesh geometry={nodes.Cube010_1.geometry} material={materials['black.001']} />
        <mesh geometry={nodes.Cube010_2.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Cube010_3.geometry} material={materials['dark blue.001']} />
        <mesh geometry={nodes.Cube010_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube010_5.geometry} material={materials.white} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials['dark blue.001']} position={[0.289, 0.245, -0.724]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.536, -0.012, -1.233]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={nodes.Cylinder002.material} position={[0.289, 0.038, 0.186]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[0.208, 0.545, 0.165]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.black} position={[0.072, -0.16, -0.483]} scale={[0.824, 1, 0.79]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.metal} position={[0.287, 0.161, 0.507]} rotation={[Math.PI / 2, 0, 0]} scale={[0.54, 0.033, 0.072]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.red} position={[0.745, 0.176, 0.509]} scale={[0.063, 0.034, 0.015]} />
      <group position={[0.829, 0.055, 0.187]} rotation={[0, 0, -Math.PI / 2]} scale={[0.152, 0.044, 0.131]}>
        <mesh geometry={nodes.Cylinder005.geometry} material={materials.black} />
        <mesh geometry={nodes.Cylinder005_1.geometry} material={materials.metal} />
        <mesh geometry={nodes.Cylinder005_2.geometry} material={materials.metal} />
      </group>
      <group position={[0.829, 0.055, -0.233]} rotation={[0, 0, -Math.PI / 2]} scale={[0.152, 0.044, 0.131]}>
        <mesh geometry={nodes.Cylinder008_1.geometry} material={materials.black} />
        <mesh geometry={nodes.Cylinder008_2.geometry} material={materials.metal} />
        <mesh geometry={nodes.Cylinder008_3.geometry} material={materials.metal} />
      </group>
      <mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} position={[0.297, 0.168, -2.534]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[0.182, 0.534, 0.182]} />
      <group position={[0.802, 0.046, -2.535]} rotation={[0, 0, -Math.PI / 2]} scale={[0.162, 0.047, 0.15]}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.black} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials.metal} />
      </group>
      <group position={[-0.218, 0.046, -2.535]} rotation={[0, 0, -Math.PI / 2]} scale={[0.162, 0.047, 0.15]}>
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.black} />
        <mesh geometry={nodes.Cylinder002_2.geometry} material={materials.metal} />
      </group>
      <mesh geometry={nodes.Cylinder.geometry} material={materials.black} position={[0.279, 0.047, 0.176]} rotation={[0, 0, -Math.PI / 2]} scale={[0.014, 0.531, 0.014]} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials.black} position={[0.279, 0.047, -2.527]} rotation={[0, 0, -Math.PI / 2]} scale={[0.014, 0.531, 0.014]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.metal} position={[0.288, 1.111, -2.294]} rotation={[-0.026, 0, 0.002]} scale={[0.368, 0.109, 0.292]} />
    </group>
  )
}

useGLTF.preload('/final.glb')
