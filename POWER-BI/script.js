const textarea = document.querySelector("textarea");
voiceList = document.querySelector("select"),
speechBtn =document.querySelector("button");

let synth = speechSynthesis;

function voices (){
for (let voice of synth.getVoices ()) {
    console.log(voice);
    let selected = voice.name === "Microsoft Raul-Spanish (Mexico) (es-MX)" ? "selected" : "";
    let option =`<option value="${voice.name}"${selected}>${voice.name} (${voice.lang})</option>`;
    voiceList.insertAdjacentHTML("beforeend",option);
}
}
synth.addEventListener("voiceschanged",voices);
function textToSpeech(text) {
    let utternace = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices ()) { 
        if(voice.name === voiceList.value){
            utternace.voice = voice;
        }
    }
    speechSynthesis.speak(utternace);

}

speechBtn.addEventListener ("click",e => {
    e.preventDefault();
    if(textarea.value !== ""){
        textToSpeech(textarea.value);
    }
});