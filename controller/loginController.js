//getlogin page
function getlogin(req, res, next) {
  res.render("index", {
    title: "login-chat Application",
  });
}
module.exports = {
  getlogin,
};
