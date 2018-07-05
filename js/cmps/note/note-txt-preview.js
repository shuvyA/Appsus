
export default {

    props: ['note'],

    template: `

    <section class="note-txt-preview">
        <h1>preview txt</h1>
    the text is:
    {{note}}
    <!-- {{note.text}}   -->
            
    </section>

    `,
    created(){
console.log('txt');

    },
    data() {
        return {


        }
    },
    methods: {

        
    },
   

}
