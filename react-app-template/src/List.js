import React from 'react';

const List = ({people, deleteHandler}) => {

  // const style = {
  //   display: props.display ? "block" : "none"
  // }
  const peopleInfo = people.map((person) => {
    return <article key={person.id} className="person" >
      <img src={person.image} alt={person.name}/>
      <div>
        <h4>{person.name}</h4>
        <p>{person.age}</p>
      </div>
      <button className='delete-btn' onClick={()=>{deleteHandler(person.id)}}>Delete</button>
    </article>
  })
  return (
    <>
      <div>
        {peopleInfo}
      </div>
    </>
  );
};

export default List;


// {people.map((person) => {
//   const {id, name, age, image} = person;
//   return <article key={id} className="person">
//     <img src={image} alt={name}/>
//     <div>
//       <h4>{name}</h4>
//       <p>{age}</p>
//     </div>
//   </article> 
// })}