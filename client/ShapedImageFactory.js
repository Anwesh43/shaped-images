class ShapedImageFactory {
    getCircleShapedImage(src,x,y,w,h) {
        const circleShapedImage = new CircleShapedImage(src,w,h)
        this.createShapedImage(circleShapedImage,x,y)
    }
    createShapedImage(shapedImage,x,y) {
        shapedImage.create(x,y)
    }
    getTriangleShapedImage(src,x,y,w,h) {
        const triangleShapedImage = new TriangleShapedImage(src,w,h)
        this.createShapedImage(triangleShapedImage,x,y)
    }
}
