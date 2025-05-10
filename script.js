const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generatePassword() {
    let numbers = '';
    for (let i = 0; i < 4; i++) {
        numbers += Math.floor(Math.random() * 10);
    }    
    let lettersPart = '';
    for (let i = 0; i < 7; i++) {
        lettersPart += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    let password = numbers + symbol + lettersPart;
    document.getElementById('password').textContent = password;
}
function copyPassword() {
    const password = document.getElementById('password').textContent;
    if (password === "Click \"Generate\" for a password") {
        alert("Please generate a password first!");
        return;
    }
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }, (err) => {
        alert("Failed to copy password: " + err);
    });
}
