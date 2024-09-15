document.body.addEventListener('click', function(event){
    if (event.target.classList.contains("collapsible-block-link")){
        let folded = document.getElementsByClassName("collapsible-block-folded")[0];
        let unfolded = document.getElementsByClassName("collapsible-block-unfolded")[0];

        let foldedDisplay = window.getComputedStyle(folded).display;
        let unfoldedDisplay = window.getComputedStyle(unfolded).display;

        if (foldedDisplay === "block"){
            folded.style.display = "none";
            unfolded.style.display = "block";
        }
        else if (unfoldedDisplay === "block") {
            unfolded.style.display = "none";
            folded.style.display = "block";
        }
    }
})