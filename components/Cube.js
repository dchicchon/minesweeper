import React, { useState, useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import styles from '../styles/game.module.css'
// extend({ OrbitControls })

const Plane = () => {
    return (
        <mesh>
            <planeBufferGeometry />
            <meshLambertMaterial color='orange' />
        </mesh>
    )
}

// maybe cube should be a bunch of planes made togther?
const Cube = () => {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    useFrame((state, delta) => {
        // ref.current.rotation.x += 0.01
        // ref.current.rotation.y += 0.01
    })

    // return (
    //     <>
    //         <Plane position={[100,0,0]} />
    //         <Plane position={[200,25,25]} />
    //         <Plane position={[300,50,50]} />
    //         <Plane position={[400,75 ,75]} />
    //     </>
    // )

    return (
        // we can try making a bunch of planes together here which are the spots for mines
        <mesh
            ref={ref}
            scale={1}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    )
}


const SceneItems = () => {
    return (
        <>
            <OrbitControls
                minDistance={1.75}
                maxDistance={2.75}
            />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Cube position={[1, 1, 1]} />
        </>
    )
}


const CompleteScene = () => {
    return (
        <div id={styles.scene}>
            <Canvas>
                <SceneItems />
            </Canvas>
        </div>
    )
}

export default CompleteScene