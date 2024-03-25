import React from 'react';

function Success() {
    return (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Message sent successfully!</strong>
            <span className="block sm:inline">We'll get back to you soon.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1 1 0 01-1.414 1.414l-3.535-3.536-3.536 3.536a1 1 0 01-1.414-1.414l3.536-3.536-3.536-3.535a1 1 0 011.414-1.414l3.536 3.536 3.535-3.536a1 1 0 011.414 1.414l-3.536 3.536 3.536 3.535z" />
                </svg>
            </span>
        </div>
    );
}

export default Success;
