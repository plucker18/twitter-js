const express = require('express');
const volleyball = require('volleyball')
const app = express();

app.use(volleyball)

// app.use('/:id',  function(req, res, next) {
//     if (req.params.id == 'special') {
//         console.log('You have reached the special area' );
//     } else {
//         console.log('GET /' + req.params.id);
//     }
//     next();
// });

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('My app listening on port 3000')
    
})

