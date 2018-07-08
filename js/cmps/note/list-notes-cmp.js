import noteTxtPreview from './note-txt-preview.js'
import noteImgPreview from './note-img-preview.js'
import noteTodoPreview from './note-todo-preview.js'

import noteService from '../../service/note-service.js'

export default {

    props: ['notes'],

    template: `

    <section class="list-notes-cmp">

    
    <button @click.prevent="addNote">✚</button>

       <div class="masonry" v-if="notes">

            <component v-for="(note, idx) in notes" :is="note.type" :key="idx" :note="note" 
            @del-note="removeNote" @add-todo="addTodo" 
            @del-todo="delTodo" @save-img="saveNewImg"
            @save-txt="saveTxt"> 

            </component>
                
       </div>
    </section>

    `,
    data() {
        return {

        }
    },
    methods: {
        removeNote(noteId) {
            noteService.removeNote(noteId)
        },
        addTodo(newTxtTodo, noteId) {
            noteService.addTodo(newTxtTodo, noteId);
        },
        delTodo(todoId, noteId) {
            noteService.deleteTodo(todoId, noteId)
        },
        saveNewImg(imgBase64, noteId) {
            noteService.saveNewImg(imgBase64, noteId);
        },

        saveTxt(text, title, noteId) {
            noteService.saveTxt(text, title, noteId)
        },
        addNote(){
            console.log('add note');
            
        }


    },
    components: {
        noteTxtPreview,
        noteImgPreview,
        noteTodoPreview,
    },


}

