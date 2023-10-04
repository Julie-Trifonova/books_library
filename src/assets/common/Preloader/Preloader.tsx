import React from "react";

import preloaderImg from "../images/loading-circle.gif";

export const Preloader: React.FC = () => {
    return (
        <div>
            <img src={preloaderImg} alt="" />
        </div>
    );
};