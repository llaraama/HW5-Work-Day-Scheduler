/* current time on title  */
var currentDate=moment().format('LLLL');
$("#currentDay").append(currentDate);


let weekATimes=[
    "6am","7am","8am","9am","10am","11am","12pm","1pm","2pm", "3pm", "4pm","5pm","6pm","7pm","8pm","9pm","10pm",
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
    if (timesText==="6am"){
        timesText=6
    }; 

    if (timesText==="7am"){
        timesText=7
    };

    if (timesText==="8am"){
        timesText=8
    };
  
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

    if (timesText==="6pm"){
        timesText=18
    };

    if (timesText==="7pm"){
        timesText=19
    };

    if (timesText==="8pm"){
        timesText=20
    };

    if (timesText==="9pm"){
        timesText=21
    };

    if (timesText==="10pm"){
        timesText=22
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
    var sixa=$("#6am").val().trim(); 
    var sevena=$("#7am").val().trim(); 
    var eighta=$("#8am").val().trim(); 
    var ninea=$("#9am").val().trim();
    var tena=$("#10am").val().trim();
    var elevena=$("#11am").val().trim();
    var tweleve=$("#12pm").val().trim();
    var one=$("#1pm").val().trim();
    var two=$("#2pm").val().trim(); 
    var three=$("#3pm").val().trim();
    var four=$("#4pm").val().trim();
    var five=$("#5pm").val().trim(); 
    var six=$("#6pm").val().trim(); 
    var seven=$("#7pm").val().trim(); 
    var eight=$("#8pm").val().trim(); 
    var nine=$("#9pm").val().trim(); 
    var ten=$("#10pm").val().trim(); 

    weeklyCalender.push({sixAm:sixa,sevenAm:sevena,eightAm:eighta,nineAM:ninea,tenAm:tena,elevenAm:elevena,twelevePm:tweleve,onePm:one,twoPm:two,threePm:three,fourPm:four,fivePm:five,sixPM:six,sevenPm:seven,eightPm:eight,ninePm:nine,tenPm:ten});
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
        $("#6am").text(weeklyCalender[0].sixAm)
        $("#7am").text(weeklyCalender[0].sevenAm)
        $("#8am").text(weeklyCalender[0].eightAm)
        $("#9am").text(weeklyCalender[0].nineAM)
        $("#10am").text(weeklyCalender[0].tenAm)
        $("#11am").text(weeklyCalender[0].elevenAm)
        $("#12pm").text(weeklyCalender[0].twelevePm)
        $("#1pm").text(weeklyCalender[0].onePm)
        $("#2pm").text(weeklyCalender[0].twoPm)
        $("#3pm").text(weeklyCalender[0].threePm)
        $("#4pm").text(weeklyCalender[0].fourPm)
        $("#5pm").text(weeklyCalender[0].fivePm)
        $("#6pm").text(weeklyCalender[0].sixPM)
        $("#7pm").text(weeklyCalender[0].sevenPm)
        $("#8pm").text(weeklyCalender[0].eightPm)
        $("#9pm").text(weeklyCalender[0].ninePm)
        $("#10pm").text(weeklyCalender[0].tenPm)
    }

    }



