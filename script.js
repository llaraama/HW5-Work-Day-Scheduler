/* current time on title  */
var currentDate=moment().format('LLLL');
$("#currentDay").append(currentDate);

let weekTimes=[
    "9","10","11","12","13","14", "15", "16","17"
];

let weekATimes=[
    "9am","10am","11am","12pm","1pm","2pm", "3pm", "4pm","5pm",
];




var time= moment().hours();
console.log(time)
weekTimes.forEach(function(timesText){

    
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
    textArea.attr("class","description");

    /* saveBtn goes inside row */
    var buttonSave=$("<button>");
    buttonSave.text("save button");
    buttonSave.attr("class","saveBtn");
    

    /* adding it to hour, description and saveBtn to row */
    rowInput.append(hourInsert,textArea,buttonSave);

    

    // $(document).ready(function(){
    //     $('.saveBtn').click(function(event){
    //         event.preventDefault();
    //         localStorage.setItem(".description",JSON.stringify())
    //     });
    // });
    
    
        var saveInput= document.querySelector('.saveBtn');

        var saveInsert=document.querySelector('.description');

        var textAreas=document.querySelector('textarea');

        saveInput.addEventListener("click", function(event){

        event.preventDefault();

        var userInput={
        UserInput:saveInsert.value.trim()
        };

        localStorage.setItem("userInput",JSON.stringify(userInput));

        var lastInput=JSON.parse(localStorage.getItem("userInput"));
        console.log(lastInput);

        textAreas.textContent= lastInput.userInput;

        var elementInput= lastInput.userInput

        textAreas.innerHTML="";

        textAreas.append(elementInput);

        console.log(textAreas);



    // saveInsert.textContent=lastInput.UserInput;

         });


   
            
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




