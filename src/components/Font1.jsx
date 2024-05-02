import React from 'react'
import { PerspectiveCamera,Box, Text3D, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
 function Font1  ()  {
  return (
    <>
    <Canvas>
    <PerspectiveCamera makeDefault position={[0,0,5]} />
    <ambientLight intensity={1} />
    <directionalLight position={[10, 10, 10]} />
    <OrbitControls enableZoom={false} />
    <Text3D font={"fonts/Bartex_Regular.json"} position={[-6,1.5,-3]}>
      Front-End
      <meshStandardMaterial
        color="teal"
        />
    </Text3D>
    <Text3D font={"fonts/Boogie Boys_Regular.json"} position={[1,0,-2]}>
     Back-End
      <meshStandardMaterial
        color="pink"
        />
    </Text3D>
  </Canvas>
      </>
  )
}
export default Font1