  // // 2. This code loads the IFrame Player API code asynchronously.
  // var tag = document.createElement('script');

  // tag.src = "https://www.youtube.com/iframe_api";
  // var firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // // 3. This function creates an <iframe> (and YouTube player)
  // //    after the API code downloads.
  // function onYouTubeIframeAPIReady() {
  //   // <div id="player"></div>
  //  new YT.Player('player', {
  //     videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
  //   //영상을 재생하기 위한 여러가지 변수설정
  //     playerVars: {  
  //       autoplay: true,
  //       loop: true,
  //       playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
  //     },
  //     events: {
  //       onReady: function (event) {
  //         event.target.mute() //음소거
  //       }
  //     }
  //   });         
  // }

  // Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute() // 음소거!
      }
    }
  })
}