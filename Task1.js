
// a form element
const form = document.createElement('form');
form.id = 'myForm';

// 10 input elements for numbers
for (let i = 1; i <= 10; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `num${i}`;
    input.placeholder = `Number ${i}`;
    form.appendChild(input);
    form.appendChild(document.createElement('br')); 
}

// submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
form.appendChild(submitButton);


const resultDiv = document.createElement('div');
resultDiv.id = 'result';


document.body.appendChild(form);
document.body.appendChild(resultDiv);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
        const num = document.getElementById(`num${i}`).value;
        if (num !== '') {
            numbers.push(parseFloat(num));
        }
    }
    const sum = numbers.reduce((a, b) => a + b, 0);
    resultDiv.innerText = `The sum is: ${sum}`;
});
