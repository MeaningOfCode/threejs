import { REVISION } from './ddd/constants.js';



export { WebGLArrayRenderTarget } from './ddd/domain/core/renderers/WebGLArrayRenderTarget.js';
export { WebGL3DRenderTarget } from './ddd/domain/core/renderers/WebGL3DRenderTarget.js';
export { WebGLMultipleRenderTargets } from './ddd/domain/core/renderers/WebGLMultipleRenderTargets.js';
export { WebGLCubeRenderTarget } from './ddd/domain/core/renderers/WebGLCubeRenderTarget.js';
export { WebGLRenderTarget } from './ddd/domain/core/renderers/WebGLRenderTarget.js';


export { WebGLRenderer } from './ddd/domain/core/renderers/WebGLRenderer.js';
export { WebGL1Renderer } from './ddd/domain/core/renderers/WebGL1Renderer.js';

export { ShaderLib } from './ddd/domain/core/renderers/shaders/ShaderLib.js';
export { UniformsLib } from './ddd/domain/core/renderers/shaders/UniformsLib.js';
export { UniformsUtils } from './ddd/domain/core/renderers/shaders/UniformsUtils.js';
export { ShaderChunk } from './ddd/domain/core/renderers/shaders/ShaderChunk.js';
export { FogExp2 } from './ddd/domain/core/scenes/FogExp2.js';
export { Fog } from './ddd/domain/core/scenes/Fog.js';
export { Scene } from './ddd/domain/core/scenes/Scene.js';



