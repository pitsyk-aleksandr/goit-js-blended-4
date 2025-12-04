/* --------------------------------------------------------------------------------------------- */
// Lesson 4
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Завдання 1:
/* ============================================================================================= */
// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
/* --------------------------------------------------------------------------------------------- */
console.log('='.repeat(40));
console.log(`Завдання 1:`);
console.log('='.repeat(40));

console.log(`1 - отримай body елемент і виведи його в консоль`);
const elBody = document.body;
console.log(elBody);
console.log('-'.repeat(40));

console.log(`2 - отримай елемент id="title" і виведи його в консоль`);
const elIdTitle = document.querySelector('#title');
console.log(elIdTitle);
console.log('-'.repeat(40));

console.log(`3 - отримай елемент class="list" і виведи його в консоль`);
const elClassList = document.querySelector('.list');
console.log(elClassList);
console.log('-'.repeat(40));

console.log(
  `4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль`
);
const elAttrDataTopic = document.querySelectorAll('[data-topic]');
console.log(elAttrDataTopic);
console.log('-'.repeat(40));

console.log(
  `5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль`
);
// Варіант 1
// const elFirstAttrDataTopic = document.querySelector('[data-topic]');
// Варіант 2
// const elFirstAttrDataTopic = document.querySelectorAll('[data-topic]')[0];
// Варіант 3
// :first-child
const elFirstAttrDataTopic = document.querySelector('[data-topic]:first-child');
console.log(elFirstAttrDataTopic);
console.log('-'.repeat(40));

console.log(
  `6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль`
);
// :last-child
const elLastAttrDataTopic = document.querySelector('[data-topic]:last-child');
console.log(elLastAttrDataTopic);
console.log('-'.repeat(40));

console.log(
  `7 - який елемент є сусідом для h1? Знайти і виведи його в консоль`
);
const elSibling = document.querySelector('h1+ul');
console.log(elSibling);
console.log('-'.repeat(40));

console.log(`8 - по тегу h3 знайти всі заголовки та виведи їх у консоль`);
const elAllTitles = document.querySelectorAll('h3');
console.log(elAllTitles);
console.log('-'.repeat(40));

console.log(
  `9 - для кожного елемента h3 додай class="active", який змінить колір заголовка на червоний колір`
);
const elAllTitlesActive = document.querySelectorAll('h3');
elAllTitlesActive.forEach(elem => {
  elem.classList.add('active');
});
console.log('-'.repeat(40));

console.log(
  `10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль`
);
const elDataTopicNavigation = document.querySelector(
  '[data-topic="navigation"]'
);
console.log(elDataTopicNavigation);
console.log('-'.repeat(40));

console.log(
  `11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим`
);
elDataTopicNavigation.setAttribute('style', 'background-color: yellow;');
console.log('-'.repeat(40));

console.log(
  `12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!"`
);
elDataTopicNavigation.querySelector('p').textContent = 'Я змінив тут текст!';
console.log('-'.repeat(40));

console.log(
  `13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль`
);
const currentTopic = 'manipulation';
const elCurrentTopic = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(elCurrentTopic);
console.log('-'.repeat(40));

console.log(
  `14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним`
);
elCurrentTopic.setAttribute('style', 'background-color: blue;');
console.log('-'.repeat(40));

console.log(
  `15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль`
);
const elTitleCompleted = document.querySelector('.completed');
console.log(elTitleCompleted);
console.log('-'.repeat(40));

console.log(
  `16 - видали елемент li в якому знаходиться заголовок, який має class="completed"`
);
// Поиск элемента li

// --- Вариант : Поиск непосредственного родителя
// parentElement
// Назначение: Возвращает непосредственно родительский элемент.
const elLiCompleted = elTitleCompleted.parentElement;

// --- Вариант : Поиск вверх по иерархии до первого нахождения элемента
// Метод closest(selector)
// Принцип работы: Метод вызывается на элементе и ищет родительский элемент, начиная с самого элемента
//       и двигаясь вверх по DOM-дереву, пока не найдёт элемент, соответствующий переданному селектору.
// Аргумент: Принимает строку с CSS-селектором.
// const elLiCompleted = elTitleCompleted.closest('li');
console.log(elLiCompleted);

// Видаляємо елемент з DOM
elLiCompleted.remove();

console.log('-'.repeat(40));

console.log(
  `17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"`
);

const elh1 = document.querySelector('h1');
console.log(`elh1`, elh1);

