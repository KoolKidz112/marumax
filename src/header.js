document.querySelector("script#header").insertAdjacentHTML("afterend", `<nav><div>
  <h1>MaruMax</h1>
  <span space>
    <a href="">Home</a>
    <span> | </span>
    <a href="">Channels</a>
  </span>
  <div usercard>
    <img src="./src/img/default.jpg" id="headpfp">
    <text>
      <span>Not logged in</span>
      <div id="logopt">
        <a href="#" id="liheader">Log in</a>
        <span> | </span>
        <a href="#" id="suheader">Sign up</a>
      </div>
    </text>
  </div>
<div></nav>`);

document.querySelector("script#header").remove();
