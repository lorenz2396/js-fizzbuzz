const fizzBuzzContainer = document.getElementById('fizzbuzz-container');

for (let i = 1; i <= 100; i++) {

    let content = i;

    const newDiv = document.createElement('div');
    newDiv.classList.add('square');

    if (i % 5 == 0 && i % 3 == 0) {
        console.log('FizzBuzz', i);
        content = 'FizzBuzz'
        newDiv.classList.add('FizzBuzz')
    }
    else if (i % 3 == 0) {
        console.log('Fizz', i);
        content = 'Fizz'
        newDiv.classList.add('fizz')
    }
    
    else if (i % 5 == 0) {
        console.log('Buzz', i);
        content = 'Buzz'
        newDiv.classList.add('buzz')
    }
    else {
        console.log(content);
    }


    newDiv.append(content);
    fizzBuzzContainer.append(newDiv);
    
}