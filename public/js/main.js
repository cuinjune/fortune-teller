// message
const message = document.getElementById("message");

// speech synthesis
const synth = window.speechSynthesis;

// speech recognition
const SpeechRecognition = webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

recognition.onresult = async (event) => {
    const speechResult = event.results[0][0].transcript;
    console.log("You said:", speechResult);
    // message.textContent = speechResult;
    const result = await postTextData(speechResult);
    console.log(result);
    message.textContent = result;
    const utterThis = new SpeechSynthesisUtterance(result);
    utterThis.lang = "en-US";
    synth.speak(utterThis);
    function wait() {
        if (!synth.speaking) {
            // do something after speaking is done
            recognition.start();
            return;
        }
        setTimeout(wait, 100);
    }
    wait();
}

recognition.onend = () => {
    // console.log("The speech recognition has ended. Restarting...");
}

async function postTextData(text) {
    const url = "/api/v1/text";
    const options = { method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ text: text }) };
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
}

window.onload = async () => {
    message.textContent = "Click to start";
    document.addEventListener("click", function () {
        recognition.start();
        message.textContent = "Say hello";
    });

}