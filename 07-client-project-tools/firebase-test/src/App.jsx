import React from 'react';
import { firestore } from './firebase';
import { collection, addDoc, doc, getDoc, getDocs, setDoc, deleteDoc } from '@firebase/firestore';

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

  const handleRead = () => {
    const usersCollection = collection(firestore, "users")

    getDocs(usersCollection).then(response => {
      console.log("Here's many users")
      response.docs.forEach(doc => {
        console.log(doc.data())
      })
    })
  }

  const docRef = doc(firestore, "users", "I1e3xDF7pNGT4FpDnrOI")
  getDoc(docRef).then(response => {
    console.log(response.data());
  });

  const updateDoc = () => {
    await setDoc(docRef), {
      name: "Daniel",
      isCoach: true,
      address: "Rossendale, Lancs"
    }
  };

  const delDoc = () => {
    await deleteDoc(docRef);
  }

  return (
    <div className="App">
      Welcome to my firebase project
      <section>
        <h2>Create User</h2>
        <button onClick={handleCreate}>Do it</button>
      </section>
      <section>
        <h2>Read a user</h2>
        <button onClick={handleRead}>Do it</button>
      </section>
    </div>
  )
}

export default App
