




function showDate() {

    var dateToday = new Date();
    var showDate = document.getElementById("dateToday");
    showDate.innerHTML += dateToday.toISOString().slice(0, 10) ;
}