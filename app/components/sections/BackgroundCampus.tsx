import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, useState } from "react"
import * as random from "maath/random/dist/maath-random.esm"

interface BackgroundCampusProps {
    scrollProgress: React.MutableRefObject<number>;
}

function ParticleField({ scrollProgress }: BackgroundCampusProps) {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }) as Float32Array);

    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x -= delta * 0.05;
        ref.current.rotation.y -= delta * 0.075;
        ref.current.rotation.z = scrollProgress.current * 2;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#10b981"
                    size={0.006}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function BackgroundCampus({ scrollProgress }: BackgroundCampusProps) {
    return (
        <div className="fixed inset-0 -z-10 w-full h-full bg-zinc-950 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <ParticleField scrollProgress={scrollProgress} />
            </Canvas>
        </div>
    );
}