let count = 0

while(count < 10) {
    count++;
    console.log(count)
}

const secret = 'man';

let guess = prompt("Enter the secret code...")

while(guess !== secret) {
    guess = prompt("Enter the secret code...")
}