class ShapedImage {
    constructor(src,w,h) {
        this.src = src
        this.canvas = document.createElement('canvas')
        this.canvas.width = w
        this.canvas.height = h
    }
    create(x,y) {
        const canvas = this.canvas
        const context = canvas.getContext('2d')
        const w = canvas.width, h = canvas.height
        const image = new Image()
        const img = document.createElement('img')
        image.src = this.src
        image.onload = () => {
            this.drawShapedImage(context,w,h,image)
            img.src = canvas.toDataURL()
            document.body.appendChild(img)
            const transformString = `translateX(${x}px)translateY(${y}px)`
            img.style.transform = transformString
            img.style.webkitTransform = transformString
            img.style.mozTransform = transformString
            img.style.oTransform = transformString
        }
    }
    drawShapedImage(context,w,h,image) {
      context.beginPath()
      this.definePath(context,w,h)
      context.clip()
      context.drawImage(image,0,0,w,h)
    }
    definePath(context,w,h) {
      
    }
}
