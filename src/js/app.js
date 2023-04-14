let formInputPassword = document.querySelectorAll('#form-input-password')
let formInputPasswordShow = document.querySelectorAll('#form-input-password-show')
let formInputPasswordHide = document.querySelectorAll('#form-input-password-hide')


formInputPasswordShow.forEach((item , index)=>{
    item.addEventListener('click' , function(){
        formInputPassword[index].type = 'text'
        formInputPasswordHide[index].classList.remove('hidden')
        item.classList.add('hidden')
    })
})

formInputPasswordHide.forEach((item , index)=>{
    item.addEventListener('click' , function(){
        formInputPassword[index].type = 'password'
        item.classList.add('hidden')
        formInputPasswordShow[index].classList.remove('hidden')
    })
})