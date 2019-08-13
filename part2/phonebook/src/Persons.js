import React from "react";

export default function Persons({ persons, deleteHandler }) {
  return (
    <div>
      {persons.map(person => {
        const deletePerson = () => {
          deleteHandler(person);
        };
        return (
          <div key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={deletePerson}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
