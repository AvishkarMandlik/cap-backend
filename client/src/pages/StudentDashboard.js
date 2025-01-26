import React from 'react';
import SidePanel from '../components/SidePanel';

function StudentDashboard() {
    const studentProps = {
        title: "STUDENT DASBOARD",
        items: [
            { text: "Admission Form", icon: "fa fa-address-book", link: "#" },
            { text: "Courses", icon: "fa-solid fa-square-check", link: "#" },
            { text: "Revaluation", icon: "fa-solid fa-repeat", link: "#" },
            { text: "Results", icon: "fa fa-file-text", link: "#" }
        ],
        content: "Welcome, student! Here you can access your information."
    };

    return (
        <div>
            <SidePanel {...studentProps} />
        </div>
    );
}

export default StudentDashboard;