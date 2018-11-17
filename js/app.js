var textarr = ["Single Application","Verified Avenues","Trusted Advisors","Informed Decisions"];
var count = 0;
var heading = document.getElementById("heading");
setInterval(animateText, 3000);

function animateText() {
 heading.innerText = textarr[count];
    count++;
    if(count >= textarr.length)
    {
       count = 0;
  }
}
