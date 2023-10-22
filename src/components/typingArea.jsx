import { useEffect, useState} from "react";
import axios from "axios";

export default function TypingArea() {

    const RED = "#EB4545";
    const GRAY = "rgb(107,114,128)";

    const [wordsDisplay, setWordsDisplay] = useState("");
    const [focused, setFocused] = useState(true);
    const [wordsTyped, setWordsTyped] = useState("");

    function getDist(x, y) {
        try {
            const distX = y.offsetLeft - x.offsetLeft;
            const distY = y.offsetTop - x.offsetTop;
            return {x: distX, y: distY};
        } catch(e) {
            return {x: 0, y: 0};
        }
    }

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
            const currentTypeIndex = wordsTyped.length-1;
            const caret = document.getElementById("caret");
            const distance = getDist(caret, elements[currentTypeIndex + 1]);
            caret.style.transform = `translate(${distance.x - 2}px, ${distance.y +  3}px)`;

            for (let i=0; i<wordsTyped.length; i++) {
                if (wordsTyped[i] !== elements[i].innerText) {
                    elements[i].style.color = RED;
                } else if (wordsTyped[i] === elements[i].innerText) {
                    elements[i].style.color = "white";
                }
            }

            // REVERTS THE WORDS BACK WHEN BACKTYPED ?
            for (let i=0; i<wordsDisplay.length; i++) {

                if (wordsTyped.length < i + 1) {
                    elements[i].style.color = GRAY;
                }
            }

        } catch (err) {
            console.log(err);
        }

        // Reload the words when reached at the end.
        if (wordsTyped.length === wordsDisplay.length) {
            HandleReload(null);
        }
        
    }, [wordsTyped]);

    function ChangeFocus(state) {
        setFocused(state)
        //console.log(focused);
    }

    function HandleReload(e) {
        document.getElementById("typeBox").value = "";
        setWordsTyped("");
        document.getElementById("typeBox").focus();
        axios.get("https://random-word-api.herokuapp.com/word?number=20")
        .then(res => {
            setWordsDisplay(res.data.join(" "));
        }).catch(err => {
            console.log(err);
        });
    }
    
    return (
        <div className="w-3/4 flex flex-col items-center transition-all m-10">
            <div id="wordBox" className="text-2xl p-10 relative" onClick={() => {ChangeFocus(true); document.getElementById("typeBox").focus()}}>
                <div id="caret" className={"absolute h-7 w-[3px] rounded-xl bg-pink-500 transition-all top-11 left-9 contrast-150"} ></div>
                {
                    wordsDisplay.split("").map((char, index) => {
                        return <span key={index} className={'text-gray-500'}>{char}</span>
                    })
                }
            </div>
            <input id="typeBox" className="opacity-0 h-0" type="text" autoFocus onKeyUp={e => {setWordsTyped(e.target.value)}}/>
            <button className="text-3xl text-gray-500 hover:text-[#F5F5F5] duration-200 w-1/12" onClick={(e) => {HandleReload(e)}}>&#8634;</button>
        </div>
    );
}