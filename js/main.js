(function() {

  "use strict";


  /*  リンクをタップしたら tapped クラスをつける
  ---------------------------------------------*/
  var i, link,
      linkList = document.getElementsByTagName("a");

  for (i = 0; i < linkList.length; i++) {
    link = linkList[i];

    link.addEventListener("touchstart", onTouchStart.bind(link));
    link.addEventListener("touchend", onTouchEnd.bind(link));
    link.addEventListener("touchcancel", onTouchEnd.bind(link));
  }

  function onTouchStart() {
    var that = this,
        y = that.getBoundingClientRect().top;

    setTimeout(function() {
      if (y === that.getBoundingClientRect().top) {
        that.classList.add("tapped");
      }
    }, 10);
  }

  function onTouchEnd() {
    var that = this;

    setTimeout(function() {
      that.classList.remove("tapped");
    }, 100);
  }

  /*  Twitter 埋め込みタイムラインの高さ調整
  ---------------------------------------------*/
  var intervalId,
      nav = document.getElementById("js-nav"),
      yNav = nav.getBoundingClientRect().top;

  if (nav != null) {
    setInterval(function() {

      var timeline = document.getElementById("twitter-widget-0");

      if (timeline == null) {
        return;
      }

      timeline.style.height = yNav + "px";

    }, 1000);
  }

})();