const button = document.querySelector('.button');

const calculation = () => {
  const firstValue = +prompt('Введите первое число');
  if (Number.isNaN(+firstValue)) {
    console.log('Некорректный ввод!');
    return;
  }

  const secondValue = +prompt('Введите второе число');
  if (Number.isNaN(+secondValue)) {
    console.log('Некорректный ввод!');
    return;
  }

  console.log(`Ответ: ${firstValue + secondValue}, ${firstValue / secondValue}.`);
};

button.addEventListener('click', calculation);
