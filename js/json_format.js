// JSON
// java script object notation

// API
// application interface

user = {                                   // javascript object
  user_name: "pradip",
  user_email: "pradip@gmail.com",
  user_address: "vastrapur",
};

// convert my javascript object into json string

json_file = JSON.stringify(user)

console.log(json_file)

// {"user_name":"pradip","user_email":"pradip@gmail.com","user_address":"vastrapur"}
