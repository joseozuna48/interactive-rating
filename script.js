
function setReviewValue(){
    let url = window.location.href;
    let value = url.slice(-1);
    
    let sentence = `You selected ${value} out of 5`;
    let result  = document.getElementById("selection_display").textContent = sentence;
    console.log(document.getElementById("selection_display"))

}