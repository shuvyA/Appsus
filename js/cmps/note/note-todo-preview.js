import noteService from '../../service/note-service.js  '
// import noteTodosService from '../../service/note-todos-service.js'


export default {

    props: ['note'],

    template: `

    <section class="note-todo-preview item">
    <div class="title-todo flex space-between"> {{note.title}} 
            <div >

                <button>✎</button>
                <button @click.prevent="deleteNote">✘</button>
            </div>
</div>
<ul class="clean-list main-todo">
    <input v-modal="newTodo" />
    <button @click.prevent="addTodo">✚</button>
    <!-- <div class="flex column"> -->
        <li v-for="todo in todos">
            <div class="flex space-between"> 
             <div v-bind:class="{done : todo.isDone}" 
            @click.prevent="toggleDone(todo.id,note)">{{todo.name}}
            </div>
           
           
            <div >
                <button>✎</button>
                <button @click.stop="deleteTodo">✘</button>
            </div>

            </div>
            
            
            
        <!-- </div> -->
    </li>
        <!-- </div> -->
</ul>

    </section>

    `,
    created() {

    },
    data() {
        return {
            newTodo: '',
            todos: this.note.todos,

        }
    },
    methods: {
        deleteNote() {
            console.log('delete', this.note.title, 'and', this.note.id);
            this.$emit('del-note', this.note.id);

        },
        toggleDone(todoId, note) {
            noteService.toggleTodo(todoId, note);

            // noteService.getTodoById(todoId, note).then()
        },
        addTodo() {


        },

        deleteTodo() {
            console.log('del');

        }
    }
}
