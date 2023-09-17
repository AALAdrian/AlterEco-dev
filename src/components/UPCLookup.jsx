// src/UPCLookup.js

import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

function UPCLookup({ upcCode }) {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.upcitemdb.com/prod/trial/lookup?upc=${upcCode}`
                );

                if (response.status !== 200) {
                    throw new Error(
                        `Error fetching data: ${response.statusText}`
                    );
                }

                const data = response.data;

                if (data.items && data.items.length > 0) {
                    const item = data.items[0];
                    setResult([item.title, item.category]);
                } else {
                    setError("No data found for the given UPC code.");
                }
            } catch (error) {
                setError(`An error occurred: ${error.message}`);
            }
        };

        if (upcCode) {
            fetchData();
        }

        console.log("UPCLookup Component - upcCode:", upcCode);
    }, [upcCode]);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {result.length > 0 && (
                <div>
                    <h2>Title: {result[0]}</h2>
                    <p>Category: {result[1]}</p>
                </div>
            )}
        </div>
    );
}

export default UPCLookup;
