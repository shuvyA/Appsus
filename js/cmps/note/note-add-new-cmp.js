
export default {
    template: `

    <section class="note-add-new">
       <h2>  add new </h2> 
        <!-- <label>Choose note:
    <select @change="addNewText" id="ice-cream" name="ice-cream">
        <option value="abcf" >text</option>
        <option value="chocolate">Todo</option>
        <option value="strawberry">image</option>
    </select>
</label> -->



<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>text</option>
  <option>Todo</option>
  <option>image</option>
</select>
<span>Selected: {{ selected }}</span>
<div>

Title
<input v-model="newTitle" />
    <button @click.prevent="addNote">✚</button>

</div>






    </section>

    `,
    data() {
        return {
            // currNote: this.emptyNote(),
            selected: '',
            newTitle: '',


        }
    },
    computed: {
        // add: function addNote() {
        //     if (this.selected === text) this.addNewText()


        // },

    },
    methods: {

        addNewText() {
            console.log('text to toto');

        },
        addNewTodo() {
            console.log('todo');

        },
        addNewImage() {
            console.log('image');

        },

        addNote() {
            // console.log('add note',this.note.text);
            if (this.selected === 'text') this.addNewText()
            if (this.selected === 'Todo') this.addNewTodo()
            if (this.selected === 'image') this.addNewImage()
            // this.$emit('add-note', this.currNote);
            // this.note = this.emptyNote();

        },

        emptyNoteImg() {
            return {
                readAt: '',
                text: 'image one',
                title: 'one img',
                src: '/img/100.jpg',
                id: utilsService.makeId(),
                type: 'note-img-preview',
            };


        },

        emptyNoteText() {
            return {
                readAt: '',
                text: 'image one',
                title: 'one img',
                src: '/img/104.jpg',
                id: utilsService.makeId(),
                type: 'note-img-preview',
            };

        },
        emptyNoteTodo() {

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
    },

    components: {

    },

}


