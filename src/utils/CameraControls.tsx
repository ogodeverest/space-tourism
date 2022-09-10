import React, {useRef} from 'react';
import {useFrame, extend, useThree, ReactThreeFiber} from '@react-three/fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

extend({OrbitControls});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

type Props = {
  enableDamping?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
};

export default function CameraControls({
  enableDamping = false,
  enableZoom = true,
  enablePan = true,
}: Props) {
  const {
    camera,
    gl: {domElement},
  } = useThree();

  const controls = useRef<OrbitControls>(null!);
  useFrame(() => controls.current!.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      {...{enableDamping, enableZoom, enablePan}}
      dampingFactor={0.1}
    />
  );
}
