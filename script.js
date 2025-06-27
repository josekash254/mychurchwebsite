const phrases =[
    "welcome to heaven forever church",
    "we are glad you are here",
    "join us for powerful worship",
    "experience God's presence"
];
let currentPhrase =0;
let currentLetter=0;
let isDeleting = false;

function type() {
    const textElement =
document.getElementById("typing-text");const fullText = phrases[currentPhrase];

    if (isDeleting) {currentLetter--;}
    else{currentLetter++;}

    textElement.innerText =fullText.substring(0, currentLetter);

    if(!isDeleting && currentLetter === fullText.length) {
        isDeleting = true;
        setTimeout(type, 1500);
    }else if (isDeleting && currentLetter ===0){
        isDeleting = false;
        currentPhrase = (currentPhrase+ 1)% phrases.length;
        setTimeout(type,500);}
        else{
        setTimeout(type, isDeleting ? 50 :100);
        }
}

type();
