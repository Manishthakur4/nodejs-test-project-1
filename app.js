const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articles');
const commentRoutes = require('./routes/comments');
const indexRoutes = require('./routes/index');
const sequelize = require('./config/database');

const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));


// Routes
app.use('/articles', articleRoutes);
app.use('/comments', commentRoutes);
app.use('/', indexRoutes);

// Initialize Sequelize and sync models
sequelize.sync().
then(() => {
//   console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
  
})
.catch((err) => {
  console.error(err);
});