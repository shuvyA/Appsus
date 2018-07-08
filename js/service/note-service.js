import utilsService from './utils.js'

var NOTES_KEY = 'NOTES_KEY';

var notes = utilsService.loadFromStorage(NOTES_KEY);
if (!notes || notes.length === 0) notes = createNotes();



// utilsService.saveToStorage(key, value);


// utilsService.loadFromStorage(key)



function query() {
    // debugger;

    // var notes = utilsService.loadFromStorage(NOTES_KEY);
    // if (notes) return Promise.resolve(notes);


    // utilsService.saveToStorage(NOTES_KEY, notes)
    return Promise.resolve(notes);
}

function saveNotes() {
    utilsService.saveToStorage(NOTES_KEY, notes)
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
        .then(note =>{
            notes.splice(noteIdx, 1);
            saveNotes()
        })
}


function getNoteById(id) {
    let note = notes.find(note => note.id === id);
    return Promise.resolve(note);
}





// ------------------------------------>todos <-------------------------

function createTodo(txt) {
    return {
        id: utilsService.makeId(),
        name: txt,
        isDone: false,
    }
}

function addTodo(todoTxt) {
    var newTodo = createTodo(todoTxt);
    todos.unshift(newTodo);
    saveTodos();
    return Promise.resolve(newTodo);
}


function deleteTodo(id) {
    var todoIdx = getTodoIdxById(id)
    if (todoIdx === -1) return;
    todos.splice(todoIdx, 1);
    saveTodos();
    return Promise.resolve();

}

function toggleTodo(todoId, note) {
    for (var i = 0; notes.length > i; i++) {
        if (notes[i] === note) {
            var currNote = notes[i]
            // var currNote='';
            // getNoteById(note).then((notea)=> {

            //     // console.log(notea)
            //      var currNote = notea  
            // })
            // console.log(currNote.todos);


            for (var j = 0; currNote.todos.length > j; j++) {
                var currTodo = currNote.todos[j];
                if (currTodo.id === todoId) {

                    currTodo.isDone = !currTodo.isDone;
                    return currTodo.isDone;
                }
            }
        }
    }
}

// getTodoById(todoId, note)
//         .then(todo => currTodo = todo)

// // if (!todo) return;
// currTodo.isDone = !currTodo.isDone;
// // saveTodos();
// return Promise.resolve(currTodo);
// }

function getTodoById(todoId, note) {
 
    var currNote = notes.find(notea => notea === note)
    var todo = currNote.todos.find(todo => todo.id === todoId);
    return Promise.resolve(todo)
}

function createNotes() {
    return [{
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
}


export default {
    query,
    getNoteById,
    removeNote,
    getTodoById,
    toggleTodo,
    createTodo,
}