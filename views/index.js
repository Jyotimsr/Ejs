express = require('express');
app = express();
port = 3000;

app.set('view engine ','ejs');

usern = {
    username:"jyoti",
 password: '123',}






app.get('/',(req,res)=> {res.render('./pages/index.ejs',{usern:usern})});
app.listen(port,()=>{console.log('server runing on port ${port}')});