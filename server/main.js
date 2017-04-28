import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

let username = "INTRINIO_API_USERNAME";
let password = "INTRINIO_API_PASSWORD";
let auth = username + ":" + password;

console.log(auth)

Meteor.startup(() => {
  HTTP.call('GET','https://api.intrinio.com/companies', {
    query: "ticker=AAPL",
    auth: auth
  },
  function( error, response ) {
    if (error) {
      console.log("Error", error)    
    } else {
      console.log(response)
    }
  });
});
