const axios = require('axios');

module.exports = (io)=>{
  io.on('connection',(socket)=>{
    console.log('a user connected');
    socket.on('disconnect',()=>console.log('user disconnected'));
    setInterval(()=>{
      //axios.get('http://172.28.116.103')
      axios.get('http://localhost:1337/api/garbage')
      .then(payload=>{
        console.log('tessel data:',payload.data);
        socket.emit('tessel',{data: payload.data});
      })
      .catch(err=>console.error(err));
    },500);
  });
}
