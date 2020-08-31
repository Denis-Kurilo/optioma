const validationForm = () => {
    const inputName = document.querySelectorAll('input[type=text]'),
         tel = document.querySelectorAll('input[type=tel]'),
         checkbox = document.querySelectorAll('input[type=checkbox]');
    inputName.forEach((elem) => {
        elem.addEventListener('input', () => {
            let input = elem.value;
            elem.value = input.replace(/[^а-яёА-ЯЁ\s]+/ig, '');
        });
    });
    /*tel.forEach(elem => {
        elem.addEventListener('input', (e) => {
            let target = e.target;
            checkbox.forEach((elem, index) => {
                if(target.value.length < 18){
                    elem.setAttribute('disabled', 'disabled');
                }else{
                    elem.removeAttribute('disabled');
                }   
            });  
        })
    });*/
};
validationForm();
export default validationForm;