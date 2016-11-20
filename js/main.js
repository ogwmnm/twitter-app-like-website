(function() {

  "use strict";

  var i, link,
      linkList = document.getElementsByTagName("a"),
      btnList = document.getElementsByTagName("button");

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

})();