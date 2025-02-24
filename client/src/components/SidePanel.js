import React from 'react';
import { Link } from 'react-router-dom';

function SidePanel(props) {
    const user = JSON.parse(localStorage.getItem("User Data"));

    const handleLogout = () => {
        alert('Are you sure you want to logout?');
        localStorage.removeItem("User Data");
        window.location.href = '/login';
    };
    

    return (
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <div className="sidebar bg-black text-white w-64 min-h-screen flex flex-col py-6 px-4 shadow-lg">
          <div className="logo text-2xl font-bold mb-2 ms-2">CampusERP</div>
          <div
            to="#"
            className="flex items-center space-x-3 text-red-400 font-bold mb-6"
          >
            <i className="fa-solid fa-house"></i>
            <span>{user.name}</span>
          </div>
          <nav className="menu flex flex-col space-y-6">
            {props.items.map((item, index) => (
              <button
                key={index}
                // to={item.link}
                className="flex items-center space-x-3 hover:text-gray-400"
                onClick={
                  item.callbackfunc
                    ? item.callbackfunc
                    : item.link
                    ? () => (window.location.href = item.link)
                    : undefined
                }
              >
                <i className={item.icon}></i>
                <span>{item.text}</span>
              </button>
            ))}
            <Link
              to="#"
              onClick={handleLogout}
              className="flex items-center space-x-3 hover:text-gray-400"
            >
              <i className="fa fa-sign-out"></i>
              <span>LOGOUT</span>
            </Link>
          </nav>
        </div>

        {/* Content */}
        {/* <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold text-gray-700">Welcome to the {props.title}</h1>
                <p className="mt-4 text-gray-600">{props.content}</p>
            </div> */}
      </div>
    );
}

export default SidePanel;