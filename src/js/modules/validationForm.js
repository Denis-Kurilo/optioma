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
};
validationForm();
export default validationForm;