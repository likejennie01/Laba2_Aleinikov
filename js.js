
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    
    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            

            if (nav.style.display === 'flex') {
                burger.classList.add('active');
            } else {
                burger.classList.remove('active');
            }
        });
        

        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                nav.style.display = 'none';
                burger.classList.remove('active');
            });
        });
        

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.style.display = '';
                burger.classList.remove('active');
            }
        });
    }
    

    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                this.reset();
            } else {
                alert('Пожалуйста, заполните все обязательные поля');
            }
        });
    }
});