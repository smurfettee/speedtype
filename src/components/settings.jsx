import { useEffect, useState } from "react";

export default function Settings() {

    const [punctuation, setPunctuation] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [middleSetting, setMiddleSetting] = useState("time");
    const [rightSetting, setRightSetting] = useState([15, 30, 60, 120]);
    const [rightSubSetting, SetRightSubSetting] = useState(rightSetting[0]);

    useEffect(() => {
        SetRightSubSetting(rightSetting[0]);
    }, [rightSetting]);

    return (
        <div className="w-min flex items-center">
            <div className={`flex items-center justify-center gap-2 m-10 text-gray-400 bg-gray-600 p-2 rounded-lg transition-all duration-200 ${middleSetting == "quote" ? "w-[38rem]" : "w-[30rem]"}`}>
                <div className="flex items-center justify-center gap-2">
                    <div onClick={(e) => {e.preventDefault(); setPunctuation(!punctuation);}} className={`${(punctuation && "text-pink-600 ") || "hover:text-gray-200"} cursor-pointer  duration-200 whitespace-nowrap`}>@ punctuation</div>
                    <div onClick={(e) => {e.preventDefault(); setNumbers(!numbers);}} className={`${(numbers && "text-pink-600 ") || "hover:text-gray-200"} cursor-pointer  duration-200 whitespace-nowrap`}># numbers</div>
                </div>
                <div className="w-1 h-6 bg-gray-500 rounded-xl"> </div>
                <div className="flex items-center justify-center gap-2">
                    <div onClick={(e) => {e.preventDefault(); setMiddleSetting("time"); setRightSetting([15, 30, 60, 120]); }} className={`${(middleSetting == "time" && "text-pink-600 ") || "hover:text-gray-200"} cursor-pointer  duration-200`}>time</div>
                    <div onClick={(e) => {e.preventDefault(); setMiddleSetting("words"); setRightSetting([10, 25, 50, 100]); }} className={`${(middleSetting == "words" && "text-pink-600 ") || "hover:text-gray-200"} cursor-pointer  duration-200`}>words</div>
                    <div onClick={(e) => {e.preventDefault(); setMiddleSetting("quote"); setRightSetting(["short", "medium", "long", "longlong"]); }} className={`${(middleSetting == "quote" && "text-pink-600 ") || "hover:text-gray-200"} cursor-pointer  duration-200`}>quote</div>
                </div>
                <div className="w-1 h-6 bg-gray-500 rounded-xl"> </div>
                <div className="flex items-center justify-center gap-2 duration-200">
                    {
                        middleSetting == "time" && rightSetting.map(setting => (
                            <div onClick={(e) => {e.preventDefault(); SetRightSubSetting(setting)}} className={`${(rightSubSetting == setting && "text-pink-600 ") || "hover:text-gray-200"} cursor-pointer duration-200`}>{setting}</div>
                        ))
                    }
                    {
                        middleSetting == "words" && rightSetting.map(setting => (
                            <div onClick={(e) => {e.preventDefault(); SetRightSubSetting(setting)}} className={`${(rightSubSetting == setting && "text-pink-600 ") || "hover:text-gray-200"} cursor-pointer duration-200`}>{setting}</div>
                        ))
                    }
                    {
                        middleSetting == "quote" && rightSetting.map(setting => (
                            <div onClick={(e) => {e.preventDefault(); SetRightSubSetting(setting)}} className={`${(rightSubSetting == setting && "text-pink-600 ") || "hover:text-gray-200"} cursor-pointer duration-200`}>{setting}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}