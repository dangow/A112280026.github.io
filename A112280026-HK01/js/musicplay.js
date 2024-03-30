// 歌曲變數 宣告
play1=document.getElementById("music_play1");
play2=document.getElementById("music_play2");
play3=document.getElementById("music_play3");
play4=document.getElementById("music_play4");
play5=document.getElementById("music_play5");
play6=document.getElementById("music_play6");
play7=document.getElementById("music_play7");
musicList = [play1, play2, play3, play4, play5, play6, play7];
musicListName = ["<font color=#76ABAE>I Am</font>", "<font color=#76ABAE>Kitsch</font>", "<font color=#76ABAE>Baddie</font>", "<font color=#76ABAE>Either Way</font>", "<font color=#76ABAE>Off The Record</font>", "<font color=#76ABAE>OTT</font>", "<font color=#76ABAE>Not your girl</font>"];
var index =0;

// 點擊播放
function start() {
    var player = musicList[index];
    var song = musicListName[index];

    // 該首歌曲時間長度
    var dur = player.duration;
    var s1 = parseInt(dur % 60);
    var m1 = parseInt((dur/ 60) % 60);
    document.getElementById("dur_time").innerHTML = "<font color='#ffffff' size='5'>" + m1 + "m " + s1 + "s"+"</font>";

    // 顯示已播放的時間長度
    setInterval("calTime()", 1000);

    // 跑馬燈 顯示 正播放的 歌曲 名稱
    info.innerHTML = "Playing: " + song;
    player.play();
}
// 點擊暫停
function pause() {
    var player = musicList[index];
    player.pause();
    info.innerHTML = "Pausing"
}
// 點擊播放下一首/前一首
function next() {
    var player = musicList[index];
    player.pause();
    index += 1;
    if(index >= musicList.length) {
        index=0;
    }
    var player = musicList[index];
    start();
}
function previous() {
    var player = musicList[index];
    player.pause();
    index -= 1;
    if(index < 0) {
        index= musicList.length - 1;
    }
    var player = musicList[index];
    start();
}
// 調整音量大小
function upVolume() {
    var player = musicList[index];
    var volume = player.volume + 0.1;
    if(volume >=1 ){
        volume = 1 ;
    }
    player.volume = volume;
    start();
}
function downVolume() {
    var player = musicList[index];
    var volume = player.volume - 0.1;
    if(volume <= 0 ){
        volume = 0 ;
    }
    player.volume = volume;
    start();
}
function calTime() {
    var player = musicList[index];
    var cur = player.currentTime;
    var dur = player.duration;
    var s2 = parseInt(cur % 60);
    var m2 = parseInt((cur / 60) % 60);
    document.getElementById("cur_time").innerHTML = "<font color='#ffffff' size='5'>" + m2 + "m " + s2 + "s" + "</font>";

    // 如果歌曲播放完畢，停止計時器
    if (cur >= dur) {
        clearInterval(intervalId);
    }
}
