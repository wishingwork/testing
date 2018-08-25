module.exports = {
  getIndexPage: (req, res) => {
  	// console.log(req.user)
  	if(req.user.isLoggedIn()) {
  	  return res.send("hey");
  	}
    res.send("Ooops. You need to log in to access this page")
  }
}
