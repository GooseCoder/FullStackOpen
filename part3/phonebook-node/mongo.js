const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://gustav:${password}@fullstrackopen-df7ey.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length < 4) {
  console.log("phonebook:");
  Person.find({}).then(result => {
    result.forEach(person => console.log(person.name, person.number));
    mongoose.connection.close();
  });
} else {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
    date: new Date()
  });

  person.save().then(response => {
    console.log("added", response.name, "number", response.number, "to phonebook");
    mongoose.connection.close();
  });
}
