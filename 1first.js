(function() {
    "use strict";
  
    document.addEventListener("DOMContentLoaded", function() {
        
        document.getElementById("cart").addEventListener("submit",estimateTotal);
        var btnEstimate=document.getElementById("btn-estimate");     
        function estimateTotal(event){
            event.preventDefault();
            var itemPages=parseInt(document.getElementById("noOfSets").value,10) || 0;
            var totalPrice = itemPages * 800;
            console.log(totalPrice);
            var estimate="Rs." + totalPrice;
            document.getElementById("txt-estimate").value=estimate;

    }
    
    });
})(); 