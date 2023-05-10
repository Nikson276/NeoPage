
const symbols = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת",
    '\u30A2', // Катакана A
    '\u30A4', // Катакана I
    '\u30A6', // Катакана U
    '\u30A8', // Катакана E
    '\u30AA', // Катакана O
    '\u30AB', // Катакана KA
    '\u30AD', // Катакана KI
    '\u30AF', // Катакана KU
    '\u30B1', // Катакана KE
    '\u30B3', // Катакана KO
    '\u30B5', // Катакана SA
    '\u30B7', // Катакана SI
    '\u30B9', // Катакана SU
    '\u30BB', // Катакана SE
    '\u30BD', // Катакана SO
    '\u30C0', // Катакана DA
    '\u30C1', // Катакана DI
    '\u30C4', // Катакана TU
    '\u30C6', // КатаканA TE
    '\u30C8', // КатаканA TO
    '\u30CA', // КатаканA NA
    '\u30CB', // КатаканA NI
    '\u30CD', // КатаканA NU
    '\u30CE', // КатаканA NE
    '\u30CF', // КатаканA HA
    '\u30D2', // КатаканA HI
    '\u30D5', // КатаканA HU
    '\u30D8', // КатаканA HE
    '\u30DB', // КатаканA HO
    '\u30DE', // КатаканA MA
    '\u30DF', // КатаканA MI
    '\u30E1', // КатаканA MU
    '\u30E2', // КатаканA ME
    '\u30E9', // КатаканA RA
    '\u30EA', // КатаканA RI
    '\u30ED', // КатаканA RO
    '\u30EF', // КатаканA WA
    '\u30F0', // КатаканA WI
    '\u30F2', // КатаканA WO
    '\u30F3', // КатаканA N
]; // список символов для дождя

var columns = 0;
var drops = []; // массив, содержащий текущие позиции символов для каждого столбца
var fontSize = 15; // размер шрифта
var fps = 90;   //скорость падения строк (обновление экрана)

function initCanvas() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    //make canvas resizeble
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    columns = canvas.width / fontSize; // количество столбцов (ширина холста деленная на размер шрифта)
    drops = []; // массив, содержащий текущие позиции символов для каждого столбца

    return ctx;
}

// функция для инициализации массива drops
function initDrops() {
    for (let x = 0; x < columns; x++) {
        drops[x] = 1; // начальное значение для каждого символа
    }
}

// функция для отрисовки символов на холсте
function draw() {

    // добавляем фоновый слой для "стирания" предыдущего кадра
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //gradient color
    // var my_gradient = ctx.createLinearGradient(0, 0, 0, 160);
    // my_gradient.addColorStop(0, "#0F0");
    // my_gradient.addColorStop(1, "#FFFFFF");

    // добавляем слой символов
    ctx.fillStyle = '#0F0'; //my_gradient; // зеленый цвет для символов
    ctx.font = fontSize + 'px Monospace'; // задаем размер и тип шрифта
    for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)]; // выбираем случайный символ из списка
        ctx.fillText(text, i * fontSize, drops[i] * fontSize); // отрисовываем символ в текущей позиции
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0; // перезапускаем символ в верхней части холста, если он упал слишком низко
        }
        drops[i]++; // сдвигаем символ вниз на одну позицию
    }  
}

function matrix() {
    // инициализация холста
    ctx = initCanvas()

    // инициализируем массив drops и запускаем анимацию
    initDrops();

    console.log("запускаем функцию draw каждые", fps, "мс")
    setInterval(draw, fps); // запускаем функцию draw каждые fps милисек
}

function resize_canvas(){
    console.log("Ширина холста: ", canvas.width)
    console.log("Ширина экрана: ", window.innerWidth)
    console.log("Инициализация холста")
    //init canvas
    initCanvas();
    initDrops();
}

function onKeyDown(event) {
    console.log("the 'ENTER'...Key down pressed");
    document.location='./index.html'
}

// Catch all inputs from keyboard
document.addEventListener("keydown", function(event) {
    
    console.log("key pressed:", event.key)
    if (event.key == "Enter") {
        onKeyDown();
    }
  });