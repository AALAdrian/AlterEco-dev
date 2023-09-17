// @ts-check

import React, { useEffect, useState } from 'react';
import './App.css';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
// import ResultContainerPlugin from './ResultContainerPlugin.jsx';
import BottomSheet from './components/BottomSheet';

const App = (props) => {
    const [decodedResults, setDecodedResults] = useState([]);

    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        setDecodedResults(prev => [...prev, decodedResult]);
    };
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const openBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    const closeBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };

    useEffect(() => {
        openBottomSheet();
    }, [decodedResults]);

    return (
        <div className="App">
            <section className="App-section">
                <div className="App-section-title"> ALTER ECO</div>
                <br />
                <br />
                <br />
                <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                {/* <ResultContainerPlugin results={decodedResults} /> */}
                <div>
                    <button onClick={openBottomSheet}>Open Bottom Sheet</button>
                    <BottomSheet
                        isOpen={isBottomSheetOpen}
                        onClose={closeBottomSheet}
                        decodedResults={decodedResults.map((result) => ({
                            decodedText: result.decodedText,
                        }))}
                    />
                </div>
            </section>
        </div>
    );
};

export default App;
