// src/components/BottomSheet.js

import React from "react";
import "./BottomSheet.css";
import ResultContainerPlugin from "../ResultContainerPlugin";
import UPCLookup from "./UPCLookup";

function BottomSheet({ isOpen, onClose, decodedResults }) {
    return (
        <div className={`bottom-sheet ${isOpen ? "open" : ""}`}>
            <div className="bottom-sheet-content">
                <div className="result">
                    <ResultContainerPlugin results={decodedResults} />
                    <UPCLookup upcCode={decodedResults} />
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default BottomSheet;
