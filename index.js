const body = document.body;
const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

letters.forEach((letter) => {
  const boxes = document.createElement('div');
  boxes.classList.add('box');
  const content = document.createElement('div');
  content.classList.add('content');
  boxes.appendChild(content);
  content.innerText = letter;
  body.appendChild(boxes);
  window.addEventListener('scroll', checkBoxes);

  checkBoxes();
  function checkBoxes() {
    const trigger = (window.innerHeight / 5) * 4;
    const boxTop = boxes.getBoundingClientRect().top;
    if (boxTop < trigger) {
      boxes.classList.add('show');
    } else {
      boxes.classList.remove('show');
    }
  }
  boxes.addEventListener('click', (event) => {
    if (event.target.classList.contains('show')) {
      event.target.classList.remove('show');
    }
  });
});
