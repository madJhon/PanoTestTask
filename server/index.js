const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');


const app = express();

const membersRoutes = require('./routes/members');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(membersRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
  console.log('server is running...');
});
