// // Iteration 1
let hacker1 = "Bary"
let hacker2 = "Bary"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3
// 3.1
let newDriver = ""
for (let i = 0; i < hacker1.length; i++) {
  newDriver += hacker1[i].toUpperCase() + " ";
}
console.log(newDriver);
// 3.2
let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);
// 3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}


// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis massa eget purus posuere facilisis. In ac viverra nisl. Vestibulum elementum orci non ante molestie, non pellentesque lacus scelerisque. Sed libero mauris, condimentum scelerisque lacinia eu, porttitor et mauris. Fusce purus ligula, fringilla in nisl et, consequat mattis tortor. Nullam pellentesque pulvinar purus in ultricies. Proin vitae tempor ligula. Mauris orci ante, imperdiet sed mauris eu, egestas ullamcorper arcu. Proin venenatis tempor interdum. Vivamus nec tincidunt turpis. Nunc bibendum lectus ut nisl tempus, non maximus eros rhoncus. Vestibulum placerat sem enim, sed hendrerit tortor ornare vitae. Maecenas vel leo hendrerit, imperdiet est ut, tempus nisl. Mauris interdum velit et ante accumsan, eget molestie tellus lobortis. Mauris nunc lorem, interdum ut pretium eget, vehicula at ante. Cras vehicula fermentum dui, ac scelerisque erat vestibulum in. Quisque non congue augue, ut vestibulum lacus. Nunc sed libero et est efficitur dignissim nec vel nunc.Nulla viverra sollicitudin arcu, vitae commodo nisi sagittis at. Suspendisse sed enim mattis, vulputate eros sed, egestas eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ipsum massa, blandit a urna nec, mollis tincidunt dui. Vivamus malesuada venenatis mollis. Fusce dictum rutrum lacinia. Aenean efficitur lectus at porta molestie. Vestibulum aliquam felis et nibh convallis condimentum. Curabitur condimentum, nisl a aliquet vestibulum, felis dolor tincidunt urna, et facilisis nibh justo vitae tellus. Duis vel mattis leo. Morbi tempus massa sed nunc euismod pellentesque. Proin fermentum elementum ante ac dapibus. Pellentesque vulputate aliquet nisl, et ultricies nibh dapibus eget."

let words = longText.split(" ")
console.log(words.length)

let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText.slice(i, i + 2) === 'et') {
    etCount++;
  }
}
console.log(etCount);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let reversedStr = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reversedStr += phraseToCheck[i];
}
if (reversedStr.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === phraseToCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()) {
  console.log("It's a palindrome.");
} else console.log(`No, it's not a palindrome`)


