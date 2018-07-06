import noteService from '../../service/note-service.js  '


export default {

    props: ['note'],

    template: `

    <section class="note-todo-preview item">
      
            <div class="title-todo">{{note.title}}</div>

<ul class="clean-list main-todo">
    <li v-for="todo in todos">
        <div @click.prevent="toggleDone(todo.id)">{{todo.name}} {{todo.isDone}}</div>
        <!-- <div @click.prevent="!(todo.isDone)">{{todo.name}} {{todo.isDone}}</div> -->
    </li>
</ul>

    </section>

    `,
    created() {

    },
    data() {
        return {

           todos: this.note.todos,
        //    isActice: this.note.isDone,

        }
    },
    methods: {

        toggleDone(id){
            console.log(id);
            

        },


    },
}
