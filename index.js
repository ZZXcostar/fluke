$(function(){
 $(".an1Title").animate({
      left:"13%",
      top:"-140%",
      fontSize: '.18rem'
  },2000,'swing',cnOver);

$(".an1Title .cn").animate({
    fontSize: '12px'
},2000);
function cnOver() {
    $(".an1Title .cn").fadeOut()
    $(".bg1").fadeOut()
    setTimeout(function(){
        setTimeout(()=>{
            $(".img2box img").eq(0).fadeIn({duration: 0});
        },0)
        setTimeout(()=>{
            $(".img2box img").eq(1).fadeIn({duration: 0});
        },250)
        setTimeout(()=>{
            $(".img2box img").eq(2).fadeIn({duration: 0});
        },500)
        setTimeout(()=>{
            $(".img2box img").eq(3).fadeIn({duration: 0});
        },750)
        setTimeout(()=>{
            $(".img2box img").eq(4).fadeIn({duration: 0});
        },1000)
        setTimeout(()=>{
            $(".img2box img").eq(5).fadeIn({duration: 0});
        },1250)
        setTimeout(()=>{
            $(".img2box img").eq(6).fadeIn({duration: 0});
        },1500)
        setTimeout(()=>{
            $(".img2box img").eq(7).fadeIn({duration: 0});
        },1750)
        setTimeout(()=>{
            $(".img2box img").eq(8).fadeIn({duration: 0});
        },2000)
        setTimeout(()=>{
            $(".img2box img").eq(9).fadeIn({duration: 0});
        },50)
        $(".an2Title").show()
        $(".an2Title").animate({
            right:"-=41%",
            top:"-=39%",
            fontSize: '.14rem'
        },2000);
      
      $(".an2Title .cn").animate({
          fontSize: '12px'
      },2000,cnver2);
    },200);
    
}
$(".img1").fadeOut({duration: 1000})
$(".img2").fadeIn({duration: 1000})
})
function cnver2() {
    $(".an2Title .cn").fadeOut()
    $(".img2box").fadeOut()
    setTimeout(function(){
        $(".an3Title").show()
        $(".an3Title").animate({
            top:"130%",
            right:"22%",
            fontSize: '.14rem'
        },2000);
      
      $(".an3Title .cn").animate({
          fontSize: '12px'
      },2000,cnver3);
      $(".img3box div").eq(0).animate({
        left:"20%",
        top: "10%",
        fontSize: '.38rem'
    },1800)
    $(".img3box div").eq(1).animate({
        left:"40%",
        top: "30%",
        fontSize: '.38rem'
    },800)
    $(".img3box div").eq(2).animate({
        left:"25%",
        top: "60%",
        fontSize: '.38rem'
    },900)
    $(".img3box div").eq(3).animate({
        left:"50%",
        top: "20%",
        fontSize: '.38rem'
    },1200)
    $(".img3box div").eq(4).animate({
        left:"70%",
        top: "10%",
        fontSize: '.38rem'
    },1500)
    $(".img3box div").eq(5).animate({
        left:"70%",
        top: "40%",
        fontSize: '.38rem'
    },1800)
    $(".img3box div").eq(6).animate({
        left:"70%",
        top: "60%",
        fontSize: '.38rem'
    },2000)
    $(".img3box div").eq(7).animate({
        left:"30%",
        top: "40%",
        fontSize: '.38rem'
    },800)
    $(".img3box div").eq(8).animate({
        left:"20%",
        top: "60%",
        fontSize: '.38rem'
    },1000)
    },200);
}
function cnver3() {
    $(".an3Title .cn").fadeOut()
    $(".img3box").fadeOut()
    goamian()
    // $(".bg1").fadeOut()
    
}
$(".meritBox li").mouseover(function(){
    $(".meritBox .imgText").hide();
    // $(".meritBox .imgbox").css({top:"0px"});
    $(this).find(".imgText").show();
    $(this).find(".imgbox").animate({top:"-20px"},100);
});
$(".meritBox li").mouseleave(function(){
    $(".meritBox .imgbox").animate({top:"0px"},100);
});

