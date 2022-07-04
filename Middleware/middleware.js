
const Time = function (req, res, next) {
  var date = new Date();
var hour = date.getHours();
var day = date.getDay();

if ((hour >= 09 && hour <= 17) && (day >= 1 && day <= 5)) {
next();
}else{
    res.status(400).send('Not authorized');
  }
}

     module.exports=Time;