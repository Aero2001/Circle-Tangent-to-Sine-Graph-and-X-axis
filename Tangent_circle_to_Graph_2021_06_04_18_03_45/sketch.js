function setup() 
{
  x_can = 512
  y_can = 512
  createCanvas(x_can,y_can);
  line_y = y_can/2
  s = 50
  
  max_i = 2*PI
  d = createSlider(-max_i,max_i,0,.01)

}

function draw() 
{

  background(0);
  stroke(255)
  noFill()
  translate(x_can/2,y_can/2)
  strokeWeight(.02)
  scale(s)
  

  line(-width/2,0,width/2,0)
  line(0,-height/2,0,height/2)
  
  
  eq = pow(d.value(),2)
  eq_d = 2*pow(d.value(),2)*d.value()
  
  eq = sin(d.value())
  eq_d = cos(d.value())
  
  
  t1 = atan(eq_d)
  t2 = PI/2 - t1
  
  r = (eq*(1/cos(t1/2)))/(2*sin((PI-t1)/2))
  cx = d.value() + r*cos(t2)
  cy = eq - r*sin(t2)  
  circle(cx,-cy,r/100)

  
  

  circle(cx,-cy,2*r)
  
  //graph
  x = -max_i
  while(x < max_i)
    {
      x = x + .05
      circle(x,-sin(x),.005)
      
    
    }
  
  //line(0,-height,0,height)
  


  
  
  
  
}