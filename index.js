$(function(){
 $(".an1Title").animate({
      left:"12%",
      top:"-140%",
      fontSize: '.2rem'
  },2000,'swing',cnOver);

$(".an1Title .cn").animate({
    fontSize: '12px'
},2000);
function cnOver() {
    $(".an1Title .cn").fadeOut()
    $(".bg1").fadeOut()
    // $(".anm1").fadeOut()
    setTimeout(function(){
        $(".img2box img").eq(0).fadeIn({duration: 0});
        $(".img2box img").eq(1).fadeIn({duration: 500});
        $(".img2box img").eq(2).fadeIn({duration: 1000});
        $(".img2box img").eq(3).fadeIn({duration: 1500});
        $(".img2box img").eq(4).fadeIn({duration: 2000});
        $(".img2box img").eq(5).fadeIn({duration: 2500});
        $(".img2box img").eq(6).fadeIn({duration: 3000});
        $(".img2box img").eq(7).fadeIn({duration: 3500});
        $(".img2box img").eq(8).fadeIn({duration: 4000});
        $(".img2box img").eq(9).fadeIn({duration: 4500});
        $(".an2Title").show()
        $(".an2Title").animate({
            right:"-=41%",
            top:"-=39%",
            fontSize: '.15rem'
        },2000);
      
      $(".an2Title .cn").animate({
          fontSize: '12px'
      },2000,cnver2);
    },200);
    
}
$(".img1").fadeIn({duration: 0})
setTimeout(()=>{
    $(".img1").fadeOut({duration: 0})
    $(".img2").fadeIn({duration: 0})
    setTimeout(()=>{
      $(".img2").fadeOut({duration: 0})
      $(".img1").fadeIn({duration: 0})
      setTimeout(()=>{
        $(".img1").fadeOut({duration: 0})
        $(".img2").fadeIn({duration: 0})
      },500)
    },500)
},500)
$(".img2").fadeOut({duration: 0})
// $(".img2").fadeIn({duration: 500})
// $(".img2").fadeOut({duration: 500})
// $(".img1").fadeIn({duration: 500})
})
function cnver2() {
    $(".an2Title .cn").fadeOut()
    $(".img2box").fadeOut()
    setTimeout(function(){
        $(".an3Title").show()
        $(".an3Title").animate({
            top:"150%",
            right:"52%",
            fontSize: '.16rem'
        },2000);
      
      $(".an3Title .cn").animate({
          fontSize: '12px'
      },2000,cnver3);
      $(".img3box div").eq(0).animate({
        left:"40%",
        fontSize: '38px'
    },1500,'swing')
    $(".img3box div").eq(1).animate({
        left:"30%",
        top:"-50%",
        fontSize: '38px'
    },1350,'swing')
    $(".img3box div").eq(2).animate({
        left:"60%",
        top:"-20%",
        fontSize: '38px'
    },1300,'swing')
    $(".img3box div").eq(3).animate({
        left:"90%",
        top:"-10%",
        fontSize: '38px'
    },500,'swing')
    $(".img3box div").eq(4).animate({
        left:"80%",
        top:"10%",
        fontSize: '38px'
    },1900,'swing')
    $(".img3box div").eq(5).animate({
        left:"30%",
        top:"50%",
        fontSize: '38px'
    },2000,'swing')
    $(".img3box div").eq(6).animate({
        left:"20%",
        top:"40%",
        fontSize: '38px'
    },1200,'swing')
    $(".img3box div").eq(7).animate({
        left:"40%",
        top:"10%",
        fontSize: '38px'
    },3500,'swing')
    $(".img3box div").eq(8).animate({
        left:"0%",
        top:"0%",
        fontSize: '38px'
    },4000,'swing')
    },200);
}
function cnver3() {
    $(".an3Title .cn").fadeOut()
    $(".img3box").fadeOut()
    goamian()
    // $(".bg1").fadeOut()
    
}
$(".meritBox li").hover(function(){
    $(".meritBox .imgText").hide();
    $(this).find(".imgText").show();
});
$(".meritBox li").mouseleave(function(){
    // $(".meritBox .imgText").hide();
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

function ShowDiv(show_div, bg_div) {
    $("#"+show_div).fadeIn(1000)
    $("#"+bg_div).fadeIn(1000)
    var bgdiv = document.getElementById(bg_div);
    bgdiv.style.width = document.body.scrollWidth;
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
    var pattern =  /^(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/;
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