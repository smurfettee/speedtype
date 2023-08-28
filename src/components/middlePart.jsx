import Settings from "./settings";
import TypingArea from "./typingArea";

export default function MiddlePart() {
    return (
        <div className="flex items-center justify-center flex-col">
            <Settings/>
            <TypingArea/>
        </div>
    );
}