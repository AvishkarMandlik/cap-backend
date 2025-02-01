import React from 'react';
import html2pdf from 'html2pdf.js';
import './HallTicket.css'; // Import the CSS file

const HallTicket = () => {
  const printHallTicket = () => {
    const ticket = document.querySelector("main");
    const wrapper = document.querySelector(".ticketWrapper");
    wrapper.style.backgroundRepeat = "space";
    var opt = {
      margin: [0.5, 0, 0.5, 0],
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        scrollX: 0,
        scrollY: 0,
        windowWidth: ticket.scrollWidth,
        windowHeight: ticket.scrollHeight,
        useCORS: true
      },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(ticket).set(opt).save();
  };

  return (
    <main>
      <div className="ticket">
        <h2>Savitribai Phule Pune University</h2>
        <div className="imageWrapper">
          <img
            id="uniLogo"
            src="https://lh5.googleusercontent.com/proxy/2XmjkO4DuiXNQL6P2vkYbaE-ofwLdeeulVZMT09pYM-yj03BFesJ95cq6SkbO8HLvvRvNOs07HflKByZSR6EhnAETA2fXf2puNwhFVcFZwS7AdFqnO0ZNOTYI98y8Sc_Oyk_2wVMjX-5WkQuk_JI7iY8"
            alt="SPPU LOGO"
          />
        </div>
        <h4>HallTicket For M.Sc. Computer Science (2023 Pattern) (NEP 2020) MAR/APR 2024</h4>
        <hr />
        <div className="details">
          <div className="left-column">
            <table>
              <tr>
                <td><strong>Seat No</strong></td>
                <td><strong>PRN</strong></td>
                <td><strong>Centre Code</strong></td>
                <td><strong>College Code</strong></td>
                <td><strong>PUN Code</strong></td>
              </tr>
              <tr>
                <td><strong>2678</strong></td>
                <td><strong>2162301707</strong></td>
                <td><strong>CAAP014230</strong></td>
                <td><strong>0244</strong></td>
                <td><strong>CAAP014230</strong></td>
              </tr>
            </table>

            <p><strong>Name:</strong> SHINDE PRASHANT MACCHINDRA</p>
            <p><strong>Mother:</strong> SUNANDA</p>
            <p><strong>College:</strong> DR D.Y. PATIL ARTS, COMMERCE AND SCIENCE COLLEGE</p>
          </div>
          <div className="right-column">
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
              alt="Profile Photo"
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Sub Code</th>
              <th>Subject Name</th>
              <th>Type</th>
              <th>Exam Date</th>
              <th>Exam Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>33291</td>
              <td>INTRODUCTION TO CYBER SECURITY - I</td>
              <td>[G]</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>33291</td>
              <td>HUMAN RIGHTS - II</td>
              <td>[G]</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>CS-551-MJ</td>
              <td>Design and Analysis of Algorithms</td>
              <td>[IE]</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>CS-552-MJ</td>
              <td>Mobile App Development Technologies</td>
              <td>[IE]</td>
              <td></td>
              <td></td>
            </tr>
            {/* Add remaining subjects similarly */}
          </tbody>
        </table>

        <div className="note">
          <p><strong>NOTE:</strong> <br />Students should ensure that details like Name, Photo, PRN, Subjects
            printed on
            Hall Ticket are correct. In case of any discrepancy, please immediately contact the College Exam
            Officer
            (CEO).</p>
          <p>In case the College does not have an Exam Center, please follow the University Circular.</p>
          <p>In case of any discrepancy between the hall ticket and the timetable published on the university
            website
            (http://exam.unipune.ac.in), the timetable on the website is to be followed.</p>
        </div>
        <br /><br />
        <div className="signature">
          <div className="left">
            <img src="data:image/png;base64," alt="" />
            <br />
            <span>Signature of Student:</span>
          </div>
          <div className="right">
            <span><strong>College Principal / Director</strong> </span><br />
            <br />
            <span>DR D.Y. PATIL ARTS, COMMERCE & SCIENCE COLLEGE</span>
          </div>
        </div>
      </div>
      <div className="ticketWrapper"></div>
      <div className="btncontainer">
        <button onClick={printHallTicket}>Print HallTicket</button>
      </div>
    </main>
  );
};

export default HallTicket;