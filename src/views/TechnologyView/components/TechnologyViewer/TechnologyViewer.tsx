import React, {memo, Suspense, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useGLTF} from '@react-three/drei';
import {Box3, Group, PerspectiveCamera, Vector3} from 'three';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import styled from 'styled-components';
import endpoints from 'api/endpoints';
import {CameraControls, frameArea} from 'utils';

type ModelProps = {
  url: string;
};

const CanvasWrapper = styled.div`
  height: 27rem;
  width: 27rem;
  cursor: ${({mouseDown}: {mouseDown: boolean}) => (mouseDown ? 'grabbing' : 'grab')};
`;

function useGLTFWithMeasures(url: string) {
  const {scene} = useGLTF(url);

  const box = new Box3().setFromObject(scene);
  const boxSize = box.getSize(new Vector3()).length();
  const boxCenter = box.getCenter(new Vector3());

  const copiedScene = useMemo(() => scene.clone(), [scene]);

  return {copiedScene, boxSize, boxCenter};
}

function Model({url, ...rest}: ModelProps & JSX.IntrinsicElements['group']) {
  const group = useRef<Group>(null!);

  const {copiedScene, boxSize, boxCenter} = useGLTFWithMeasures(url);

  const {camera}: {camera: PerspectiveCamera} = useThree();

  frameArea(boxSize * 1.2, boxSize, boxCenter, camera);

  const rotationSpeed = 0.001;

  useFrame(() => {
    group.current.rotation.y += rotationSpeed;
  });

  return (
    <group ref={group} dispose={null} {...rest}>
      <primitive object={copiedScene} />
    </group>
  );
}

const OptimizedModel = memo(Model);

type DestinationViewerProps = {
  className?: string;
  model: string;
};

export default function ModelViewer({className, model}: DestinationViewerProps) {
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
        <hemisphereLight groundColor={0xffffff} intensity={0.2} />\
        <Suspense fallback={null}>
          <OptimizedModel url={modelUrl} />
        </Suspense>
      </Canvas>
    </CanvasWrapper>
  );
}

ModelViewer.propTypes = {
  className: PropTypes.string,
  model: PropTypes.string.isRequired,
};
