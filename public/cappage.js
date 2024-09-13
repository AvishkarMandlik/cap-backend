document.addEventListener("DOMContentLoaded", async () => {
  const unverifiedList = await checkUnverifiedApplications();
  console.log(unverifiedList);
  if (unverifiedList != false) {
    if (
      confirm(`${unverifiedList.length} Applications awaiting verification`) ==
      true
    ) {
        unverifiedList.forEach(item => {
            const section = document.createElement("div");
            section.innerHTML = JSON.stringify(item);
            document.getElementById("body").appendChild(section);
            
        });
    }
  }
});

async function checkUnverifiedApplications() {
    const res = await fetch("/cap/verification");
    const data = await res.json(); 

    if (data.length > 0) {
        console.log('data is array')
        console.log(data)
        return data;
    } else {
        console.log('data is not array')
        return false;
    }
}
