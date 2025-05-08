var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var input = this.nextElementSibling;
        if (input.style.display === "block") {
            input.style.display = "none";
        } else {
            input.style.display = "block";
        }
    });
}