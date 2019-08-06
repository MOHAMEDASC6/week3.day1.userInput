

const inputTitle=
document.querySelector
("#title_input");

const mainTitle = document.querySelector("#main_title");

inputTitle.addEventListener('keyup', updateValue);

function updateValue(e) {
    mainTitle.innerText = 
    e.srcElement.value;
}


const storyReslut = document.querySelector("#story_result");
const submitButton = document.querySelector("#sumit_button");
const inputList = documents.querySelector("#input");


