
let phc = document.getElementById('phc')
let phcs = document.querySelector('.phcs')
phcs.addEventListener('click', function(){
    phc.style.display = 'block'
})

let body=document.querySelector('body')
let bodyback=document.getElementById('bodyback')
bodyback.addEventListener('click', function(){
    body.style.backgroundColor = 'black'
    body.style.background = 'black'
})

let reg = document.getElementById('registration')
let formreg = document.querySelector('.formreg')
formreg.addEventListener('click', function(){
    reg.style.display = 'block'
})

let anon = document.querySelector('.aname')
let phccont = document.getElementById('phccont')
let phccont2 = document.getElementById('phccont2')
let phcback = document.getElementById('phcback')
phcback.addEventListener('click', function(){
    phc.style.height = '280px'
    phc.style.borderRadius = '23px'
    phc.style.backgroundColor = 'black'
    anon.style.color = 'white'
    anon.style.fontSize = '25px'
    anon.style.lineHeight = '15px'
    phccont.style.color = 'white'
    phccont.style.fontSize = '25px'
    phccont.style.lineHeight = '15px'
    phccont2.style.color = 'white'
    phccont2.style.fontSize = '25px'
})

let title = document.querySelector('.title')
let login = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let send = document.getElementById('send_button')
let change_registration_form_button = document.getElementById('formback')
change_registration_form_button.addEventListener('click', function(){
    registration.style.backgroundColor = 'black'
    registration.style.backgroundPosition = 'right'
    registration.style.borderRadius = '10px'
    title.style.fontSize = '25px'
    title.style.color = 'white'
    login.style.height = '25px'
    login.style.borderRadius = '5px'
    login.style.backgroundColor = 'hotpink'
    login.style.color='black'
    email.style.height = '25px'
    email.style.borderRadius = '5px'
    email.style.backgroundColor = 'hotpink'
    email.style.color='black'
    password.style.height = '25px'
    password.style.borderRadius = '5px'
    password.style.backgroundColor = 'hotpink'
    password.style.color='black'
    send.style.backgroundColor = 'hotpink'
    send.style.padding = '15px 25px'
    send.style.color = 'white'
})