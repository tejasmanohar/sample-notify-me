var request = require('request');

function sendReq(body, name) {
  request.post(
    'http://buddhabrudda.mybluemix.net/notifications/4699553379', 
    {form:{
      text: body,
      user: name
    }}
  );
}

sendReq('$15 spent in the last month','Plaid');
setTimeout(sendReq('Without further ado, your streak will be lost in 5 minutes','Github'), 5000);
setTimeout(sendReq('There is a new uber driver in your area', 'Uber'), 6000);
setTimeout(sendReq('The number of cars for sale in your area increased by one','Edmunds'), 9000);
setTimeout(sendReq('MSFT is declining', 'Bloomberg'), 7500);
setTimeout(sendReq('AMZN is increasing greatly','USA Today'), 5500);