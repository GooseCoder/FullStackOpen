import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import Persons from "./Persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationStyles, setNotificationStyles] = useState({});

  const errorStyles = {
    color: "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  const successStyles = {
    color: "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  const submitData = event => {
    event.preventDefault();
    const person = persons.find(person => newName === person.name);
    if (person) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        personService
          .update(person.id, {
            name: newName,
            number: newNumber,
            id: person.id
          })
          .then(updatedPerson => {
            setNotificationMessage(`Added ${person.name}`);
            setNotificationStyles(successStyles);
            setTimeout(() => {
              setNotificationMessage(null);
            }, 5000);
            setPersons([
              ...persons.filter(curPerson => curPerson.id !== person.id),
              updatedPerson
            ]);
            setNewNumber("");
            setNewName("");
          })
          .catch(error => {
            setNotificationMessage(
              `Information of ${
                person.name
              } has already been removed from server`
            );
            setNotificationStyles(errorStyles);
            setTimeout(() => {
              setNotificationMessage(null);
            }, 5000);
            setPersons([
              persons.filter(curPerson => curPerson.id !== person.id)
            ]);
          });
      }
    } else {
      personService
        .create({
          name: newName,
          number: newNumber
        })
        .then(newPerson => {
          setNotificationMessage(`Added ${newName}`);
          setNotificationStyles(successStyles);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
          setPersons([...persons, newPerson]);
          setNewNumber("");
          setNewName("");
        });
    }
  };

  const changeNewName = event => {
    setNewName(event.target.value);
  };

  const changeNewNumber = event => {
    setNewNumber(event.target.value);
  };

  const deletePerson = person => {
    if (window.confirm(`Delete ${person.name}?`))
      personService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter(curPerson => curPerson.id !== person.id));
        })
        .catch(error => {
          console.log('error on delete');
          setNotificationMessage(
            `Information of ${person.name} has already been removed from server`
          );
          setNotificationStyles(errorStyles);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
          setPersons(persons.filter(curPerson => curPerson.id !== person.id));
        });
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    personService.getAll().then(persons => setPersons(persons));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification styles={notificationStyles} message={notificationMessage} />
      <Filter filterHandler={changeFilter} filter={filter} />
      <h2>add a new</h2>
      <PersonForm
        dataHandler={submitData}
        nameHandler={changeNewName}
        numberHandler={changeNewNumber}
        name={newName}
        number={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons.filter(
          person => person.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        )}
        deleteHandler={deletePerson}
      />
    </div>
  );
};

export default App;
