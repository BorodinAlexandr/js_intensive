const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const firstValue = +prompt('введите число');

  const secondValue = +prompt(
    'введите число, которое не меньше 2 и не больше 36, равное системе счисления, к которой ходите привести первое число'
  );

  if (Number.isNaN(firstValue) || Number.isNaN(secondValue) || secondValue < 2 || secondValue > 36) {
    console.log('Некорректный ввод!');
    return;
  }

  console.log(firstValue.toString(secondValue));
});
