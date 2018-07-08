
export default {
    template: `

    <section class="note-add-new">
        <div class="title-new-note">
            new note
        </div>
        <div class="main-new-note">
            
    <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>text</option>
    <option>Todo</option>
    <option>image</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <div>

    
    <input placeholder="new title" v-model="newTitle" />
        <button @click.prevent="addNote">✚</button>

    </div>

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
            // if (this.newTitle === '') return;
            this.$emit('add-note-txt', this.newTitle);
            this.newTitle = '';
            
        },
        addNewTodo() {
            console.log('todo');
            // if (this.newTitle = '') return;
            this.$emit('add-note-todo', this.newTitle)
            this.newTitle = '';
        },
        addNewImage() {
            // if (this.newTitle = '') return;
            console.log('image');
            this.$emit('add-note-img', this.newTitle)
            this.newTitle = '';
        },

        addNote() {
            // console.log('add note',this.note.text);
            if (this.selected === 'text') this.addNewText()
            if (this.selected === 'Todo') this.addNewTodo()
            if (this.selected === 'image') this.addNewImage()
            // this.$emit('add-note', this.currNote);
            // this.note = this.emptyNote();

        },

    },

    components: {

    },

}


