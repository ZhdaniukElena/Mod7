const alphabet = [
    {
      'row1': 'qwertyuiop[]'
    },
    {
      'row2': 'asdfghjkl;\''
    },
    {
      'row3': 'zxcvbnm,./'
    },
];

for(let key of alphabet) {
  console.log('key=', key)
};

function createKeyboard(arr) {
  return `
    <div class="keyboard">
      <div class="keyboard__row1">
      </div>
      <div class="keyboard__row2">
      </div>
      <div class="keyboard__row3">
      </div>
    </div>
  `
};

document.body.innerHTML = createKeyboard(alphabet);

for(let obj of alphabet) {
  for(let key in obj) {
    //let value = obj[key];
    console.log(obj[key]);
    let rows = document.querySelector(`.keyboard__${key}`);
    // console.log(row);
      for(let j of obj[key]) { 
        console.log(j);
        rows.insertAdjacentHTML('beforeend', `<div class="keyboard__${key}__btn">${j}</div>`);
    };
  };
};