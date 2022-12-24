import React from "react"
import clsx from "classnames"


const TextRadioInput = ({ checked, text, onClick }) => {
    return (
        <div className="flex space-x-2 mb-8  cursor-pointer" onClick={onClick}>
            <div className="h-[31px] w-[31px] rounded-[15.5px] border-[2px] border-lightgrey flex items-center justify-center flex-shrink-none">
                <div className={clsx("h-[13.29px] w-[13.29px] rounded-[6.645px] rounded-1/2 bg-white duration-150", { "bg-lightgrey": checked })}></div>
            </div>
            <p className="max-w-[292px] font-sans400 text-black text-[18px] leading-[21.83px]">{text}</p>
        </div>
    )
}

export default TextRadioInput