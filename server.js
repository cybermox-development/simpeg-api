const express = require('express');
const app = express();

app.listen(500, ()=>{
  console.log('server run on PORT 500');
})