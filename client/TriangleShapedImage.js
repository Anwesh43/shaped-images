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
