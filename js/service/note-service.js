import utilsService from './utils.js'

var NOTES_KEY = 'NOTES_KEY';

var notes = utilsService.loadFromStorage(NOTES_KEY);
if (!notes || notes.length === 0) notes = createNotes();



function query() {

    return Promise.resolve(notes);
}

function saveNotes() {
    utilsService.saveToStorage(NOTES_KEY, notes)
}




function removeNote(noteId) {
    let noteIdx = notes.findIndex((note) => note.id === noteId)
    notes.splice(noteIdx, 1);
    saveNotes()

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

function addTodo(todoTxt, noteId) {
    var newTodo = createTodo(todoTxt);
    getNoteById(noteId).then((note) => {

        note.todos.unshift(newTodo);
        saveNotes();
    })
}


function deleteTodo(todoId, noteId) {
    getNoteById(noteId)
        .then((note) => {

            let todoIdx = note.todos.findIndex((todo) => todo.id === todoId);
            note.todos.splice(todoIdx, 1);
            saveNotes();
        })
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


function getTodoById(todoId, note) {

    var currNote = notes.find(notea => notea === note)
    var todo = currNote.todos.find(todo => todo.id === todoId);
    return Promise.resolve(todo)
}



// *********************************img***************************88

function saveNewImg(imgBase64, noteId) {
    getNoteById(noteId)
        .then((note) => {
            note.src = imgBase64;

            saveNotes();
        })
}



// **************************** txt***************************8



function saveTxt(text, title, noteId) {
    getNoteById(noteId)
        .then((note) => {
            note.text = text;
            note.title = title;
            saveNotes();
            // console.log(text,'servic');

        })

}



// ********************8add note************************************88


function addNoteTxt(title) {
    if (title === '') return;
    let newObjTxt = emptyNoteText();
    newObjTxt.title = title;
    notes.unshift(newObjTxt)
    saveNotes();
}
function addNoteTodo(title) {
    if (title === '') return;
    let newObjTxt = emptyNoteTodo();
    newObjTxt.title = title;
    notes.unshift(newObjTxt)
    saveNotes();
}
function addNoteImg(title) {
    let newObjTxt = emptyNoteImg();
    newObjTxt.title = title;
    notes.unshift(newObjTxt)
    saveNotes();
}






// empty note

function emptyNoteImg() {
    return {
        readAt: '',
        text: 'image one',
        title: 'one img',
        src: '/img/100.jpg',
        id: utilsService.makeId(),
        type: 'note-img-preview',
    };
}


function emptyNoteText() {
    return {
        readAt: '',
        text: 'new text - edit!!',
        title: 'twowme dsfko sdfdk ',
        id: utilsService.makeId(),
        type: 'note-txt-preview',
    };
}

function emptyNoteTodo() {

    return {
        readAt: '',
        title: 'todos',
        todos: [
            { name: 'one', isDone: false, id: utilsService.makeId() },
            { name: 'two', isDone: false, id: utilsService.makeId() },
            { name: 'three', isDone: false, id: utilsService.makeId() }],

        id: utilsService.makeId(),
        type: 'note-todo-preview',
    };
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
        src: './img/101.jpg',
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
    addTodo,
    deleteTodo,
    saveNewImg,
    saveTxt,
    addNoteTxt,
    addNoteTodo,
    addNoteImg,
    // createTodo,
}