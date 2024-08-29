import React, { useState } from "react";

interface ProgressBarProps{
    barValue: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({barValue}) => {
    interface valueInterface {
        count: number;
    }
    const [value, setValue] = useState<valueInterface>({ count: barValue });

    return (
        <>
            <progress value={`${barValue}`} max={90} className="w-full h-1 fixed">32</progress>
            <div className="p-5 flex justify-center ">
                <button className="btn-styles " onClick={() => value.count > 0 && setValue({ ...value, count: barValue - 10 })}>decrement</button>
                <button className="btn-styles " onClick={() => setValue({ ...value, count: 0 })}>reset</button>
                <button className="btn-styles " onClick={()=>setValue({...value, count: barValue + 10})}>increment</button>
            </div>

        </>
    )
}

export default ProgressBar
