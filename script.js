var content=document.createElement("div")
content.style.maxWidth="1440px";

var header = document.createElement("h1");
header.innerHTML="Event 1";
header.style.textAlign="center";
header.style.fontSize="50px"

var description = document.createElement("h2")
description.innerHTML="Number of available seats: 23";
description.style.textAlign="center";
description.style.fontSize="30px"

var container = document.getElementById("container");
container.style.border="1px solid"
container.style.padding="20px";
container.style.alignItems="center"
container.style.display="flex";
container.style.flexDirection="row";
container.style.flexWrap="wrap";
container.style.justifyContent="center";


var image = document.getElementById("image");
image.innerHTML=`<img src="event.jpeg" alt="event" width="200px" height="200px">`
image.style.width="20%"

var form = document.getElementById("form");
form.style.width="60%";
form.style.textAlign="right";
form.style.fontSize="30px"
form.innerHTML=`<form>
<label for="name">Name:</label>
<input type="text" id="name"><br><br>
<label for="email">Email:</label>
<input type="email" id="email"><br><br>
<label for="ph">Phone No:</label>
<input type="tel" id="ph"><br><br>
<label for="seat">Number of Seats:</label>
<input type="number" id="seat" min="0"><br><br>
<label for="attendee">Number of Attendee:</label>
<input type="text" id="attendee"><br><br>
<button>Submit</button>
<button>Cancel</button>
</form>`

container.appendChild(image);
container.appendChild(form);
content.appendChild(header);
content.appendChild(description);
content.appendChild(container);
document.body.appendChild(content);