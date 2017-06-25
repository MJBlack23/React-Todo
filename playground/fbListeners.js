// using Arrays in firebase
let notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (ss) => {
  console.log('child_added', ss.key, ss.val());
});

notesRef.on('child_changed', (ss) => {
  console.log('child_changed', ss.key, ss.val());
});

notesRef.on('child_removed', (ss) => {
  console.log('child_remove', ss.key, ss.val());
});

let newNoteRef = notesRef.push({
  text: 'Walk the dog!'
});
