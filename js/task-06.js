const refs = {
  input: document.querySelector('#validation-input'),
  dataLength: document.querySelector('[data-length="6"]'),
};

refs.input.addEventListener('blur', onInputTest);
const validLength = Number(refs.dataLength.dataset.length);

function onInputTest(event) {
  refs.input.classList.add('invalid');

  // заменила решение задачи на это, так как в одном из видео уроков
  // Репета упомянул, что вызывать функции по тернарному оператору - плохая практика.
  if (
    event.currentTarget.value.length === validLength &&
    refs.input.classList.contains('invalid')
  ) {
    refs.input.classList.replace('invalid', 'valid');
  } else {
    refs.input.classList.replace('valid', 'invalid');
  }

  // мое предыдущее решение задачи
  //   event.currentTarget.value.length === validLength &&
  //   refs.input.classList.contains('invalid')
  //     ? refs.input.classList.replace('invalid', 'valid')
  //     : refs.input.classList.replace('valid', 'invalid');
}
