import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// //child_removed event
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed event
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// // database.ref('expenses')
// //   .on('value',
// //   (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });
  
// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: 'this months rent expenses',
// //   amount: 150000,
// //   createdAt: 1234567
// // });

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'react, angular, node'
// // });

// // database.ref().on('value', (snapshot) => {
// //   let data = snapshot.val();
// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// // }, 
// // (error) => {
// //   console.log('Error fetching data', error);
// // });

// // database.ref('location/city').once('value')
// // .then((snapshot) => {
// //   const val = snapshot.val();
// //   console.log(val);
  
// // })
// // .catch((e) => {
// //   console.log('Error fetching data.', e);
// // });

// // database.ref().set({
// //   name: 'Daniel Reimer',
// //   age: 21,
// //   stressLevel: 6,
// //   job: {
// //     title:'Software Developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Winnipeg',
// //     country: 'Canada'
// //   }
// // }).then(() => {
// //   console.log('Data is saved.');
// // }).catch((e)=> {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref('isSingle').remove().then(() => {
// //   console.log('isSingle data removed from Firebase Db.');
// // }).catch((e) => {
// //   console.log('Error: Could not remove data.', e);
// // });

// //could also use set to null to remove data
// // database.ref('isSingle').set(null);
