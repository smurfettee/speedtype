import keyboard from "../icons/icon1";
import crown from "../icons/icon2";
import info from "../icons/icon3";
import user from "../icons/icon4";
import bolt from "../icons/icon5";

export default function Navbar() {
    return (
        <div className="flex w-full">
            <div className="flex w-1/2 items-center justify-end gap-10 [&>div]:cursor-pointer p-10 [&>div]:text-gray-500">
                <span className="text-4xl text-pink-600 relative left-6">{bolt}</span>
                <div className="text-4xl relative bottom-1 font-bold" style={{color: "white"}}>Speedtype</div>
                <div className="text-2xl hover:text-gray-400 duration-200">{keyboard}</div>
                <div className="text-2xl hover:text-gray-400 duration-200">{crown}</div>
                <div className="text-2xl hover:text-gray-400 duration-200">{info}</div>
            </div>
            <div className="flex w-1/2 items-center justify-center [&>div]:cursor-pointer p-10 ">
                <div className="text-2xl hover:text-gray-400 text-gray-500 duration-200">{user}</div>
            </div>
        </div>
    );
}