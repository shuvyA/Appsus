import noteService from '../../service/note-service.js  '
// import noteTodosService from '../../service/note-todos-service.js'


export default {

    props: ['note'],

    template: `
    <section class="note-todo-preview item">
    <div class="title-todo flex space-between"> {{note.title}} 
            <div >

                <button @click.prevent="statusEdit=!statusEdit">✎</button>
                <button @click.prevent="deleteNote">✘</button>
            </div>
</div>
<ul class="clean-list main-todo">
    <input v-if="statusEdit" v-model="newTodo" />
    <button v-if="statusEdit" @click.prevent="addTodo(note.id)">✚</button>
        <li v-for="todo in todos">
            <div class="flex space-between"> 
               <div v-bind:class="{done : todo.isDone}" 
               @click.prevent="toggleDone(todo.id,note)">{{todo.name}}
               </div>
           
           
              <div >
                <!-- <button>✎</button> -->
                <button v-if="statusEdit" @click.stop="deleteTodo(todo.id, note.id)">✘</button>
              </div>

            </div>    
    </li>
</ul>

    </section>

    `,
    created() {

    },
    data() {
        return {
            newTodo: '',
            todos: this.note.todos,
            statusEdit: false,

        }
    },
    methods: {
        deleteNote() {
            console.log('delete', this.note.title, 'and', this.note.id);
            this.$emit('del-note', this.note.id);

        },
        toggleDone(todoId, note) {
            noteService.toggleTodo(todoId, note);

        },
        addTodo(noteId) {
            if (this.newTodo === '') return

            this.$emit('add-todo', this.newTodo, noteId)

            this.newTodo = '';
        },

        deleteTodo(todoId, noteId) {
            console.log('del', todoId);
            this.$emit('del-todo', todoId, noteId)

            let todoIdx = this.todos.findIndex((todo) => todo.id === todoId)
            this.todos.splice(todoIdx, 1)
        }
    }
}
