function playVideo(videoId) {
    var videoContainer = document.getElementById('videoContainer');
    
    switch (videoId) {
      case 'video1':
        videoContainer.innerHTML = '<video controls><source src="videos/Doctor slump.mp4" type="video/mp4"></video>';
        break;
      case 'video2':
        videoContainer.innerHTML = '<video controls><source src="videos/house_of_ninja.mp4" type="video/mp4"></video>';
        break;
      case 'video3':
        videoContainer.innerHTML = '<video controls><source src="videos/Manifest.mp4" type="video/mp4"></video>';
        break;
      case 'video4':
        videoContainer.innerHTML = '<video controls><source src="video3.mp4" type="video/mp4"></video>';
        break;
      case 'video5':
        videoContainer.innerHTML = '<video controls><source src="video3.mp4" type="video/mp4"></video>';
        break;
      case 'video6':
        videoContainer.innerHTML = '<video controls><source src="video3.mp4" type="video/mp4"></video>';
        break;
      default:
        videoContainer.innerHTML = '视频链接错误';
        break;
    }
  }