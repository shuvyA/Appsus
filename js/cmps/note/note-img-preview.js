
export default {

    props: ['note'],

    template: `

    <section class="note-img-preview item">
      <div class="title-img">{{note.title}}</div>
      
    <img :src=note.src />
            
    </section>

    `,
    created() {

    },
    data() {
        return {


        }
    },
    methods: {


    },


}
