let express = require('express'); 
let app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

let password = '123';
let login = 'admin';

// CONFIG 
app.engine('handlebars', handlebars.engine({defaultLAayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended:true}));

// ROTAS
app.post('/', (req, res)=>{
    if(req.body.password == password && req.body.login == login){
        // req.session.login = login;
        res.render('home');
    } else{
        console.log('saaaaaai gllld!!!');
        // res.render('login');
    }
});

app.get('/', function(req, res){ 
   res.render("login"); 
});

app.get('/home', function(req, res){ 
    res.render("home"); 
});

app.get('/login', function(req, res){ 
    res.render("login"); 
});

app.get('/bcr', function(req, res){
    res.render("barCodeReader"); 
});

app.listen(5000, () => {
    console.log("porra.");
});