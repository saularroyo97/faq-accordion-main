const accordionBtns = document.querySelectorAll('.accordion_btn');

accordionBtns.forEach(btn =>{
    btn.addEventListener('click', function(){
        this.classList.toggle('active');
        const accordionDespripcion = this.nextElementSibling;
        const plusIcon = this.querySelector('.plus-icon');
        const minusIcon = this.querySelector('.minus-icon');

        if(accordionDespripcion.style.maxHeight){
            accordionDespripcion.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            accordionDespripcion.style.maxHeight = accordionDespripcion .scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    });
});
