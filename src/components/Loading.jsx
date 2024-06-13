// Loading.js
import React from 'react';
import { CircularProgress } from "@nextui-org/react";

function Loading({...props}) {
    return (
        <div className="w-100 h-100 flex justify-center items-center">
            <CircularProgress {...props} aria-label="Loading..." />
        </div>
    );
}

export default Loading;
``