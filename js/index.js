$(function(){
    //footer
    var aa=$("footer ul li");

        //aa.eq(0).addClass("dd");
        aa.each(function(i){
            aa.eq(i).click(function(){
                aa.removeClass("dd").eq(i).addClass("dd");
            })
        })

//提交订单
    var wig=$(".tjdd_weixin_img");
    //aa.eq(0).addClass("dd");
    wig.each(function(i){
        wig.eq(i).click(function(){
            wig.removeClass("mydd").eq(i).addClass("mydd");
        })
    })
// 购物车
    var spdj=$(".tjdd_item_je2").text();
    //减少
    $(".reduce_num").on('click',function(){
        var amount = $(this).parent().find(".amount");
        if (parseInt($(amount).text()) <= 1){
            alert("商品数量最少为1");
        } else{
            $(amount).text(parseInt($(amount).text()) - 1);
        }
        //小计
        //var spdj=parseInt($(".tjdd_item_je").text());
        var subtotal = parseInt(spdj) * parseInt($(amount).text());
        $(this).parent().parent().find(".tjdd_item_je .tjdd_item_je2").text(subtotal.toFixed(1));
        //总计金额
        var total = 0;
        $(".tjdd_item_je .tjdd_item_je2").each(function(){
            total += parseInt($(this).text());
        });

        $("#total").text(total.toFixed(1));
    });

    //增加
    $(".add_num").on('click',function(){
        var amount = $(this).parent().find(".amount");
        $(amount).text(parseInt($(amount).text()) + 1);
        //小计
        var subtotal = parseInt(spdj) * parseInt($(amount).text());
        $(this).parent().parent().find(".tjdd_item_je .tjdd_item_je2").text(subtotal.toFixed(1));
        //总计金额
        var total = 0;
        $(".tjdd_item_je .tjdd_item_je2").each(function(){
            total += parseInt($(this).text());
        });

        $("#total").text(total.toFixed(1));
    });
   
})