
const myText = "My Name is Timmy and I am a good boy";

let index = 0;

function writeText() {
    document.body.innerText = myText.slice(0, index);

    index++;

    if (index>myText.length) {
        index = 0;
    }
}

setInterval(writeText, 200);
