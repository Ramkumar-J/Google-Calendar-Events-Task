// const eventDay=document.querySelector(".event-day");
// const eventTime=document.querySelector(".event-time");
// const eventName=document.querySelector(".event-name");
const eventBtn=document.querySelector(".event-info");
const eventContainer=document.querySelector(".event-container");
const submitBtn=document.querySelector("submit-btn");
async function geteventInfo() {
  // const eventDay=document.querySelector(".event-day").innerText;
  // const eventTime=document.querySelector(".event-time").innerText;
  // const eventName=document.querySelector(".event-name").innerText;
  const eventTable=document.querySelector(".event-table");
  let eventdata=await fetch("https://61f4eeec62f1e300173c3f56.mockapi.io/users");
  let data=await eventdata.json();
  console.log(data);
  data.map((eventData) => {
    const li=document.createElement("li");
    li.setAttribute("class","event-list");
    li.innerHTML=`<p class="event-date">${eventData.date}</p>
                <button class="event-info" data-bs-toggle="modal" data-bs-target="#eventListModal">
                <p class="event-time">🟢 ${eventData.starttime} + ${eventData.endtime}</p>
                <p class="event-name">${eventData.eventname}</p>
                </button>`;
    eventTable.append(li);
  })
  }
geteventInfo();


//   const div1=document.createElement("div");
//   div1.innerHTML=`<div class="modal fade" id="eventListModal" tabindex="-1" aria-labelledby="eventListModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="eventListModalLabel">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//       <p>${eventName}</p>
//       <p>${eventDay}</p>
//       <p>${eventTime}</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>`;
// eventList.append(div1);

// async function postData(){
//   var formdata={
//       firstname:document.getElementById("add-title").value,
//       lastname:document.getElementById("lastname").value,
//       address:document.getElementById("address").value,
//       pincode:document.getElementById("pincode").value,
//       state:document.getElementById("state").value,
//       country:document.getElementById("country").value,
//       gender:document.getElementById("gender").value,
//       food:document.getElementById("food").value,
//   }
//   try {
//       let postData=await fetch("https://61f4eeec62f1e300173c3f56.mockapi.io/userdata",{
//           method:"POST",
//           body:JSON.stringify(formdata),
//           headers:{
//               "Content-type":"application/json"
//           }
//       })
//       alert("Data stored succesfully")
//       // getData()
//   } catch (error) {
//       alert("Something went wrong")
//   }
// }
async function postEvent() {
  let postEventdata={
  eventname: document.querySelector("#add-title").value,
  date: document.querySelector("#add-date").value,
  starttime: document.querySelector("#start-time").value,
  endtime:document.querySelector("#end-time").value,
  }
  try {
          let postData=await fetch("https://61f4eeec62f1e300173c3f56.mockapi.io/users",{
              method:"POST",
              body:JSON.stringify(postEventdata),
              headers:{
                  "Content-type":"application/json"
              }
          })
          alert("Data stored succesfully")
          // getData()
      } catch (error) {
          alert("Something went wrong")
      }
  // fetch("https://61f4eeec62f1e300173c3f56.mockapi.io/users",{
  //   method:"POST",
  //   headers:{
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(postEventdata),
  // })
  // .then(res => res.json())
  // .then(data => console.log(data))
  // .catch((err) => console.log(err));
}

// submitBtn.addEventListener("click",postEvent)
// eventBtn.addEventListener("click",eventInfo)
