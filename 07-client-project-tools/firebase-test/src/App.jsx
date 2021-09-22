import React from 'react';
import { firestore } from './firebase';
import { collection, addDoc } from '@firebase/firestore';

const App = () => {

  const user = {
    id: "123ABC",
    name: "Dan",
    isCoach: false,
    address: "Rossendale, Lancs"
  }

  const handleCreate = () => {
    const usersCollection = collection(firestore, "users");
    addDoc(usersCollection, user);
  }

  return (
    <div className="App">
      Welcome to my firebase project
      <section>
        <h2>Create User</h2>
        <button onClick={handleCreate}>Do it</button>
      </section>
    </div>
  )
}

export default App
