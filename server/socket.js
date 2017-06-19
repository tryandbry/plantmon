const axios = require('axios');

module.exports = (io)=>{
  io.on('connection',(socket)=>{
    console.log('a user connected');
    socket.on('disconnect',()=>console.log('user disconnected'));
    let buffer = [];
    const INTERVAL=700;
    setInterval(()=>{
      axios.get('http://172.28.116.169')
      //axios.get('http://localhost:1337/api/garbage')
      .then(payload=>{
        buffer.push(payload.data);
        //console.log('tessel data:',payload.data);
        console.log('buffer',buffer);
        //socket.emit('tessel',{data: payload.data});
      })
      .catch(err=>console.error(err));
    },INTERVAL);
    setInterval(()=>{
      if(buffer.length) socket.emit('tessel',{data: buffer.shift()});
    },INTERVAL);
  });
}
