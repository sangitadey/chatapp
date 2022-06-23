//getusers page
function getusers(req, res, next) {
  res.render("users", {
    title: "users-chat Application",
  });
}
module.exports = {
  getusers,
};
