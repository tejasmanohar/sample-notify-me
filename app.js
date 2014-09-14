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
sendReq('Without further ado, your streak will be lost in 5 minutes','Github');
sendReq('There is a new uber driver in your area', 'Uber');
sendReq('The number of cars for sale in your area increased by one','Edmunds');
sendReq('MSFT is declining', 'Bloomberg');
sendReq('AMZN is increasing greatly','USA Today');
