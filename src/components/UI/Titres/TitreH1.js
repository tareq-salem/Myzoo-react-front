import React from "react";

const titreH1 = (props) => {
    let backgroundColor = props.bgColor ? props.bgColor : "bg-primary";
    let myCss = `border border-dark p-2 text-white text-center ${backgroundColor}`;
    return <h1 className={myCss}>{props.children}</h1>
};

export default titreH1;