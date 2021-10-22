const express = require("express");
var cors = require("cors");
const app = express();
// const port = process.env.PORT || 3000;
const port = 5000;

app.use(cors());
app.use(express.json()); //body_parser

/* 
const handler = (res, req) =>{
    res.send('Hello Node JS');
} 
*/

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/welcome", (req, res) => {
  res.send(" Welcom to Node js.");
});

const contacts = [
  { id: 0, name: "John", number: "+880 77 88 91" },
  { id: 1, name: "Roman", number: "+880 77 88 92" },
  { id: 2, name: "Selina", number: "+880 77 88 93" },
];

app.get("/contacts", (req, res) => {
  //console.log(req.query);
  //console.log(req.query.search);
  //http://localhost:5000/contacts?search=Tasnim
  //http://localhost:5000/contacts?search=Amirah&&order=ring
  const search = req.query.search;
  if (search) {
    const searchResult = contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
    //http://localhost:5000/contacts?search=selina
  } else {
    res.send(contacts);
  }

  res.send(contacts);
  /* 
  res.send([
    { id: "0", name: "John", number: "+880 77 88 91" },
    { id: "1", name: "Roman", number: "+880 77 88 92" },
    { id: "2", name: "Selina", number: "+880 77 88 93" },
  ]); 
  */
});

 // fetch() method:'post'
app.post("/contacts", (req, res) => {
    const newContact = req.body;
    newContact.id = contacts.length;
    contacts.push(newContact);
    // console.log('Button Hit');
    // console.log('Button Hit', req.body); //Undefined
    console.log('Button Hit', req.body);
    // res.send(JSON.stringify(newContact));
  });

  //Dynamic API
app.get("/contacts/:id", (req, res) => {
  //console.log(req.params.id);
  const id = req.params.id;
  const contact = contacts[id]; //from users array
  res.send(contact)
});

app.listen(port, () => {
  console.log("Welcome to PORT", port);
});
