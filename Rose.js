const width = 500;
const height = 500;

function setup() {
    createCanvas(width, height);
}


function draw() {
    background(0, 0, 0);


    //folgia
    push();
    let wFoglia = Math.min(50, millis()/100)
    fill(16, 168, 0);
    ellipse(50, 390, wFoglia, 100);
    ellipse(100, 450, 100, wFoglia);
    pop()
    
    //gambo
    push();
    translate(width/2, height/2)
    fill(16, 168, 0);
    rotate(radians(45));
    rect(0, 0, -10, 400);
    pop()
    
    //Petali
    push();
    translate(width/2, height/2)
    stroke(153, 0, 5);
    fill(255, 0, 8);
    const maxH = 200, minH = 70;
    const nPetali = 200;
    const step = (maxH-minH)/nPetali;
    const WHRatio = 1/2;
    for (let i = 0; i < Math.min(nPetali, millis()/50); i++) {
        fill(255-(255-179)/nPetali*i, 0, 6);
        let h = maxH - step*i;
        ellipse(0, -h/2, h*WHRatio, h);
        rotate(radians(16.18));
    }
    pop()



    

}



































function hex (c) {
    var s = "0123456789abcdef";
    var i = parseInt (c);
    if (i == 0 || isNaN (c))
      return "00";
    i = Math.round (Math.min (Math.max (0, i), 255));
    return s.charAt ((i - i % 16) / 16) + s.charAt (i % 16);
  }
  
  /* Convert an RGB triplet to a hex string */
  function convertToHex (rgb) {
    return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
  }
  
  /* Remove '#' in color hex string */
  function trim (s) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }
  
  /* Convert a hex string to an RGB triplet */
  function convertToRGB (hex) {
    var color = [];
    color[0] = parseInt ((trim(hex)).substring (0, 2), 16);
    color[1] = parseInt ((trim(hex)).substring (2, 4), 16);
    color[2] = parseInt ((trim(hex)).substring (4, 6), 16);
    return color;
  }
  
  function generateColor(colorStart,colorEnd,colorCount){
  
      // The beginning of your gradient
      var start = convertToRGB (colorStart);    
  
      // The end of your gradient
      var end   = convertToRGB (colorEnd);    
  
      // The number of colors to compute
      var len = colorCount;
  
      //Alpha blending amount
      var alpha = 0.0;
  
      var saida = [];
      
      for (let i = 0; i < len; i++) {
          var c = [];
          alpha += (1.0/len);
          
          c[0] = start[0] * alpha + (1 - alpha) * end[0];
          c[1] = start[1] * alpha + (1 - alpha) * end[1];
          c[2] = start[2] * alpha + (1 - alpha) * end[2];
  
          saida.push(convertToHex (c));
          
      }
      
      return saida;
      
  }