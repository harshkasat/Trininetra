import React, { Suspense } from 'react'
// import logo from '../../assets/cube.mp4'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Scene  from './Scene'
// import { useRef } from 'react'

function Image() {
  // const cameraRef = useRef();
  // cameraRef.current.position.set(0, 0, 5); 
  return (
      <Canvas>
        <ambientLight />
        <OrbitControls
        enableZoom={false}
        />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Environment preset='sunset'/>
      </Canvas>
  );
}

export default Image
