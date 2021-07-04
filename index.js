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
function overImg(index) {
    console.log()
    $(".img2box img").eq(index).hide()
}
$(".img1").fadeOut({duration: 1000})
$(".img2").fadeIn({duration: 1000})
})
function cnver2() {
    $(".an2Title .cn").fadeOut()
    // $(".bg1").fadeOut()
}