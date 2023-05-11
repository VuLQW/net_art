document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById("cnv_id")
cnv.width = innerWidth
cnv.height = innerHeight
cnv.style.background = "turquoise"

<iframe src="https://editor.p5js.org/VuLQW/full/If-LpTGB8"></iframe>

function resize_canvas () {
   cnv.width  = innerWidth
   cnv.height = innerHeight   
}

