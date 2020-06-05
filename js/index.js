$(function(){
 
    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })

    // 切换
    $('.tab-tit li').click(function(){
        console.log($(this).index())
        $(this).attr('class','on').siblings().removeClass()
        $(this).parent('.tab-tit').siblings('.tab-content').children('div').removeClass().eq($(this).index()).attr('class','active')
    })
  
    // 轮播
    var swiper = new Swiper('.swiper-container', {
        // pagination: '.swiper-pagination',
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        // 自动播放时间

        // autoplay:true,
    });
    
})