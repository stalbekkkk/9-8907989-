let result = document.getElementById('result')
let txt = document.getElementById('txt')

txt.addEventListener('input', function (){
    result.innerHTML = txt.value
})