// GuideAllocation.jsx

import React, { useState } from 'react';
import StudentTable from './StudentTable'; // Adjust the path as per your project structure

const GuideAllocation = () => {
    const [showTable, setShowTable] = useState(false);

    const handleShowTable = () => {
        setShowTable(!showTable);
    };

    return (
        <div className="guide-allocation">
            <h1>Guide Allocation</h1>
            <p>Guide allocation details...</p>
            <button onClick={handleShowTable}>Show Students</button>

            {showTable && <StudentTable />} {/* Conditionally render StudentTable based on showTable state */}
        </div>
    );
}

export default GuideAllocation;
