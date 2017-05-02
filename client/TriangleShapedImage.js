class TriangleShapedImage {
    constructor(src,a) {
        super(src,a,a)
    }
    definePath(context,w,h) {
        context.moveTo(-w/2,h/2)
        context.lineTo(0,-h/2)
        context.lineTo(w/2,h/2)
        contet.lineTo(-w/2,h/2)
    }
}
