import "./App.css";
import MicIcon from "@mui/icons-material/Mic";
import { useState, useEffect } from "react";

let speech;
if (window.webkitSpeechRecognition) {
  // eslint-disable-next-line
  const SpeechRecognition = webkitSpeechRecognition;
  speech = new SpeechRecognition();
  speech.continuous = true;
} else {
  speech = null;
}

function App() {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  
  const listen = () => {
    setIsListening(!isListening);
    if (isListening) {
      speech.stop();
    } else {
      speech.start();
    }
  };

  useEffect(() => {
    speech.onresult = (event) => {
      setText(event.results[event.results.length - 1][0].transcript);
    };
  }, []);

  return (
    <div className="App">
      <div class="w-screen h-screen flex justify-center align-middle">
        <MicIcon class="mx-auto my-auto w-[75px] h-[75px] p-2 bg-[#dddddd] rounded-[50%]" />
      </div>
    </div>
  );
}

export default App;