// Создаем элемент <p></p>
const elPDOM = document.createElement('p');
// Устанавливаем для него текстовый контент
elPDOM.textContent = "Об'єктна модель документа (Document Object Model)";
console.log(`elPDOM`, elPDOM);

// Добавляем элемент elPDOM после (after()) элемента elh1
elh1.after(elPDOM);

console.log('-'.repeat(40));

console.log(
  `18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку`
);

// Пошук списку ul (з класом '.list')
// const elClassList = document.querySelector('.list');

// Створення нового єлемента li
const newListItem = document.createElement('li');

// Додаємо атрибут
newListItem.setAttribute('data-topic', 'innerHTML');
// Наповнюємо цей елемент через властивість innerHTML
newListItem.innerHTML = `
    <h3>Властивість innerHTML</h3>
    <p>
        Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
    </p>`;

console.log(`newListItem`, newListItem);

// Додаємо новий елемент списку у кінець списку.
elClassList.append(newListItem);

console.log('-'.repeat(40));

console.log(
  `19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()`
);
const markupNewLi = `
 <li data-topic="insertAdjacentHTML" >
   <h3>Властивість innerHTML</h3>
    <p>
        Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
    </p>
`;

elClassList.insertAdjacentHTML('beforeend', markupNewLi);

console.log('-'.repeat(40));

console.log(`20 - очисти список`);
// Очищаємо весь внутрішній список за допомогою innerHTML = ''
elClassList.innerHTML = '';

console.log('-'.repeat(40));

/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Завдання 2:
/* ============================================================================================= */
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
/* --------------------------------------------------------------------------------------------- */
console.log(`Завдання 2:`);

// Функція створення рандомного числа від 1 до 100
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Створюємо новий контейнер
const newNumberContainer = document.createElement('div');
// Додаємо клас до нового контейнера
newNumberContainer.classList.add('number-container');

// Додаємо новий контейнер в DOM після першого завдання (після параграфа с класом 'task-2')
const elTask2 = document.querySelector('.task-2');
elTask2.after(newNumberContainer);
// newNumberContainer = document.querySelector('.number-container');

let markupNewNumber = ``;

for (let i = 1; i <= 100; i++) {
  const newNumber = randomNumber();
  console.log(`newNumber`, newNumber);
  let classNumber = '';
  if (newNumber % 2 === 0) {
    classNumber = 'even';
  } else {
    classNumber = 'odd';
  }
  markupNewNumber += `
    <div class="${classNumber}">${newNumber}</div>
    `;
}

newNumberContainer.insertAdjacentHTML('beforeend', markupNewNumber);

console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Завдання 3:
/* ============================================================================================= */
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

/* --------------------------------------------------------------------------------------------- */
console.log(`Завдання 3:`);

// Посилання форми
const refs3 = {
    contactFormEl: document.querySelector('.js-contact-form'),
    usernameInputEl: document.querySelector('.js-username-input'),
    policyCheckbox: document.querySelector('.js-policy-checkbox'),
    usernameOutputEl: document.querySelector('.js-username-output'),
    submitBtnEl: document.querySelector('.js-contact-form-submit'),
}

// ------------------------------------------------------------
// Слухач події input для перевірки довжини імені користувача та встановлення класу для кольору обводки
refs3.usernameInputEl.addEventListener('input', chkInputLength);

// Перший виклик функції перевірки довжини імені користувача та встановлення класу для кольору обводки
chkInputLength();

// функція перевірки довжини імені користувача та встановлення класу для кольору обводки
function chkInputLength(event) {
    const userName = refs3.contactFormEl.elements.userName.value;
    console.log(`userName`,userName);
    const isSuccessLength = userName.length >= 6 ? true : false;
    if (isSuccessLength) {
        refs3.usernameInputEl.classList.add(`success`);
        refs3.usernameInputEl.classList.remove(`error`);
    } else {
        refs3.usernameInputEl.classList.remove(`success`);
        refs3.usernameInputEl.classList.add(`error`);
    }
    if (userName.length > 0) {
        refs3.usernameOutputEl.textContent = userName;
    } else {
        refs3.usernameOutputEl.textContent = 'Anonymous';
    }
    
}
// ------------------------------------------------------------

// ------------------------------------------------------------
// Слухач події focus для перевірки пустоти поля імені користувача
refs3.usernameInputEl.addEventListener('focus', chkInputFocus);

