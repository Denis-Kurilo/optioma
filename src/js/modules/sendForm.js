const sendForm = () => {
  const input = document.querySelector('input');   
  const btn = document.querySelectorAll('.btn');  
    input.addEventListener('input', () => {
      if(input.value !== ''){
            btn.forEach(elem => {
                elem.removeAttribute('disabled');
            });
          }
    });
  

    const errorMessage = 'Что-то пошло не так',
      loadMessage = 'Загрузка...',
      successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

    const form = document.querySelectorAll('form');

    const statusMessage = document.createElement('span');
    statusMessage.style.cssText = 'font-size: 2rem; color: #F7941F; width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; z-index: 2; font-weight: 600;'; 

    const postData = (body) => {
        return fetch('resources/send.php', {
            method: 'POST',
            body: body
        });
    }
     
    //form
    form.forEach((elem) => {
      elem.addEventListener('submit', (event) => {
        const input = document.querySelector('input');
      event.preventDefault();
      elem.appendChild(statusMessage);
      setTimeout(() => {
        elem.style.visibility = 'hidden';
        input.value = '';
        statusMessage.textContent = '';
      }, 3000);
     

      statusMessage.textContent = loadMessage;

      const formData = new FormData(elem);

      postData(formData)
        .then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200.');
            }
    
          statusMessage.textContent = successMessage;
        })
        .catch(error => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
      });
    });
};
export default sendForm;