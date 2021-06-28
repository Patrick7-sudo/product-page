const barBtn = document.querySelector('.icon-button');
const options = document.querySelector('.logo-options');


// window.addEventListener()

barBtn.addEventListener('click',function(){
    if(options.classList.contains('hidden')){
        options.classList.remove('hidden')
    }else{options.classList.add('hidden')}
})



