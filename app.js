var request = require('superagent');

function sendReq(body) {
  request.post('http://buddhabrudda.mybluemix.net/notify/4699553379')
    .set('Content-Type', 'application/json')
    .send({text: body})
    .end(function(err, res) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Sent \"" + body + "\"");
      }
    });
}

setInterval(function () {
  sendReq('$15 spent in the last month --Plaid');
  setTimeout(sendReq('Without further ado, your streak will be lost in 5 minutes --Github'), 5000);
  setTimeout(sendReq('There is a new uber driver in your area --Uber'), 6000);
  setTimeout(sendReq('AMZN is increasing greatly --USA Today'), 5500);
  setTimeout(sendReq('The number of cars for sale in your area increased by one --Edmunds'), 9000);
  setTimeout(sendReq('MSFT is declining --Bloomberg'), 7500);
  setTimeout(sendReq('$15 spent in the last month --Plaid'), 6000)
  setTimeout(sendReq('AMZN is increasing greatly --USA Today'), 5500);
  setTimeout(sendReq('MSFT is declining --Bloomberg'), 7500);
}, 50000);