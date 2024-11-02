let counter = 0;

const buttonAdd = document.getElementById('button1');
buttonAdd.addEventListener('click', () => {
    add();
});
const buttonSave = document.getElementById('button2');
buttonSave.addEventListener('click', () => {
    Save();
});
function start() {
    document.getElementById("up-0").addEventListener('click', () => Up("row-0"));
  
    document.getElementById("down-0").addEventListener('click', () => Down("row-0"));
  
    document.getElementById("delete-0").addEventListener('click', () => del("row-0"));
}
start()
function add() {
  counter++;
  const newDiv = create("div", 'row-' + counter, 'row');

  const newInput1 = create("input", '1-' + counter);
  newDiv.appendChild(newInput1);

  const newInput2 = create("input", '2-' + counter);
  newDiv.appendChild(newInput2);

  const newButtonUp = create("button", 'up-' + counter, 'button', "&#8593;");
  newButtonUp.addEventListener('click', () => Up(newDiv.id));
  newDiv.appendChild(newButtonUp);

  const newButtonDown = create("button", 'down-' + counter, 'button', "&#8595;");
  newButtonDown.addEventListener('click', () => Down(newDiv.id));
  newDiv.appendChild(newButtonDown);

  const newButtonDel = create("button", 'delete-' + counter, 'button', "x");
  newButtonDel.addEventListener('click', () => del(newDiv.id));
  newDiv.appendChild(newButtonDel);

  const parent = document.getElementsByClassName('center')[0];
  parent.appendChild(newDiv);
}
function create(tag, id, className, innerHTML) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
  }
function Save() {
    const rows = document.querySelectorAll('.row');
    const result = [];
  
    rows.forEach(row => {
      const col1Value = row.querySelector('input[id^="1-"]').value || '';
      const col2Value = row.querySelector('input[id^="2-"]').value || '';
  
      result.push(`"${col1Value}":"${col2Value}"`);
    });
  
    const resultText = `{${result.join(",")}}`;
  
    document.getElementById('text').innerText = resultText;
}
  
function Up(id) {
  const element = document.getElementById(id);
  const previous= element.previousElementSibling;

  if (previous) {
    element.parentNode.insertBefore(element, previous);
  }
}
function Down(id) {
  const element = document.getElementById(id);
  const next = element.nextElementSibling;

  if (next) {
    element.parentNode.insertBefore(next, element);
  }
}
function del(id) {
    element = document.getElementById(id);
    element.remove();
  }