const express = require('express');

const app = express();

app.get('/'  ,(request,response) => {
    response.send('hiii')

})

app.listen(5000, () => {
    console.log('server running on port 5000')
})