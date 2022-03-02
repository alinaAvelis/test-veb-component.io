
import SimpleInput from './modules/SimpleInput';
import InputLabel from'./modules/InputLabel';

window.addEventListener('DOMContentLoaded', () => {

  try {

    class Title extends HTMLElement {
      
      connectedCallback() {
        this.innerHTML = `<h1>
        ${this.getAttribute('text')}
        </h1>`
      }
  
      static get observedAttributes() {
        return [forInput, text];
      }
    }
  
    customElements.define('simple-input', SimpleInput, {extends: 'input'});
    customElements.define('input-label', InputLabel, {extends: 'label'});
    customElements.define('title', Title);
  
  } catch(e) {
    console.log(e)
  } 

  // try {
  //   const postData = async (url, data) => {
  //     let res = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: data
  //     });
  
  //     return await res.json();
  // };

  
  //   const form = document.querySelector('form');

  //   let messError = form.querySelector('.mess_err');
  //   let messSuccess = form.querySelector('.mess_success');

  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();
        
  //           const formData = new FormData(form);
  //           console.log(formData);

  //           const json = JSON.stringify(Object.fromEntries(formData.entries()));
  //           console.log(json);

  //           postData('mail.php', formData)
  //           .then(data => {
  //               console.log(data);
  //               messSuccess.textContent = 'Спасибо, мы получили вашу заявку. Свяжемся с вами в рабочее время';
  //               messError.textContent = '';

  //           }).catch(() => {
  //             messSuccess.textContent = ' ';
  //             messError.textContent = 'Извините, что-то пошло не так. Попробуйте снова.';
  //           }).finally(() => {
  //               form.reset();
  //           });
  //   }, false);
  // } catch(e) {
  //   console.log(e)
  // } 
       
});



