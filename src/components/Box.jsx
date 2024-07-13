import React from "react";

const Box = (props) => {
    return (
        <div className="h-[100px] w-[100px] bg-blue-500 flex justify-center items-center border">
            <p>{props.nama} : {props.order}</p>
        </div>
    );
}

export default Box;