export { Sprite } from './ddd/domain/support/objects/Sprite.js';
export { LOD } from './ddd/domain/support/objects/LOD.js';
export { SkinnedMesh } from './ddd/domain/support/objects/SkinnedMesh.js';
export { Skeleton } from './ddd/domain/support/objects/Skeleton.js';
export { Bone } from './ddd/domain/support/objects/Bone.js';
export { Mesh } from './ddd/domain/support/objects/Mesh.js';
export { InstancedMesh } from './ddd/domain/support/objects/InstancedMesh.js';
export { LineSegments } from './ddd/domain/support/objects/LineSegments.js';
export { LineLoop } from './ddd/domain/support/objects/LineLoop.js';
export { Line } from './ddd/domain/support/objects/Line.js';
export { Points } from './ddd/domain/support/objects/Points.js';
export { Group } from './ddd/domain/support/objects/Group.js';
export { VideoTexture } from './ddd/domain/support/textures/VideoTexture.js';
export { FramebufferTexture } from './ddd/domain/support/textures/FramebufferTexture.js';
export { Source } from './ddd/domain/support/textures/Source.js';
export { DataTexture } from './ddd/domain/support/textures/DataTexture.js';
export { DataArrayTexture } from './ddd/domain/support/textures/DataArrayTexture.js';
export { Data3DTexture } from './ddd/domain/support/textures/Data3DTexture.js';
export { CompressedTexture } from './ddd/domain/support/textures/CompressedTexture.js';
export { CompressedArrayTexture } from './ddd/domain/support/textures/CompressedArrayTexture.js';
export { CubeTexture } from './ddd/domain/support/textures/CubeTexture.js';
export { CanvasTexture } from './ddd/domain/support/textures/CanvasTexture.js';
export { DepthTexture } from './ddd/domain/support/textures/DepthTexture.js';
export { Texture } from './ddd/domain/support/textures/Texture.js';
export * from './ddd/domain/support/geometries/Geometries.js';
export * from './ddd/domain/support/materials/Materials.js';
export { AnimationLoader } from './ddd/domain/support/loaders/AnimationLoader.js';
export { CompressedTextureLoader } from './ddd/domain/support/loaders/CompressedTextureLoader.js';
export { CubeTextureLoader } from './ddd/domain/support/loaders/CubeTextureLoader.js';
export { DataTextureLoader } from './ddd/domain/support/loaders/DataTextureLoader.js';
export { TextureLoader } from './ddd/domain/support/loaders/TextureLoader.js';
export { ObjectLoader } from './ddd/domain/support/loaders/ObjectLoader.js';
export { MaterialLoader } from './ddd/domain/support/loaders/MaterialLoader.js';
export { BufferGeometryLoader } from './ddd/domain/support/loaders/BufferGeometryLoader.js';
export { DefaultLoadingManager, LoadingManager } from './ddd/domain/support/loaders/LoadingManager.js';
export { ImageLoader } from './ddd/domain/support/loaders/ImageLoader.js';
export { ImageBitmapLoader } from './ddd/domain/support/loaders/ImageBitmapLoader.js';
export { FileLoader } from './ddd/domain/support/loaders/FileLoader.js';
export { Loader } from './ddd/domain/support/loaders/Loader.js';
export { LoaderUtils } from './ddd/domain/support/loaders/LoaderUtils.js';
export { Cache } from './ddd/domain/support/loaders/Cache.js';
export { AudioLoader } from './ddd/domain/support/loaders/AudioLoader.js';
export { SpotLight } from './ddd/domain/support/lights/SpotLight.js';
export { PointLight } from './ddd/domain/support/lights/PointLight.js';
export { RectAreaLight } from './ddd/domain/support/lights/RectAreaLight.js';
export { HemisphereLight } from './ddd/domain/support/lights/HemisphereLight.js';
export { HemisphereLightProbe } from './ddd/domain/support/lights/HemisphereLightProbe.js';
export { DirectionalLight } from './ddd/domain/support/lights/DirectionalLight.js';
export { AmbientLight } from './ddd/domain/support/lights/AmbientLight.js';
export { AmbientLightProbe } from './ddd/domain/support/lights/AmbientLightProbe.js';
export { Light } from './ddd/domain/support/lights/Light.js';
export { LightProbe } from './ddd/domain/support/lights/LightProbe.js';
export { StereoCamera } from './ddd/domain/core/cameras/StereoCamera.js';
export { PerspectiveCamera } from './ddd/domain/core/cameras/PerspectiveCamera.js';
export { OrthographicCamera } from './ddd/domain/core/cameras/OrthographicCamera.js';
export { CubeCamera } from './ddd/domain/core/cameras/CubeCamera.js';
export { ArrayCamera } from './ddd/domain/core/cameras/ArrayCamera.js';
export { Camera } from './ddd/domain/core/cameras/Camera.js';
export { AudioListener } from './ddd/domain/support/audio/AudioListener.js';
export { PositionalAudio } from './ddd/domain/support/audio/PositionalAudio.js';
export { AudioContext } from './ddd/domain/support/audio/AudioContext.js';
export { AudioAnalyser } from './ddd/domain/support/audio/AudioAnalyser.js';
export { Audio } from './ddd/domain/support/audio/Audio.js';
export { VectorKeyframeTrack } from './ddd/domain/support/animation/tracks/VectorKeyframeTrack.js';
export { StringKeyframeTrack } from './ddd/domain/support/animation/tracks/StringKeyframeTrack.js';
export { QuaternionKeyframeTrack } from './ddd/domain/support/animation/tracks/QuaternionKeyframeTrack.js';
export { NumberKeyframeTrack } from './ddd/domain/support/animation/tracks/NumberKeyframeTrack.js';
export { ColorKeyframeTrack } from './ddd/domain/support/animation/tracks/ColorKeyframeTrack.js';
export { BooleanKeyframeTrack } from './ddd/domain/support/animation/tracks/BooleanKeyframeTrack.js';
export { PropertyMixer } from './ddd/domain/support/animation/PropertyMixer.js';
export { PropertyBinding } from './ddd/domain/support/animation/PropertyBinding.js';
export { KeyframeTrack } from './ddd/domain/support/animation/KeyframeTrack.js';
export { AnimationUtils } from './ddd/domain/support/animation/AnimationUtils.js';
export { AnimationObjectGroup } from './ddd/domain/support/animation/AnimationObjectGroup.js';
export { AnimationMixer } from './ddd/domain/support/animation/AnimationMixer.js';
export { AnimationClip } from './ddd/domain/support/animation/AnimationClip.js';
export { AnimationAction } from './ddd/domain/support/animation/AnimationAction.js';
export { Uniform } from './ddd/infrastructure/core/Uniform.js';
export { UniformsGroup } from './ddd/infrastructure/core/UniformsGroup.js';
export { InstancedBufferGeometry } from './ddd/infrastructure/core/InstancedBufferGeometry.js';
export { BufferGeometry } from './ddd/infrastructure/core/BufferGeometry.js';
export { InterleavedBufferAttribute } from './ddd/infrastructure/core/InterleavedBufferAttribute.js';
export { InstancedInterleavedBuffer } from './ddd/infrastructure/core/InstancedInterleavedBuffer.js';
export { InterleavedBuffer } from './ddd/infrastructure/core/InterleavedBuffer.js';
export { InstancedBufferAttribute } from './ddd/infrastructure/core/InstancedBufferAttribute.js';
export { GLBufferAttribute } from './ddd/infrastructure/core/GLBufferAttribute.js';
export * from './ddd/infrastructure/core/BufferAttribute.js';
export { Object3D } from './ddd/infrastructure/core/Object3D.js';
export { Raycaster } from './ddd/infrastructure/core/Raycaster.js';
export { Layers } from './ddd/infrastructure/core/Layers.js';
export { EventDispatcher } from './ddd/infrastructure/core/EventDispatcher.js';
export { Clock } from './ddd/infrastructure/core/Clock.js';
export { QuaternionLinearInterpolant } from './ddd/infrastructure/math/interpolants/QuaternionLinearInterpolant.js';
export { LinearInterpolant } from './ddd/infrastructure/math/interpolants/LinearInterpolant.js';
export { DiscreteInterpolant } from './ddd/infrastructure/math/interpolants/DiscreteInterpolant.js';
export { CubicInterpolant } from './ddd/infrastructure/math/interpolants/CubicInterpolant.js';
export { Interpolant } from './ddd/infrastructure/math/Interpolant.js';
export { Triangle } from './ddd/infrastructure/math/Triangle.js';
export { MathUtils } from './ddd/infrastructure/math/MathUtils.js';
export { Spherical } from './ddd/infrastructure/math/Spherical.js';
export { Cylindrical } from './ddd/infrastructure/math/Cylindrical.js';
export { Plane } from './ddd/infrastructure/math/Plane.js';
export { Frustum } from './ddd/infrastructure/math/Frustum.js';
export { Sphere } from './ddd/infrastructure/math/Sphere.js';
export { Ray } from './ddd/infrastructure/math/Ray.js';
export { Matrix4 } from './ddd/infrastructure/math/Matrix4.js';
export { Matrix3 } from './ddd/infrastructure/math/Matrix3.js';
export { Box3 } from './ddd/infrastructure/math/Box3.js';
export { Box2 } from './ddd/infrastructure/math/Box2.js';
export { Line3 } from './ddd/infrastructure/math/Line3.js';
export { Euler } from './ddd/infrastructure/math/Euler.js';
export { Vector4 } from './ddd/infrastructure/math/Vector4.js';
export { Vector3 } from './ddd/infrastructure/math/Vector3.js';
export { Vector2 } from './ddd/infrastructure/math/Vector2.js';
export { Quaternion } from './ddd/infrastructure/math/Quaternion.js';
export { Color } from './ddd/infrastructure/math/Color.js';
export { ColorManagement } from './ddd/infrastructure/math/ColorManagement.js';
export { SphericalHarmonics3 } from './ddd/infrastructure/math/SphericalHarmonics3.js';
export { SpotLightHelper } from './ddd/adapter/inbound/helpers/SpotLightHelper.js';
export { SkeletonHelper } from './ddd/adapter/inbound/helpers/SkeletonHelper.js';
export { PointLightHelper } from './ddd/adapter/inbound/helpers/PointLightHelper.js';
export { HemisphereLightHelper } from './ddd/adapter/inbound/helpers/HemisphereLightHelper.js';
export { GridHelper } from './ddd/adapter/inbound/helpers/GridHelper.js';
export { PolarGridHelper } from './ddd/adapter/inbound/helpers/PolarGridHelper.js';
export { DirectionalLightHelper } from './ddd/adapter/inbound/helpers/DirectionalLightHelper.js';
export { CameraHelper } from './ddd/adapter/inbound/helpers/CameraHelper.js';
export { BoxHelper } from './ddd/adapter/inbound/helpers/BoxHelper.js';
export { Box3Helper } from './ddd/adapter/inbound/helpers/Box3Helper.js';
export { PlaneHelper } from './ddd/adapter/inbound/helpers/PlaneHelper.js';
export { ArrowHelper } from './ddd/adapter/inbound/helpers/ArrowHelper.js';
export { AxesHelper } from './ddd/adapter/inbound/helpers/AxesHelper.js';
export * from './ddd/infrastructure/extras/curves/Curves.js';
export { Shape } from './ddd/infrastructure/extras/core/Shape.js';
export { Path } from './ddd/infrastructure/extras/core/Path.js';
export { ShapePath } from './ddd/infrastructure/extras/core/ShapePath.js';
export { CurvePath } from './ddd/infrastructure/extras/core/CurvePath.js';
export { Curve } from './ddd/infrastructure/extras/core/Curve.js';
export { DataUtils } from './ddd/infrastructure/extras/DataUtils.js';
export { ImageUtils } from './ddd/infrastructure/extras/ImageUtils.js';
export { ShapeUtils } from './ddd/infrastructure/extras/ShapeUtils.js';
export { PMREMGenerator } from './ddd/infrastructure/extras/PMREMGenerator.js';
export { WebGLUtils } from './ddd/domain/core/renderers/webgl/WebGLUtils.js';
export * from './ddd/constants.js';
export * from './Three.Legacy.js';

if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

	__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: {
		revision: REVISION,
	} } ) );

}

if ( typeof window !== 'undefined' ) {

	if ( window.__THREE__ ) {

		console.warn( 'WARNING: Multiple instances of Three.js being imported.' );

	} else {

		window.__THREE__ = REVISION;

	}

}
