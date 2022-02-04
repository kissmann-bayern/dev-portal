var url = "https://api.github.com/repos/kissmann-bayern/dev-portal/dispatches";

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer " + process.env.ACCESS_TOKEN);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
      console.log("log aa")
      console.log(process.env.netrc)
   }};

var data = '{"event_type": "my-event", "client_payload": {"netrc": "'+process.env.netrc+'"}}';

xhr.send(data);
