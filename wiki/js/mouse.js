// 下面这句注释的作用是防止jshint插件误报
/* jshint esversion: 6 */
// console.log(window.innerWidth);
if(window.innerWidth>=992){
    $(document).mousemove((e)=>{
        var l = e.pageX - $("#mouse").width() / 2 + "px";
        var t = e.pageY - $("#mouse").height() / 2 + "px";
        // console.log($("#mouse").width());
        // console.log(l);
        $("#mouse").css("left",l);
        $("#mouse").css("top",t);
    });
    $(document).mousedown(()=>{
        $("#mouse").css("border","3px solid white");
        $("#center").css("border","3px solid white");
    });
    $(document).mouseup(()=>{
        $("#mouse").css("border","3px solid black");
        $("#center").css("border","3px solid black");
    });
} 