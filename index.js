$(function(){
 $(".an1Title").animate({
      left:"-=30%",
      top:"-=50%",
      fontSize: '38px'
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
            right:"-=60%",
            top:"-=15%",
            fontSize: '38px'
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
            top:"100%",
            right:"50%",
            fontSize: '38px'
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
    // $(".bg1").fadeOut()
    
}