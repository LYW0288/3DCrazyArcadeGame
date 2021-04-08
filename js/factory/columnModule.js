// 樂高物件
class Col {
    constructor(ColGeo, ColMat, boxShape) {
      this.box = new THREE.Mesh(ColGeo, ColMat)
  
      this.boxBody = new CANNON.Body({
        mass: 0,
      })
      this.boxBody.addShape(boxShape)
      this.boxBody.position.copy(this.box.position)
  
      this.Col = new THREE.Object3D()
      this.Col.add(this.box)
      this.Col.name = 'Col'
      this.Col.traverse(function(object) {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true
          object.receiveShadow = true
        }
      })
    }
  }
  