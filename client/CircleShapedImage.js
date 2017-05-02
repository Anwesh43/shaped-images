class CircleShapedImage extends ShapedImage {
    constructor(src,r) {
        super(src,2*r,2*r)
    }
    definePath(context,w,h) {
        context.arc(w/2,h/2,w/2,0,2*Math.PI)
    }
}
