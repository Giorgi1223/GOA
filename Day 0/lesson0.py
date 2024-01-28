from turtle import*


#we want to paint a house

#step 1:  draw a square
speed(30)
  
color("blue")
width(7)
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#step 2:  drawing a door

forward(80)
color("red")
left(90)
begin_fill()
forward(70) #heigh of the door
right(90)
forward(40)
right(90)
forward(70)
end_fill()
#end of door

penup()
goto(200, 200)
pendown()
#step 3:  drawing a roof
color("yellow")
begin_fill()
right(150)
forward(50)
left(60)
forward(150)
left(60)
forward(50)
end_fill()
#end of roof

penup()
goto(150, 150)
pendown()
#step 4:  drawing a window
color("brown")
begin_fill()
right(60)
forward(100)

left(90)
forward(50)

left(90)
forward(100)

left(90)
forward(50)
end_fill()
#end of window
exitonclick()