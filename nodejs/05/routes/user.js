
/*
 * GET users listing.
 */

exports.list = function(req, res){
  if (req.session.name) {
    return res.send("I know you! You are " + req.session.name + ".");
  }
  res.send("respond with a resource");
};

exports.one = function(req, res){
  req.session.name = req.params.name;
  res.send("Your name is " + req.params.name + ".");
};