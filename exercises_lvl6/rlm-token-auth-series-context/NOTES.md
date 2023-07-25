need JWT and .env
JWT requires 
header = algo and token type
ie - {
    "alg": "HS256",
    "typ": "JWT"
}
payload = data (user obj)
ie - {
    "sub": "1234567890"
    "name": "John Doe",
    "iat": "1516239022" 
}
and 
signature = secret

will create encoded token with three parts
NOT secure, don't want otpass private info, 
just used to make sure person making request 
is autorized to make the request

start by intalling JWT
npm install jsonwebtoken
then
npm install .env

create .env file and in it
SECRET="insert four random words here"

in server.js file 
require('dotenv').config()
to access (will differ depending on if cra, vite, etc. but for here)
process.env.SECRET

in authRouter.js const jwt = require('jsonwebtoken')

npm install express-jwt  (acts as gatekeeper)
in server.js 
const express.jwt = require('express-jwt')