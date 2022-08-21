const express = require('express')
const app = express()
const port = 3000

var data = require('./data/test.json');

app.set('view engine','ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));
app.use("/images", express.static(__dirname));


app.get('/', (req, res) =>{ 
  let title = 'Welcome to My Page'
  let heading = 'Rahel Seyum'
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})
app.get('/about', (req, res) =>{ 
  let title = 'About ME'
  let heading = 'Front-end Developer'
  res.render('pages/about',{
    'title':title,
    'heading':heading
  })
})

app.get('/users', (req, res) =>{ 
  let title = 'My user page'
  let heading = 'My web page '
  res.render('users/index',{
    'title':title,
    'heading':heading,
    'users': data,
  })
})

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 var heading = "My website"
 res.render('users/view', {
     title: title,
     heading:heading,
     user: data[--id]
 });
});
app.get('/hobby', (req, res) =>{ 
  let title = 'My hobbies'
  let heading = 'Swim Swim'
  res.render('pages/hobby',{
    'title':title,
    'heading':heading
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
})