(function() {
  $.ajax({
    type: "get",
    url: "https://www.easy-mock.com/mock/5ca495f634e2a127a257d660/ajie/movie",
    success: function(response) {
      console.log(response);
      $("#moviePic").attr("src", response.data.moviePic);
    }
  });
})();
