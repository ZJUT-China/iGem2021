/*下面的注释防止jshint插件误报*/
/* jshint esversion: 6 */
$(document).ready(function(){
    'use strict';
    $(".text-animation-object").html(function (){
        return $(".text-animation-object").html().replace(/\S/g, "<span class='char'>$&</span>");
    });
    $.each($(".text-animation-leftappear").children(),function(i,item){
        let time = (i+1)*50;
        $(item).animate({
            fontSize: '5vw',
            opacity: '1'
        },time);
    });
    $(".text-animation-slowshow").animate({
        opacity: '1'
    },1300);
});