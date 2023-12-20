import React from "react";
import preview from "./preview.svg";
const Loader = () => {
    return (
        <div className="loader">
            <img src = {preview} alt="loader"/>
        </div>
    );
}

export default Loader;