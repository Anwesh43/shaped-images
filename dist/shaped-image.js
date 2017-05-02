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
      context.lineWidth = w/50
      context.lineJoin = 'round'
      context.lineCap = 'round'
      context.strokeStyle = '#BDBDBD'
      context.stroke()
      context.clip()
      context.drawImage(image,w/20,h/20,w-w/10,h-h/10)
    }
    definePath(context,w,h) {

    }
}

class CircleShapedImage extends ShapedImage {
    constructor(src,r) {
        super(src,2*r,2*r)
    }
    definePath(context,w,h) {
        context.arc(w/2,h/2,w/2-w/20,0,2*Math.PI)
    }
}

class TriangleShapedImage extends ShapedImage{
    constructor(src,a) {
        super(src,a,a)
    }
    definePath(context,w,h) {
        context.moveTo(w/2,h/20)
        context.lineTo(w/20,h-h/20)
        context.lineTo(w-w/20,h-h/20)
        context.lineTo(w/2,h/20)
    }
}

class ShapedImageFactory {
    getCircleShapedImage(src,x,y,r) {
        const circleShapedImage = new CircleShapedImage(src,r)
        this.createShapedImage(circleShapedImage,x,y)
    }
    createShapedImage(shapedImage,x,y) {
        shapedImage.create(x,y)
    }
    getTriangleShapedImage(src,x,y,a) {
        const triangleShapedImage = new TriangleShapedImage(src,a)
        this.createShapedImage(triangleShapedImage,x,y)
    }
}
