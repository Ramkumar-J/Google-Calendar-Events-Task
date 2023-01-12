const eventContainer = document.querySelector(".event-container");
const submitBtn = document.querySelector("submit-btn");
// Create Event
async function postEvent() {
  let postEventdata = {
    eventname: document.querySelector("#add-title").value,
    date: document.querySelector("#add-date").value,
  };
  try {
    let postData = await fetch(
      "https://61f4eeec62f1e300173c3f56.mockapi.io/users",
      {
        method: "POST",
        body: JSON.stringify(postEventdata),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    alert("Data stored succesfully");
  } catch (error) {
    alert("Something went wrong");
  }
}

// Get Event Data
async function geteventInfo() {
  const eventTable = document.querySelector(".event-table");
  try {
    let eventdata = await fetch(
      "https://61f4eeec62f1e300173c3f56.mockapi.io/users"
    );
    let data = await eventdata.json();
    console.log(data);
    data.forEach((eventData) => {
      const li = document.createElement("li");
      li.setAttribute("class", "event-list");
      li.innerHTML = `<p class="event-date">${eventData.date}</p>
                <p class="event-time">🟢 All Day</p>
                <p class="event-name">${eventData.eventname}</p>
                `;
      eventTable.append(li);
      const eventBtn = document.createElement("button");
      eventBtn.setAttribute("class", "show-btn");
      eventBtn.innerText = "Show Event";
      li.append(eventBtn);
      eventBtn.addEventListener("click", () => {
        fetch(
          `https://61f4eeec62f1e300173c3f56.mockapi.io/users/${eventData.id}`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            alert(`${data.eventname} Event on ${data.date}`);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  } catch (error) {
    console.log(error);
  }
}
geteventInfo();
