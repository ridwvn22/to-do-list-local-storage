function printData( ){
    event.preventDefault();
    var todo = $("form").serializeArray();
    console.log(todo)
    var task = todo[0].value;
}
    
    $("#to-do-list").append("<li> " + task +"</li>");

   $("#to-do").click (function(){
       var taskList = $( "li" ).slice( 1 );
           for(var i = 0; i< taskList.length; i++)
                   {
                      if(task[i].todo == task.todo);
                      }
                   }
                   return false;
               
   
   });