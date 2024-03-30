//循序播放陣列中指定的圖檔
var seqImg = new Array(12);
var seqImg_length = seqImg.length;
// 若不想在 function 中每次都要算陣列的大小, 陣列中的圖檔數量, 可用另一個變數存，

var yourImg = document.getElementById('yourImgId');
if(yourImg && yourImg.style) {
    yourImg.style.height = '100px';
    yourImg.style.width = '200px';
}

for (var i = 1; i <= seqImg_length; i++) {
    seqImg[i-1]="photos/member" + i + ".jpeg";
}
//設定每 1.5 秒執行一次 sequentialImg() ，此行要在 function 之外
setInterval("sequentialImg()", 1500);
var i=0; // 設定起始照片 i=3 的照片 是從第四張照片 開始
function sequentialImg(){ //循序播放
    document.getElementById("seq_div").innerHTML = "<img src='"+seqImg[i]+"' class='mt-4 mb-4d-block mx-auto' height=600px>";
    i++;
    if(i >= seqImg_length) {
        i=0;
    }
}
//隨機播放陣列中指定的圖檔
var ranImg = new Array(12);
for (var j = 1; j <= ranImg.length; j++) {
    ranImg[j-1]="photos/ive" + j + ".jpeg";
}

//設定每 1.5 秒執行一次 randomImg() ，此行要在 function 之外
setInterval("randomImg()", 1500);
//隨機播放 => 陣列的長度 * 介於 0~1 間數字 ，然後在取 floor 當照片索引值
function randomImg(){
    var imgIndex = Math.floor(Math.random()*ranImg.length);
    document.getElementById("ran_div").innerHTML = "<img src='"+ranImg[imgIndex]+"'class='mt-4 mb-4 d-block mx-auto' style='height:600px'>";
} 