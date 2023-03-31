var KT = document.getElementsByClassName("slideshow")[0].clientWidth;
var chuyenslide = document.getElementsByClassName("chuyen-slide")[0];
var hinhanh = chuyenslide.getElementsByTagName("img");
var max = KT * hinhanh.length;
max -= KT;
var chuyenphai = 0;

function Next(){
    if(chuyenphai < max){
        chuyenphai += KT;
    }
    else{
        chuyenphai = 0;
    }
    chuyenphai += KT - 1320;
    chuyenslide.style.marginLeft = "-" + chuyenphai +"px";
}

function Preview(){
    if(chuyenphai == 0){
        chuyenphai = max;
    }
    else{
        chuyenphai -= KT;
    }
    chuyenphai -= KT - 1320;
    chuyenslide.style.marginLeft = "-" + chuyenphai +"px";
}

setInterval(function(){
    Next();
},3000); 
