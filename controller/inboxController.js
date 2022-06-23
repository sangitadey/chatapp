//getusers page
function getinbox(req, res, next) {
  res.render("inbox", {
    title: "inbox-chat Application",
  });
}
module.exports = {
  getinbox,
};
