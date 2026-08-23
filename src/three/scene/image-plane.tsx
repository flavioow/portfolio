import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo } from "react"
import {
    ClampToEdgeWrapping,
    LinearFilter,
    NoColorSpace,
    SRGBColorSpace,
    Vector2,
    Vector3,
} from "three"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import {
    HERO_IMAGE_PLANE_SEGMENTS,
    HERO_IMAGE_PLANE_SIZE,
    type SceneConfigProps,
} from "@/types/scene-config"
import { fragmentShader, vertexShader } from "../shaders/default-scene-shader"

const texturePaths = {
    alpha: "/assets/alpha.png",
    depth: "/assets/depth.png",
    diffuse: "/assets/diffuse.png",
    normal: "/assets/normal.png",
    roughness: "/assets/roughness.png",
}

export function ImagePlane({ config, motionRef }: SceneConfigProps) {
    const textures = useTexture(texturePaths)
    const breakpoint = useBreakpoint()

    const responsiveScale = (() => {
        switch (breakpoint) {
            case "md":
                return 0.92
            case "lg":
                return 0.94
            default:
                return 0.96
        }
    })()

    const responsivePositionY = (() => {
        switch (breakpoint) {
            case "md":
                return -0.01
            case "lg":
                return 0
            default:
                return 0
        }
    })()

    const responsivePositionX = (() => {
        switch (breakpoint) {
            case "md":
                return 0
            case "lg":
                return 0
            default:
                return 0.23
        }
    })()

    useMemo(() => {
        textures.diffuse.colorSpace = SRGBColorSpace

        textures.depth.colorSpace = NoColorSpace
        textures.alpha.colorSpace = NoColorSpace
        textures.normal.colorSpace = NoColorSpace
        textures.roughness.colorSpace = NoColorSpace

        for (const texture of Object.values(textures)) {
            texture.wrapS = ClampToEdgeWrapping
            texture.wrapT = ClampToEdgeWrapping

            texture.generateMipmaps = false
            texture.minFilter = LinearFilter
            texture.magFilter = LinearFilter
        }
    }, [textures])

    const uniforms = useMemo(
        () => ({
            uDiffuse: {
                value: textures.diffuse,
            },

            uDepth: {
                value: textures.depth,
            },

            uAlpha: {
                value: textures.alpha,
            },

            uNormal: {
                value: textures.normal,
            },

            uRoughness: {
                value: textures.roughness,
            },

            uMotion: {
                value: new Vector2(0, 0),
            },

            uTime: {
                value: 0,
            },

            uUvParallaxStrength: {
                value: config.uvParallaxStrength,
            },

            uVertexDepthStrength: {
                value: config.vertexDepthStrength,
            },

            uNormalStrength: {
                value: config.normalStrength,
            },

            uSpecularStrength: {
                value: config.specularStrength,
            },

            uFresnelStrength: {
                value: config.fresnelStrength,
            },

            uDepthPower: {
                value: config.depthPower,
            },

            uLightDirection: {
                value: new Vector3(0.35, 0.58, 0.74).normalize(),
            },
        }),
        [
            textures,
            config.depthPower,
            config.fresnelStrength,
            config.normalStrength,
            config.specularStrength,
            config.uvParallaxStrength,
            config.vertexDepthStrength,
        ],
    )

    useFrame((_, delta) => {
        const motion = motionRef.current.current

        uniforms.uTime.value += delta

        uniforms.uMotion.value.set(motion.xPosition, motion.yPosition)

        uniforms.uUvParallaxStrength.value = config.uvParallaxStrength

        uniforms.uVertexDepthStrength.value = config.vertexDepthStrength

        uniforms.uNormalStrength.value = config.normalStrength

        uniforms.uSpecularStrength.value = config.specularStrength

        uniforms.uFresnelStrength.value = config.fresnelStrength

        uniforms.uDepthPower.value = config.depthPower
    })

    return (
        <mesh
            scale={[responsiveScale, responsiveScale, 1]}
            position={[responsivePositionX, responsivePositionY, 0]}>
            <planeGeometry
                args={[
                    HERO_IMAGE_PLANE_SIZE.width,
                    HERO_IMAGE_PLANE_SIZE.height,
                    HERO_IMAGE_PLANE_SEGMENTS,
                    HERO_IMAGE_PLANE_SEGMENTS,
                ]}
            />

            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
                toneMapped={false}
                depthWrite={false}
            />
        </mesh>
    )
}
