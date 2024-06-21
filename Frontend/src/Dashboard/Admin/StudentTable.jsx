import React from 'react';

const StudentTable = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <section className="container px-4 mx-auto">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Customers</h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                These companies have purchased in the last 12 months.
            </p>

            <div className="flex flex-col mt-6">
                {/* Paste your existing table code here */}
            </div>
        </section>
    );
};

export default StudentTable;