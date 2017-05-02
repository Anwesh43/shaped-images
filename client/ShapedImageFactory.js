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
