import React, {memo, Suspense, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useGLTF} from '@react-three/drei';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import {useSpring, animated, easings} from '@react-spring/three';
import endpoints from 'api/endpoints';
import {Vector3, PerspectiveCamera, Box3} from 'three';
import {CameraControls, frameArea} from 'utils';
import styled from 'styled-components';
import {Group} from 'three';
import {GLTF} from 'three-stdlib';

type ModelProps = {
  url: string;
};

type GLTFResult = GLTF & {
  nodes: {
    object: THREE.Mesh;
  };
  materials: {
    ['default']: THREE.MeshStandardMaterial;
  };
};

const CanvasWrapper = styled.div`
  height: 27rem;
  width: 27rem;
  cursor: ${({mouseDown}: {mouseDown: boolean}) => (mouseDown ? 'grabbing' : 'grab')};
`;

function useGLTFWithMeasures(url: string) {
  const {nodes, materials} = useGLTF(url) as GLTFResult;

  const box = new Box3().setFromObject(nodes.object);
  const boxSize = box.getSize(new Vector3()).length();
  const boxCenter = box.getCenter(new Vector3());

  return {nodes, materials, boxSize, boxCenter};
}

function Model({url, ...rest}: ModelProps & JSX.IntrinsicElements['group']) {
  const group = useRef<Group>(null!);

  const {nodes, materials, boxSize, boxCenter} = useGLTFWithMeasures(url);

  const {camera}: {camera: PerspectiveCamera} = useThree();

  frameArea(boxSize * 1.2, boxSize, boxCenter, camera);

  const {scale} = useSpring({
    to: {
      scale: 2,
    },
    from: {
      scale: 0,
    },
    reset: true,
    config: {
      duration: 500,
      easing: easings.easeInOutQuart,
    },
  });

  const rotationSpeed = 0.0007;

  useFrame(() => {
    group.current.rotation.y += rotationSpeed;
  });

  return (
    <group ref={group} dispose={null} {...rest}>
      <animated.mesh
        geometry={nodes.object.geometry}
        material={materials['default']}
        scale={scale}
      />
    </group>
  );
}

const OptimizedModel = memo(Model);

type DestinationViewerProps = {
  className?: string;
  model: string;
};

export default function DestinationViewer({className, model}: DestinationViewerProps) {
  const [mouseDown, setMouseDown] = useState(false);

  const modelUrl = endpoints.models + model;

  return (
    <CanvasWrapper
      className={className}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      mouseDown={mouseDown}
    >
      <Canvas camera={{fov: 15}}>
        <CameraControls enableZoom={false} enableDamping={true} enablePan={false} />
        <directionalLight position={[-5, 5, 5]} color="white" />
        <hemisphereLight groundColor={0xffffff} intensity={0.2} />
        <Suspense fallback={null}>
          <OptimizedModel url={modelUrl} />
        </Suspense>
      </Canvas>
    </CanvasWrapper>
  );
}

DestinationViewer.propTypes = {
  className: PropTypes.string,
  model: PropTypes.string.isRequired,
};
