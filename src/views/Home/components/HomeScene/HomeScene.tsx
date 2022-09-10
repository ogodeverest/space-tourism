import React, {Suspense, useRef} from 'react';
import PropTypes from 'prop-types';
import {Canvas, useFrame} from '@react-three/fiber';
import {useGLTF, Stars} from '@react-three/drei';
import styled, {useTheme} from 'styled-components';
import {Mesh} from 'three';
import {CameraControls} from 'utils';
import useMediaQuery from 'hooks/useMediaQuery';
import endpoints from 'api/endpoints';

const CanvasWrapper = styled.div`
  height: 100vh;
  position: absolute;
  inset: 0;
  z-index: 0;
`;

type EarthModelProps = {
  isBigScreen: boolean;
};

export const EarthModel = ({isBigScreen}: EarthModelProps) => {
  const earthRef = useRef<Mesh>(null!);

  const earthPosition = isBigScreen ? [2.5, -0.3, 0] : [0, -1.5, 0];
  const earthScale = isBigScreen ? 0.003 : 0.0025;

  const gltf = useGLTF(endpoints.models + 'Earth.glb');

  useFrame(() => {
    earthRef.current!.rotation.y += 0.0005;
  });

  return (
    <primitive ref={earthRef} object={gltf.scene} position={earthPosition} scale={earthScale} />
  );
};

EarthModel.propTypes = {
  isBigScreen: PropTypes.bool.isRequired,
};

export default function HomeScene() {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakPoints.desktopUp);

  return (
    <CanvasWrapper>
      <Canvas camera={{fov: 30}}>
        <CameraControls />
        <directionalLight position={[-5, 5, 5]} color="white" />
        <Stars radius={100} depth={50} count={6000} factor={6} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
          <EarthModel isBigScreen={isBigScreen} />
        </Suspense>
      </Canvas>
    </CanvasWrapper>
  );
}
