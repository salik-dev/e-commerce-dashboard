import React, { useState } from "react";

interface ProgressBarProps{
    barValue: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({barValue}) => {
    interface valueInterface {
        count: number;
    }
    const [value, setValue] = useState<valueInterface>({ count: barValue });

    console.log({barValue})

    return (
        <>
            <progress value={`${barValue}`} max={90} className="w-full h-1 fixed">32</progress>
        </>
    )
}

export default ProgressBar
