// Loading.js
import React from 'react';
import { CircularProgress } from "@nextui-org/react";

function Loading() {
    return (
        <div className="loading-overlay">
            <CircularProgress aria-label="Loading..." />
        </div>
    );
}

export default Loading;
``