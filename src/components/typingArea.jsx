import { useEffect, useState} from "react";
import axios from "axios";

export default function TypingArea() {

    const [wordsDisplay, setWordsDisplay] = useState("");
    const [focused, setFocused] = useState(true);
    const [wordsTyped, setWordsTyped] = useState("");
    const [charMap, setCharMap] = useState([]);

    useEffect(() => {
        axios.get("https://random-word-api.herokuapp.com/word?number=20")
        .then(res => {
            setWordsDisplay(res.data.join(" "));
        }).catch(err => {
            console.log(err);
        })
        
    }, []);

    useEffect(() => {
        try {
            const elements = document.getElementById("wordBox").getElementsByTagName("span");
            const currentTypeIndex = wordsTyped.length;

            for (let i=0; i<wordsTyped.length; i++) {
                elements[i].style.caretColor = "red";
                if (wordsTyped[i] != elements[i].innerText) {
                    elements[i].style.color = "#EB4545";
                } else if (wordsTyped[i] == elements[i].innerText) {
                    elements[i].style.color = "#F5F5F5";
                }
            }
            for (let i=0; i<wordsDisplay.length; i++) {
                //console.log(currentTypeIndex, elements[i].key);
                if (wordsTyped.length < i + 1) {
                    elements[i].style.color = "rgb(107,114,128)";
                }
                if (i == currentTypeIndex) {
                    elements[i].style.textDecoration = "underline";
                    elements[i].style.textDecorationColor = "#db2777";
                } else {
                    elements[i].style.textDecoration = "none";
                }
            }
        } catch (err) {
            console.log(err);
        }
        
    }, [wordsTyped]);

    function ChangeFocus(state) {
        setFocused(state)
        console.log(focused);
    }

    function HandleReload(e) {
        setWordsTyped("");
        axios.get("https://random-word-api.herokuapp.com/word?number=20")
        .then(res => {
            setWordsDisplay(res.data.join(" "));
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="w-3/4 flex flex-col items-center transition-all m-10">
            <div id="wordBox" className="p-10 text-2xl" onClick={() => {ChangeFocus(true); document.getElementById("typeBox").focus()}}>
                {
                   wordsDisplay.split("").map((char, index) => {
                    return <span key={index} className={'text-gray-500 animation-[blinker 1s linear infinite;]'}>{char}</span>
                   })
                }
            </div>
            <input id="typeBox" className="opacity-0 h-0" type="text" autoFocus onKeyUp={e => {setWordsTyped(e.target.value)}}/>
            <button className="text-3xl text-gray-500 hover:text-[#F5F5F5] duration-200 w-1/12" onClick={(e) => {HandleReload(e)}}>&#8634;</button>
        </div>
    );
}