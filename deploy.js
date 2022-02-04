var url = "https://api.github.com/repos/kissmann-bayern/dev-portal/dispatches";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer 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");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = '{"event_type": "my-event"}';

xhr.send(data);
