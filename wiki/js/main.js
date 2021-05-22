$(".naBar").each(function() { 
     
         var $naBarobj=$(this);
         $(this).load($(this).attr("file"),function(){
             $naBarobj.after().remove();
         });
     
});
$(document).ready(function () {
    
});