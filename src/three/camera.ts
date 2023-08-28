// 相机组件
import * as THREE from 'three'
// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerHeight / window.innerHeight,
  1,
  50000
)
// 设置相机位置
camera.position.set(5, 10, 15)

export default camera
