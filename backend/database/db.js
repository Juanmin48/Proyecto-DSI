const Parse = require('parse/node');

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  't4BX4jOaJ9GtsGL117l6avxJaV74R401V2nu7iv1', // This is your Application ID
  'swEcbSQ6bdxPNYm8enqgOjJ0kB9uBxUAYwctZ8hE', // This is your Javascript key
  'sh2nHlzxQpGe3HnEhJ6GJ5FY04tDBAmYLCIpe0GU' // This is your Master key (never use it in the frontend)
);