function goamian(){
    $(".lineRight").fadeIn()
    $(".lineImg3").addClass("intro");
    $('.lineImg3').animate({left:'83%',opacity: '0'},2000,setblack1);
    $('.lineImgLine3').animate({left:'0%',width: '100%'},2000);
    setTimeout(() => {
      $(".lineTop").fadeIn()
      $(".lineImg1").addClass("intro");
      $('.lineImg1').animate({left:'83%',opacity: '0'},2000,setblack2);
      $('.lineImgLine1').animate({left:'0%',width: '100%'},2000);
      $('.lineImg1').css('left', '0%')
    }, 2000);
    setTimeout(() => {
      $(".lineLeft").fadeIn()
      $(".lineImg2").addClass("intro");
      $('.lineImg2').animate({left:'83%',opacity: '0'},2000,setblack3);
      $('.lineImgLine2').animate({left:'0%', width: '100%'},2000);
      $('.lineImg2').css('left', '0%')
    }, 4000);

    function setblack1(){
      $('.lineImg3').css('left', '0%')
      $('.lineImg3').removeClass('intro')
    }
    function setblack2(){
      $('.lineImg1').css('left', '0%')
      $('.lineImg1').removeClass('intro')
    }
    function setblack3(){
      $('.lineImg2').css('left', '0%')
      $('.lineImg2').removeClass('intro')
    }
    $(".product1_center").fadeIn(2000)
    setTimeout(() => {
        let css = {left:'83%'};
        let interval = null
        clearInterval(interval)
        $(".bottomBox").fadeIn()
        interval = setInterval(function(){ // 这里要改成回调 定时器有性能问题
          $(".lineImg1").addClass("intro");
          $(".lineImg2").addClass("intro");
          $(".lineImg3").addClass("intro");

          $('.lineImg1').animate(css,2000,rowBack1);
          $('.lineImg2').animate(css,2000,rowBack2);
          $('.lineImg3').animate(css,2000,rowBack3);
        },0);
        function rowBack1(){
            if(css.left==='83%'){
                $('.lineImg1').css('left', '0%')
                $(".lineImg1").removeClass("intro");
                // $('.lineImg1').fadeOut()
            }
        }
        function rowBack2(){
            if(css.left==='83%'){
                $('.lineImg2').css('left', '0%')
                $(".lineImg2").removeClass("intro");
                // $('.lineImg2').fadeOut()
            }
        }
        function rowBack3(){
            if(css.left==='83%'){
                $('.lineImg3').css('left', '0%')
                $(".lineImg3").removeClass("intro");
                // $('.lineImg3').fadeOut()
            }
        }
    }, 6500);
    
}
$(".email").blur(function(){
    if(!isEmail($(".email").val())) {
        $(".email").next(".verification").show()
    }else {
        $(".email").next(".verification").hide()
    }
})
$(".phone").blur(function(){
    if(!isCellphone($(".phone").val())) {
        $(".phone").next(".verification").show()
    }else {
        $(".phone").next(".verification").hide()
    }
})
$(".sbumit").click(()=>{
    if(!isEmail($(".email").val())) {
        $(".email").next(".verification").show()
        
    }else {
        $(".email").next(".verification").hide()
    }
    if(!isCellphone($(".phone").val())) {
        $(".phone").next(".verification").show()
    }else {
        $(".phone").next(".verification").hide()
    }
    if(isEmail($(".email").val())&&isCellphone($(".phone").val())){
        CloseDiv('MyDiv','fade')
        $(".dialog input").val("")
    }
})
function ShowDiv(show_div, bg_div) {
    $("#"+show_div).fadeIn(1000)
    $("#"+bg_div).fadeIn(1000)
    var bgdiv = document.getElementById(bg_div);
    // bgdiv.style.width = document.body.scrollWidth;
    $("#" + bg_div).height($(document).height());
   };
   //关闭弹出层
   function CloseDiv(show_div, bg_div) {
    $("#"+show_div).fadeOut(1000)
    $("#"+bg_div).fadeOut(1000)
   };

  function isCellphone(str) {
    /**
    *@descrition:手机号码段规则
    * 13段：130、131、132、133、134、135、136、137、138、139
    * 14段：145、147
    * 15段：150、151、152、153、155、156、157、158、159
    * 17段：170、176、177、178
    * 18段：180、181、182、183、184、185、186、187、188、189
    * 
    */
    var pattern =  /^1\d{10}$|^(0\d{2,3}-?|0\d2,3)?[1-9]\d{4,7}(-\d{1,8})?$/;
    return pattern.test(str);
}
function isEmail(str){
    /**
    * @descrition:邮箱规则
    * 1.邮箱以a-z、A-Z、0-9开头，最小长度为1.
    * 2.如果左侧部分包含-、_、.则这些特殊符号的前面必须包一位数字或字母。
    * 3.@符号是必填项
    * 4.右则部分可分为两部分，第一部分为邮件提供商域名地址，第二部分为域名后缀，现已知的最短为2位。最长的为6为。
    * 5.邮件提供商域可以包含特殊字符-、_、.
    */
    var pattern = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(str);
}
