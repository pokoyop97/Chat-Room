const request = require('supertest')
 
const router = require ('../src/routers/index')
const http = require('../src/app')
const model = require('../src/chat')

/*
Testing database connection
*/
it('respond with code done',done=>{
    request(router)
    .expect("Content-Type",/json/)
    .expect(200,done);
})

// it('respond with',done =>{
//     request(http)
// })

// it('respond with',done =>{
//     request(model)
// })

// return res.json("")