/* current time on title  */
var currentDate=moment().format('LLLL');
$("#currentDay").append(currentDate);


let weekATimes=[
    "9am","10am","11am","12pm","1pm","2pm", "3pm", "4pm","5pm",
];


var weeklyCalender=[];

retrieveCalender()
storeCalender()


var time= moment().hours();


weekATimes.forEach(function(timesText){

    
    /* time block outter */
    var blockTime=$("<div>");
    $(".container").append(blockTime);
    blockTime.attr("class","time-block");
    blockTime.attr("data-time",timesText);

    /* row goes inside time block outter */
    var rowInput=$("<div>");
    $(".time-block").append(rowInput);
    rowInput.attr("class","row");

    
    /* hour goes inside row */
    var hourInsert=$("<div>");
    hourInsert.text(timesText);
    hourInsert.attr("class","hour");
   

    /* description goes inside row */
    var textArea=$("<textarea>");
    textArea.attr("id",timesText);

    /* saveBtn goes inside row */
    var buttonSave=$("<button>");
    buttonSave.addClass("col-md-1 saveBtn far fa-save");
   
    

    /* adding it to hour, description and saveBtn to row */
    rowInput.append(hourInsert,textArea,buttonSave);


    // converting the text to values 
    if (timesText==="9am"){
        timesText=9
    };

    if (timesText==="10am"){
        timesText=10
    };
    if (timesText==="11am"){
        timesText=11
    };
    
    if (timesText==="12pm"){
        timesText=12
    };
    if (timesText==="1pm"){
        timesText=13
    };
       if (timesText==="2pm"){
        timesText=14
    };
    if (timesText==="3pm"){
        timesText=15
    };
    if (timesText==="4pm"){
        timesText=16
    };
    if (timesText==="5pm"){
        timesText=17
    };

   // setting the condition for the current time
    if (timesText<time){
        textArea.attr("class","past description");
            
    }
    else if(timesText==time){
        textArea.attr("class","present description");
    }
    else{
        textArea.attr("class","future description");

    }
   
    

});



$(".saveBtn").on("click",function(event){
    event.preventDefault();
    weeklyCalender=[];
    var nine=$("#9am").val().trim();
    var ten=$("#10am").val().trim();
    var eleven=$("#11am").val().trim();
    var tweleve=$("#12pm").val().trim();
    var one=$("#1pm").val().trim();
    var two=$("#2pm").val().trim(); 
    var three=$("#3pm").val().trim();
    var four=$("#4pm").val().trim();
    var five=$("#5pm").val().trim(); 

    weeklyCalender.push({nineOClock:nine,tenOClock:ten,elevenOClock:eleven,tweleveOClock:tweleve,oneOClock:one,twoOClock:two,threeOClock:three,fourOClock:four,fiveOClock:five});
    storeCalender()
    addDayPlanner()


});
   

function storeCalender (){
  localStorage.setItem("weeklyCalender",JSON.stringify(weeklyCalender));
}

function retrieveCalender(){
  weeklyCalender=JSON.parse(localStorage.getItem("weeklyCalender")||"[]");
}
addDayPlanner()
function addDayPlanner(){
    retrieveCalender();

    if(weeklyCalender != ""){
        console.log("Add Calender")
    
        $("#9am").text(weeklyCalender[0].nineOClock)
        $("#10am").text(weeklyCalender[0].tenOClock)
        $("#11am").text(weeklyCalender[0].elevenOClock)
        $("#12pm").text(weeklyCalender[0].tweleveOClock)
        $("#1pm").text(weeklyCalender[0].oneOClock)
        $("#2pm").text(weeklyCalender[0].twoOClock)
        $("#3pm").text(weeklyCalender[0].threeOClock)
        $("#4pm").text(weeklyCalender[0].fourOClock)
        $("#5pm").text(weeklyCalender[0].fiveOClock)
    }

    }



