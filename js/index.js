$(function(){
    //footer
    var aa=$("footer ul li");

        //aa.eq(0).addClass("dd");
        aa.each(function(i){
            aa.eq(i).click(function(){
                aa.removeClass("dd").eq(i).addClass("dd");
            })
        })

   
})