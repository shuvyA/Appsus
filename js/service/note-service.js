import utilsService from './utils.js'

var notes = [{
    readAt: '',
    text: 'one one one ',
    title: 'one ',
    id: utilsService.makeId(),
    type: 'note-txt-preview',
},
{
    readAt: '',
    text: 'image one',
    title: 'two img',
    src: '/img/102.jpg',
    id: utilsService.makeId(),
    type: 'note-img-preview',
},
{
    readAt: '',
    text: 'image one',
    title: 'one img',
    src: '/img/103.jpg',
    id: utilsService.makeId(),
    type: 'note-img-preview',
},
{
    readAt: '',
    text: 'two woedsf df dsf df ds fds f dsdf',
    title: 'twowme dsfko sdfdk ',
    id: utilsService.makeId(),
    type: 'note-txt-preview',
},
{
    readAt: '',
    text: 'dasdasdas',
    title: 'sdasdasdasdadasd',
    id: utilsService.makeId(),
    type: 'note-txt-preview',
},
{
    readAt: '',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis labore velit, quo libero rerum suscipit consectetur veniam nemo explicabo? Accusantium facere animi ipsam iste recusandae illum atque qui ab itaque.',
    title: 'one ',
    id: utilsService.makeId(),
    type: 'note-txt-preview',
},

{
    readAt: '',
    text: 'image one',
    title: 'one img',
    src: '/img/101.jpg',
    id: utilsService.makeId(),
    type: 'note-img-preview',
},
{
    readAt: '',
    text: 'two woedsf df dsf df ds fds f dsdf',
    title: 'twowme dsfko sdfdk ',
    id: utilsService.makeId(),
    type: 'note-txt-preview',
},
{
    readAt: '',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis labore velit, quo libero rerum suscipit consectetur veniam nemo explicabo? Accusantium facere animi ipsam iste recusandae illum atque qui ab itaque.',
    title: 'sdasdasdasdadasd',
    id: utilsService.makeId(),
    type: 'note-txt-preview',
},
{
    readAt: '',
    text: 'image one',
    title: 'one img',
    src: '/img/104.jpg',
    id: utilsService.makeId(),
    type: 'note-img-preview',
},
{
    readAt: '',
    text: 'image one',
    title: 'one img',
    src: '/img/100.jpg',
    id: utilsService.makeId(),
    type: 'note-img-preview',
},
{
    readAt: '',
    // text: 'image one',
    title: 'todos',
    todos: [
        { name: 'java', isDone: false, id: utilsService.makeId() },
        { name: 'angular', isDone: false, id: utilsService.makeId() },
        { name: 'explorer', isDone: false, id: utilsService.makeId() }],

    id: utilsService.makeId(),
    type: 'note-todo-preview',
},


];



function query() {
    // return notes;
    return Promise.resolve(notes);
}



// function addNote(noteId, review) {
//     // var book = getBookById(bookid);
//     // if (!book) return;
//     // if (!book.reviews) book.reviews = [];
//     var note = getBookById(noteId)
//       .then(book => book.reviews.push(review));
//   }

function removeNote(noteId) {
    let noteIdx = notes.findIndex((note) => note.id === noteId)

    let note = getNoteById(noteId)
        .then(note => notes.splice(noteIdx, 1));
}


function getNoteById(id) {
    let note = notes.find(note => note.id === id);
    return Promise.resolve(note);
}




export default {
    query,
    getNoteById,
    removeNote,
}