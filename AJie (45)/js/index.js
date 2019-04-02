(function() {
  $.ajax({
    type: "get",
    url: "https://api.douban.com/v2/movie/top250",
    timeout: "3000",
    dataType: "jsonp",
    success: function(response) {
      for (const i of response.subjects) {
        $(".lists").append(`<li>${i.title}</li>`);
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
  $(".page").pullToRefresh(function() {
    console.log("New");
    setTimeout(() => {
      $(".page").pullToRefreshDone();
    }, 2000);
  });
  $(".page")
    .infinite()
    .on("infinte", function() {
      var loading = false;
      if (loading) {
        return;
      }
      loading = true;
      $("weui-loadmore").show();
      setTimeout(() => {
        $(".lists").append("<li>New</li>");
        loading = false;
      }, 1500);
    });
})();
