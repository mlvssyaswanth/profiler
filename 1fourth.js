(function() {
    "use strict";
  
    document.addEventListener("DOMContentLoaded", function() {
        
        document.getElementById("cart").addEventListener("submit",estimateTotal);
        var btnEstimate=document.getElementById("btn-estimate");     
        function estimateTotal(event){
            event.preventDefault();
            var itemPages=parseInt(document.getElementById("noOfSets").value,10) || 0;
            var totalPrice = itemPages * 450;
            var estimate="Rs." + totalPrice;
            console.log(estimate);
            document.getElementById("txt-estimate").value=estimate;

    }
    
    });
})(); 