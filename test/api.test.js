const request = require('supertest')
 
const {http, app, socket} = require('../src/app')
const {mongoose} = require("../src/server")


describe('POST /chats',()=> {
    before((done=>{
        mongoose.connect('mongodb://localhost/chatroom',fucntion()).then(()=>done())
        .catch((err)=> done(err));
    }))

    before((done=>{
        mongoose.close().then(()=>done())
        .catch((err)=> done(err));
    }))

    it('Create message in chatroom', (done)=>{
        request(app).post('/chats')
        .send({nick:"juan",message:"hdtptm"})
        .then((res)=>{
            const body = res.body;
            expect(body).to.contain.property('_id');
            expect(body).to.contain.property('nick');
            expect(body).to.contain.property('message');
            done();
        })
    })
})


/*
Testing database connection
*/
it('', done =>{
    const data = {
        nick: 'juan',
        message: 'hola',
        date: 012265666
    }
    request(http)
    .post("/chats")
    .send(data)
    .expect('Content-Type', /json/ )
    .expect(201)
    .end((err) => {
        if(err) return done(err);
        done();
    })
})

// it('respond with',done =>{
//     request(http)
// })

// it('respond with',done =>{
//     request(model)
// })

// return res.json("")