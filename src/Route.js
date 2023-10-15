(function () {
  module.exports = function (_g) {
    var app = _g.app;
    var http = _g.http;

    function route() {
      app.get("/", function (req, res) {
        res.render("index.html", {});
      });

      app.get("/main", function (req, res) {
        res.render("main.html", {});
      });

      //1. enetry point
      app.listen(1003, function () {
        console.log("health Server listen on *:1003");
      });
    }

    var publicReturn = {
      route: route,
    };
    return publicReturn;
  };
})();
