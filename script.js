/* current time on title  */
var currentDate=moment().format('LLLL');
$("#currentDay").append(currentDate);



let weekATimes=[
    "9am","10am","11am","12pm","1pm","2pm", "3pm", "4pm","5pm",
];




var time= moment().hours();
console.log(time)
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
    textArea.attr("class","description");

    /* saveBtn goes inside row */
    var buttonSave=$("<button>");
    buttonSave.text("Save");
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

    function storeInput(){

        saveInput.addEventListener("click", function(event){
    

            event.preventDefault();

            var userInput=saveInsert.value;

            let userInputs;

            if(localStorage.getItem('userInputs')==null){
                userInputs =[];
            } else{
                userInputs=JSON.parse(localStorage.getItem("userInputs"));
                console.log(lastInput);
            }
            userInputs.push(userInput);
            

            localStorage.setItem("userInput",JSON.stringify(userInput));

           

            // textAreas.textContent= lastInput.userInput;

            // var elementInput= lastInput.userInput

            // textAreas.innerHTML="";

            textAreas.append(userInput);

            // console.log(elementInput);

            console.log(textAreas);

    

    // saveInsert.textContent=lastInput.UserInput;

        });

    };
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
        storeInput();

});



      


