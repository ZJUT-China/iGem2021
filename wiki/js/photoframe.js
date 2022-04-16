// 下面这句注释的作用是防止jshint插件误报
/* jshint esversion: 6 */
$(document).ready(function(){
    'use strict';
    var url = "../json/member.txt";
    $.getJSON(url,
        (memberlist, textStatus) =>{
            // console.log(memberlist);
            // console.log(textStatus);
            // console.log(jqXHR);
            var showphoto = function(i){
                var img = $("<img>",{
                    class:"photoframe",
                    id:i+1,
                    src:memberlist[i].photourl,
                    alt:memberlist[i].name
                });
                img.appendTo($(".photoframebox"));
                // console.log(img);
            };
            var wholeWidth;
            var slideshow = function(){
                wholeWidth = $(".slideshow").width();
                // console.log(wholeWidth);
                for(var i=0;i<memberlist.length;i++){
                    var img = $("<img>",{
                        class:"photoframe",
                        id:i + 1,
                        src:memberlist[i].photourl,
                        alt:memberlist[i].name
                    });
                    img.appendTo($(".slideshow"));
                }
            };
            var slideleft = function(){
                // console.log($(".slideshow>img").width());
            };
            $(".slideleft").click(function(){
                    // console.log(this);
                    slideleft();
                });
            if(textStatus==="success"){  
                // console.log(memberlist.length);
                slideshow();
                // console.log(wholeWidth);
                for(var i=0;i<memberlist.length;i++){
                    showphoto(i);
                }
                var tempElement;
                $(".photoframe").click(function(event){  
                    // console.log(this);
                    var num = this.id-1;
                    $(".member>img").attr("src",memberlist[num].photourl);
                    $(".name").html(memberlist[num].name);
                    $(".group").html(memberlist[num].group);
                    $(".message").html(memberlist[num].message);
                    $(".board").css("display","block");
                    // console.log(this);
                    // console.log(event.target);
                    if($(event.target)!=tempElement){
                        console.log($(event.target)!==tempElement);
                        // console.log($(event.target));
                        $(event.target).css("border","2px solid skyblue");
                        $(event.target).css("filter","grayscale(0)");
                        if(tempElement){
                            // console.log(this);
                            tempElement.css("filter","grayscale(50%)");
                            tempElement.css("border","none");
                        }
                    }
                    tempElement = $(event.target);
                });
                $(".close").click(function(){
                    $(".board").css("display","none");
                });
            }else{
                console.error("error:The request of memberlist is failure");
            }
        });
});