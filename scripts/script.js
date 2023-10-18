let burguer = document.querySelector('.burguer')
let img = document.querySelector('header img')
let list = document.querySelector('.navigation')
let x = document.querySelector('.xx')



function MudouTamanho(){
    
if(window.innerWidth >= 986){
    burguer.style.display = 'none'
    x.style.display = 'none'
    img.style.opacity = 1
    list.style.opacity = 1

}else{
    burguer.style.display = 'flex'
    img.style.opacity = 0
    list.style.opacity = 0
}

if(burguer.style.display == 'flex'){
    x.style.display = 'none'
}

}


const dropdown = () =>{
    if(img.style.opacity == 0){
        img.style.opacity = 1
        list.style.opacity = 1
        burguer.style.display = 'none'
        x.style.display = 'block'
    }else{
        img.style.opacity = 0
        list.style.opacity = 0
        
        
    }
}

const up = () => {
    if(x.style.display == 'block'){
        x.style.display = 'none'
        burguer.style.display = 'flex'
        img.style.opacity = 0
        list.style.opacity = 0
    }
}


burguer.addEventListener('click', dropdown)
x.addEventListener('click', up)
