const startButton = document.getElementById('startButton');
const cake = document.getElementById('cake');
const pixelCake = document.getElementById('pixel-cake');
const message = document.getElementById('message');

cake.style.display = 'block';

startButton.addEventListener('click', function() {
    this.style.display = 'none'; // скрыть кнопку после нажатия
    cake.style.display = 'block'; // показать торт

    setTimeout(() => {
      message.style.display = 'block'; // показать сообщение
      message.classList.add('visible');
    }, 500);

    buildCake(); // постройка торта 
    startRainOnce(); // <<<<< добавлен вызов функции
  });

  

  let hasStarted = false;

    function startRainOnce() {
      if (hasStarted) return;
      hasStarted = true;

      setTimeout(() => {
        setInterval(createBill, 300); // создаем купюру каждые 300 мс
      }, 2000);
    }

    function createBill() {
      const bill = document.createElement('div');
      bill.classList.add('bill');
      bill.style.left = Math.random() * window.innerWidth + 'px';
      bill.style.animationDuration = (Math.random() * 3 + 2) + 's';

      document.body.appendChild(bill);

      // Удаляем купюру после падения
      setTimeout(() => {
        bill.remove();
      }, 6000);
    }

/* Cake */
function buildCake() {
    // Карта торта: 32x34 пикселей
    const pixels = [
        // Ряд 1
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','transparent','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 2
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','black','yellow','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 3
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','transparent','black','yellow','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 4
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','black','yellow','yellow','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 5
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','black','yellow','yellow','black','transparent','transparent','transparent','black','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',   
        // Ряд 6
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','transparent','black','black','transparent','transparent','transparent','black','black','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 7
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','black','white','white','black','transparent','black','black','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 8
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','black','red','red','black','black','red-dark','black','red-dark','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 9
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','black','white','white','black','red-dark','white','red-dark','red-dark','red-dark','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 10
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent', 'transparent','transparent','transparent', 'transparent','transparent','transparent','black','red','red','black','red-dark','red-dark','red-dark','red-dark','red-dark','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 11
        'transparent','transparent','transparent','transparent','transparent','transparent','transparent','black', 'black','black','black', 'black','black','black','black','white','white','black','black','red-dark','red-dark','red-dark','black','black','black','transparent','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 12
        'transparent','transparent','transparent','transparent','transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent','transparent','transparent','transparent','transparent',
        // Ряд 13
        'transparent','transparent','transparent','transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent','transparent','transparent','transparent',
        // Ряд 14
        'transparent','transparent','transparent','transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent','transparent','transparent','transparent',
        // Ряд 15
        'transparent','transparent','transparent','transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent','transparent','transparent','transparent',
        // Ряд 16
        'transparent','transparent','transparent','transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent','transparent','transparent','transparent',
        // Ряд 17
        'transparent','transparent','transparent','transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent','transparent','transparent','transparent',
        // Ряд 18
        'transparent','transparent','transparent','transparent','transparent','black','brown','pink','pink-dark','brown','brown','brown','brown','brown','pink-dark','pink','brown','brown','brown','pink','brown','brown','brown','brown','pink','brown','black','transparent','transparent','transparent','transparent','transparent',
        // Ряд 19
        'transparent','transparent','transparent','transparent','transparent','black','brown','pink','pink','brown','brown','pink-dark','pink','brown','pink','pink','brown','brown','pink','pink','pink-dark','brown','brown','pink','pink','brown','black','transparent','transparent','transparent','transparent','transparent',
        // Ряд 20
        'transparent','transparent','transparent','transparent','transparent','black','pink','pink-light','pink','brown','pink','pink','pink','pink','pink','pink-light','pink','pink-dark','pink','pink','pink','pink','pink','pink-light','pink','pink','black','transparent','transparent','transparent','transparent','transparent',
        // Ряд 21
        'transparent','transparent','transparent','transparent','transparent','black','pink','pink','pink','pink-dark','pink','pink-light','pink','pink-dark','pink','pink','pink','pink','pink','pink-light','pink','pink','pink-dark','pink','pink','pink','black','transparent','transparent','transparent','transparent','transparent',
        // Ряд 22
        'transparent','transparent','transparent','black','black','black','black','black', 'black','black','black', 'black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','transparent','transparent','transparent',
        // Ряд 23
        'transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent',
        // Ряд 24
        'transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent',
        // Ряд 25
        'transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent',
        // Ряд 26
        'transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent',
        // Ряд 27
        'transparent','transparent','black','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black','transparent','transparent',
        // Ряд 28
        'transparent','transparent','black','brown','brown','brown','brown','brown','brown','pink-dark','pink','pink','brown','brown','pink','pink','brown','brown','brown','brown','pink','brown','brown','pink','pink','brown','brown','brown','pink','black','transparent','transparent',
        // Ряд 29
        'transparent','transparent','black','brown','pink','pink','brown','brown','pink','pink','pink','pink','pink','pink','pink-dark','pink','pink','brown','brown','pink','pink','pink','pink','pink-dark','pink','brown','brown','brown','pink','black','transparent','transparent',
        // Ряд 30
        'transparent','transparent','black','pink','pink','pink','pink','pink','pink','pink','pink-light','pink','pink','pink','pink','pink','pink','brown','brown','pink','pink-light','pink','pink','pink','pink','brown','brown','pink','pink','black','transparent','transparent',
        // Ряд 31
        'transparent','transparent','black','pink','pink','pink-light','pink','pink','pink-dark','pink','pink','pink','pink','pink-light','pink','pink-dark','pink','pink','pink','pink','pink','pink','pink','pink-light','pink','pink-dark','pink','pink-dark','pink','black','transparent','transparent',
        // Ряд 32
        'transparent','transparent','black','pink','pink','pink','pink','pink','pink','pink','pink','pink-dark','pink','pink','pink','pink','pink','pink','pink-dark','pink','pink','pink-dark','pink','pink','pink','pink','pink','pink','pink','black','transparent','transparent',
        // Ряд 33
        'black','black','black','black','black','black','black','black', 'black','black','black', 'black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black',
        // Ряд 34
        'black','black','black','black','black','black','black','black', 'black','black','black', 'black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black',

    ];
    pixelCake.innerHTML = ''; // Очищаем перед созданием

    // Создание пикселей свечи
    pixels.forEach(color => {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');// добавляем базовый класс 'pixel'

    
        if (color !== 'transparent') {
            pixel.classList.add(color);
        } else {
            pixel.style.backgroundColor = 'transparent';
        }
        if (color === 'yellow') {
            pixel.classList.add('flame'); // Пламя анимированное
        }
        pixelCake.appendChild(pixel);
    });
}