// функція перевірки при focus пустоти поля імені користувача та встановлення кольору обводки
function chkInputFocus(event) {
    const userName = refs3.contactFormEl.elements.userName.value;
    console.log(`userName`,userName);
    const isSuccessLength = userName.length > 0 ? true : false;
    console.log(`isSuccessLength`,isSuccessLength);
    if (isSuccessLength) {
        refs3.usernameInputEl.style.outline = '3px solid green';
    } else {
        refs3.usernameInputEl.style.outline = '3px solid red';
    }
}
// ------------------------------------------------------------

// ------------------------------------------------------------
// Слухач події blur для перевірки пустоти поля імені користувача
refs3.usernameInputEl.addEventListener('blur', chkInputBlur);

// функція перевірки при blur пустоти поля імені користувача та встановлення кольору обводки
function chkInputBlur(event) {
    const userName = refs3.contactFormEl.elements.userName.value;
    console.log(`userName`,userName);
    const isSuccessLength = userName.length > 0 ? true : false;
    console.log(`isSuccessLength`,isSuccessLength);
    if (isSuccessLength) {
        refs3.usernameInputEl.style.outline = '3px solid lime';
    } else {
        refs3.usernameInputEl.style.outline = '3px solid red';
    }
}
// ------------------------------------------------------------

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне значення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
// ------------------------------------------------------------
refs3.contactFormEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    // Відміняємо поведінку браузера за замовченням
    event.preventDefault();

    // Посилання на форму в короткому вигляді
    const form=refs3.contactFormEl;
    
    // Отримуємо значення ім'я користувача
    const userName = refs3.usernameInputEl.value;
    console.log(`userName`,userName);
    // Перевіряємо значення checkbox
    const policy = refs3.policyCheckbox.checked;
    console.log(`policy`,policy);

    // Перевірка повністю введених значень
    if (userName.length === 0 || policy === false) {
        alert(`Введіть ім'я та погодьтеся з політикою кофіденційності !` );
        return;
    }

    // Перезавантаження форми та обнулення input та checkbox
    form.reset();

    // Встановлюємо дефолтне значення в checkbox
    refs3.usernameOutputEl.textContent = 'Anonymous';
    
    // Повертаємо об'єкт
    console.log(`Інформація користувача - `,{userName: userName});
    return {userName: userName};
}
// ------------------------------------------------------------


console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Завдання 4:
/* ============================================================================================= */
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
/* --------------------------------------------------------------------------------------------- */
console.log(`Завдання 4:`);

// Об'єкт з посиланнями
const refs = {
    // Посилання на квадрат
    boxEl: document.querySelector('.box'),
    // Посилання на кнопку "Зменшити" js-decrease
    btnDecreaseEl: document.querySelector('.js-decrease'),
    // Посилання на кнопку "Збільшити" js-increase
    btnIncreaseEl: document.querySelector('.js-increase'),
}

// Слухач подій на кнопку "Зменшити" 
// Передається додатковий параметр - кількість пікселів для зменшення(-) або збільшення (+)
refs.btnDecreaseEl.addEventListener('click', (event) => {onbtnChange(event, -10)});
// Слухач подій на кнопку "Збільшити"
refs.btnIncreaseEl.addEventListener('click', (event) => {onbtnChange(event, 10)});

function onbtnChange(event, num) {

    // Поточне значення ширини та висоти блоку (строкове значення наприклад '50px')
    const currentWidth = getComputedStyle(refs.boxEl).width;
    const currentHeigth = getComputedStyle(refs.boxEl).height;
    console.log(`currentWidth`,currentWidth); // '50px'
    console.log(`currentHeigth`,currentHeigth); // '50px'

    // Переводимо поточне значення ширини та висоти в числове значення :
    const currentWidthNum = parseInt(currentWidth);
    const currentHeigthNum = parseInt(currentHeigth);
    console.log(`currentWidthNum`,currentWidthNum); // 50
    console.log(`currentHeigthNum`,currentHeigthNum); // 50

    // Зменшуємо розміри блоку
    const newWidthNum = currentWidthNum + num;
    const newHeigthNum = currentHeigthNum + num;

    // Переводимо число в строку
    const newWidth = String(newWidthNum)+'px';
    const newHeigth = String(newHeigthNum)+'px';

    // Встановлення нових розмірів блоку (ширини та висоти)
    refs.boxEl.style.width = newWidth;
    refs.boxEl.style.height = newHeigth;

}


console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Завдання :
/* ============================================================================================= */
//
/* --------------------------------------------------------------------------------------------- */
console.log(`Завдання :`);

console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */
