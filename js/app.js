
var textarr = ["Single Application","Verified Avenues","Trusted Advisors","Informed Decisions"];
// console.log(textarr);
var count = 0;
var heading = document.getElementById("heading");
// console.log(heading);
setInterval(animateText, 3000);
function animateText() {
 heading.innerText = textarr[count];
 // console.log(heading.innerHTML);
    count++;
    if(count >= textarr.length)
    {
       count = 0;
  }
}
