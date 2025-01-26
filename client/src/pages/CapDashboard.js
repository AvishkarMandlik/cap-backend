import React from 'react';
import SidePanel from '../components/SidePanel';

function CapDashboard() {
    const capProps = {
        title: "CAP DASHBOARD",
        items: [
            { text: "DASHBOARD", icon: "fa-solid fa-house", link: "#" },
            { text: "COURSES", icon: "fa-solid fa-square-check", link: "#" },
            { text: "MARKSHEET", icon: "fa-regular fa-file-lines", link: "#" },
            { text: "ATKT/FAIL/PASS", icon: "fa-solid fa-f", link: "#" },
            { text: "REVALUATION", icon: "fa-solid fa-repeat", link: "#" },
            { text: "ANALYSIS", icon: "fa-solid fa-square-poll-vertical", link: "#" }
        ],
        bodyContent: (
            <div className="NewStream mt-6">
                <input type="text" name="stream" id="stream" className="border p-2 mr-2" placeholder="Enter Stream" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => alert('Stream added!')}>
                    Add
                </button>
            </div>
        )
    };

    return (
        <div>
            <SidePanel {...capProps} />
        </div>
    );
}

export default CapDashboard;