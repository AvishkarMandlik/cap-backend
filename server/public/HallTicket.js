function printHallTicket() {
    const ticket = document.querySelector("main");
    const wrapper = document.querySelector(".ticketWrapper");
    wrapper.style.backgroundRepeat = "space";
    var opt = {
        margin:       [0.5, 0, 0.5, 0], // Set margins to ensure content fits
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
          scale: 2, // Higher scale for better quality
          scrollX: 0, 
          scrollY: 0, 
          windowWidth: ticket.scrollWidth, 
          windowHeight: ticket.scrollHeight,
          useCORS: true
        },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' } // Adjust format and orientation
      };
    html2pdf().from(ticket).set(opt).save();

};

// function printpage(){
//     window.print();
// }

