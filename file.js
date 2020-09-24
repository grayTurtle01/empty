function loadSetting(){
  body = document.querySelector('body')
  body.style.background = 'black'
  body.style.color = 'white'

  images = document.getElementsByTagName('img')

  for(i = 0; i < images.length; i++){
    image = images[i]
    image.style.border = '1px solid white'
  } 

}

window.onload = loadSetting

function toogleBackGround(){
  body = document.querySelector('body')

  color = body.style.color
  
  if( color == 'white'){
    body.style.background = 'white'
    body.style.color = 'black'
  }
  else{
    body.style.background = 'black'
    body.style.color = 'white'
  }
}

function toogleBorders(){
  images = document.getElementsByTagName('img')
  color = body.style.color

  if( color == 'white' ){
    for(i = 0; i < images.length; i++){
      image = images[i]
      image.style.border = '1px solid white'
    }
  }
  else{
    for(i = 0; i < images.length; i++){
      image = images[i]
      image.style.border = '1px solid black'
    }
  }





}

function handleClickButton(){
  toogleBackGround()
  toogleBorders()
}


boton = document.querySelector('button')
boton.onclick= handleClickButton