// // // // // // // // // // // // // // // // //
//           MARUMAX JAVASCRIPT CODE            //
//               DOO NUT STEEL!!!               //
// // // // // // // // // // // // // // // // //
// Hoylecake was here 72321

// Functions
function ac(element,cl,display) {
    // This is a shorthand for adding and removing classes to elements
    // For example, if you wanted to hide the userModal you'd use it like so:
    // ac(userModal,"hide",true);
    // To unhide it:
    // ac(userModal,"hide",false);
    if (display) {
        element.classList.add(cl);
    } else if (!display) {
        element.classList.remove(cl);
    } else {
        throw new Error("AddClass Function encountered an error. Is display parameter truthy/falsy/boolean?")
    }
}

// Header stuff
const signupLink = document.getElementById("suheader");
const loginLink = document.getElementById("liheader");
const userOption = document.getElementById("logopt");
// Modal stuff
const userModal = document.getElementById("user-modal")
const suModal = document.getElementById("signup-modal");
const liModal = document.getElementById("login-modal");
const closeX = document.querySelectorAll(".close");

// Modal opening & closing
for(let i=0;i<closeX.length;i++)closeX[i].addEventListener("click",()=>ac(userModal,"hide",true))
signupLink.onclick = () => {
    ac(userModal,"hide",false);
    ac(suModal,"hide",false);
    ac(liModal,"hide",true);
}
loginLink.onclick = () => {
    ac(userModal,"hide",false);
    ac(suModal,"hide",true);
    ac(liModal,"hide",false);
}
userModal.onclick=()=>ac(userModal,"hide",true);