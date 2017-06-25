// firebaseRef.update({
//   'appName/name': 'React - Todo Application',
//   'user/name': 'Todd'
// });

// firebaseRef.child('appName').update({
//   name: 'this is a test',
// });
//
// firebaseRef.child('user').update({
//   name: 'Jack'
// });

// firebaseRef.child('appName/version').remove();

// firebaseRef.child('appName').update({
//   version: '2.0.0',
//   name: null
// });

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// Get some data
// firebaseRef.child('appName').once('value')
// .then((ss) => {
//   console.log('Got entire Database', ss.key, ss.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.on('value', (ss) => {
//   // callback to run when data changes in the database
//   console.log('Got Value', ss.val());
// });
//
// firebaseRef.off();
//
// firebaseRef.update({
//   isRunning: false
// });


// firebaseRef.child('user').on('value', (ss) => {
//   console.log('Data Updated...', ss.val());
// });
//
// firebaseRef.child('user').update({ name: 'Ted' });
// firebaseRef.child('user').update({ name: 'Bob' });
