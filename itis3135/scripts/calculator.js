//tutorial from freecodecamp https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/
//typed out by Madison Miller

//Part 1 - Listening to key presses
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        //Do something - not sure what to put here
    }
})

const key = e.target;
const action = key.dataset.action;

if (!action) {
    console.log('number key!');
}

if (action == 'add' || 
    action === 'subtract' || 
    action ==='multuply' || 
    action === 'divide') 
    {
    console.log('operator key!');
} 

if(action === 'decimal') {
    console.log('decimal key!');
}

if (action === 'clear') {
    console.log('clear key!');
}

if (action === 'calculate') {
    console.log('equal key!');
}

//Part 2 - When a user hits a number key
const display = document.querySelector('.calculator_display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = displayed.textContent;
    }
})

if (!action) {
    if (displayedNum === '0') {
        display.textContent = keyContent;
    } else {
        display.textContent = displayedNum + keyContent;
    }
}

//Part 3 - When a user hits the decimal key
if (action === 'decimal') {
    display.textContent = displayedNum + '.';
}

//Part 4 - When a user hits an operator key
if (action == 'add' || 
    action === 'subtract' || 
    action ==='multuply' || 
    action === 'divide'
) {
    key.classList.add('is-depressed');
} 

//Part 5 - When a user hits a number key after an operator key
key.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
    }
})
