import axious from "axios";
import {Tabs} from "./tabs.";
import {tabsAppender} from "./tabs";
import {Card} from "./card";
import {cardAppender} from "./card";

axious.get("src/index.html")
.then((response =>{
console.log(axious.get("src/index.html"));
Header(response.data);
})

.catch((error =>{
  console.log(error);
});

const Header = (title, date, temp) => {

  const header = document.createElement("div");
  const date= document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");


  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  header.classList.add("header");
  header.classList.add("date");
  header.classList.add("title");
  header.classList.add("temp");

  return(header);

  

  
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);
  return(selector);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
