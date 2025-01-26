import React from 'react';
import SidePanel from '../components/SidePanel';

function TeacherDashboard() {
    const teacherProps = {
        title: "TEACHER DASHBOARD",
        items: [
            { text: "Int. Examiner - Add Absentee Entry", icon: "fa-solid fa-pen-to-square", link: "#" },
            { text: "Int. Examiner - Marks Entry", icon: "fa-solid fa-pen-to-square", link: "#" },
            { text: "Int. Examiner - Edit Permission", icon: "fa-solid fa-pen-to-square", link: "#" },
            { text: "Ext. Examiner - Marks Entry", icon: "fa-solid fa-pen-to-square", link: "#" },
            { text: "Ext. Examiner - Edit Permission", icon: "fa-solid fa-pen-to-square", link: "#" },
            { text: "View Status", icon: "fa-solid fa-square-poll-vertical", link: "#" }
        ],
        content: "Welcome, teacher! Manage your tasks here."
    };

    return (
        <div>
            <SidePanel {...teacherProps} />
        </div>
    );
}

export default TeacherDashboard;