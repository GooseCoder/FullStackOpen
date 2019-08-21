import React from 'react'

export default function PersonForm({dataHandler, nameHandler, numberHandler, name, number}) {
    return (
        <form onSubmit={dataHandler}>
        <div>
          name:<input type="text" onChange={nameHandler} value={name} />
        </div>
        <div>
          number:<input type="text" onChange={numberHandler} value={number} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
