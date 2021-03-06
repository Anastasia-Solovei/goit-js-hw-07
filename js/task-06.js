const refs = {
  input: document.querySelector('#validation-input'),
  dataLength: document.querySelector('[data-length="6"]'),
};

refs.input.addEventListener('blur', onInputTest);
const validLength = Number(refs.dataLength.dataset.length);

function onInputTest(event) {
  refs.input.classList.add('invalid');

  if (event.currentTarget.value.length === validLength) {
    refs.input.classList.replace('invalid', 'valid');
  } else {
    refs.input.classList.replace('valid', 'invalid');
  }
}
