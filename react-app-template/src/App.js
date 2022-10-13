import React, { useState } from 'react';
import List from './List';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);


function deleteHandler(id) {
  setPeople((prevPeople) => {
    return prevPeople.filter((people) => {
      return people.id !== id
    })
  })
  // const delLogic = people.filter((people) => {
  //   return people.id !== id
  // })

  // setPeople(delLogic)
}

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} deleteHandler= {deleteHandler}/>
        <button onClick={() => setPeople([])} className="clear-btn">Clear All</button>
      </section>
    </main>
  );
}

export default App;
