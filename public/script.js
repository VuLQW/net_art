//  document.body.style.margin   = 0
//  document.body.style.overflow = `hidden`

// const cnv = document.getElementById("cnv_id")
// cnv.width = innerWidth
// cnv.height = innerHeight
// cnv.style.background = "turquoise"

//  const ctx = cnv.getContext (`2d`)

//  const squuares = []

//  const mouse_pos = new Vector (0,0)

//  //console.dir
//  cnv.onpointerover = e => {
//    mouse_pos.x = e.x
//    mouse_pos.y = e.y
//  }



// cnv.onpointerdown = (e) => {
//    squuares.push (new Vector (e.x, e.y))
   // console.log (`interaction achieved!!`)
   // console.dir(e)
   // console.log(e.x,e.y)
   // ctx.fillStyle = "white"
   // ctx.fillRect (e.x-50,e.y-50,100,100 )
   //console.log (e.x, e.y)
   //squuares.push ({
   // x: e.x,
   // y: e.y
   //})
   
//}


// function draw_frame () {
//    ctx.fillStyle = `turquoise`
//    ctx.fillRect (0,0,cnv.width, cnv.height)

//    squuares.forEach (s => {

//       const movement = new Vector (s.x, s.y)
//       movement.subtract (mouse_pos)
//       movement.setMag (3)
//       s.add (movement)
//       // s.x += Math.random () * 10 - 3
//       // s.y += Math.random () * 10 - 3
//       ctx.fillStyle = `deeppink`
//       ctx.fillRect (s.x - 10, s.y - 10, 20, 20)

//    })



//    requestAnimationFrame (draw_frame)
   

   
// }

// requestAnimationFrame (draw_frame)

// function resize_canvas () {
//    cnv.width  = innerWidth
//    cnv.height = innerHeight   
// }

