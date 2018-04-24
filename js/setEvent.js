
	function clickCounter() {
//	    if(typeof(Storage) !== "undefined") {
//				var EventName =document.getElementById("EventName").value;
// document.getElementById("result").innerHTML  = EventName ;
//	    } else {
//	        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//	    }
        
         var x = document.getElementById("form"); 
        var TicketType="";
        if (x.elements[2].checked)
        {TicketType="Free Ticket";}
           else 
           { TicketType="Paid Ticket";}
        var Audience =""
    
        if (x.elements[4].checked)
        {  Audience="Women"  }
        if (x.elements[5].checked)
        {  Audience+=" Men"  }
        if (x.elements[6].checked)
        {  Audience+=" Kids"  }

        localStorage.EventName= x.elements[0].value ;
        localStorage.City= x.elements[1].value;
        localStorage.TicketType=TicketType;
        localStorage.Audience=Audience;
        localStorage.Description=x.elements[7].value;;
        
	}
