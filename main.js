let app = Vue.createApp({
    data(){
        return{
            greetings : 'Hello Vue',
            tasks : [
            /*     {
                    item : 'Learn Javascript',
                    done : false
                },
                {
                    item : 'Learn Vue',
                    done : false
                },
                {
                    item : 'Build something awesome',
                    done : false
                }, */
            ]
        }
    },
    components : ["tfooter", "theader", "titem"],
    methods : {
        addIt(task){
           this.tasks.push({item : task , done : false})
           localStorage.setItem("todos", JSON.stringify(this.tasks))
        },
        pdel(tid){
            //console.log(tid, " It is me")
            this.tasks = this.tasks.filter((item, index) => index != tid)
            localStorage.setItem("todos", JSON.stringify(this.tasks))
        },
        tcheck(tid){
            this.tasks[tid].done = !this.tasks[tid].done
            localStorage.setItem("todos", JSON.stringify(this.tasks))
        }
    },
    created(){
      let todos = JSON.parse(localStorage.getItem("todos"))
    if(todos){
        this.tasks = todos
        }
    }
})



app.component("theader", {
    template : `
        <header>
        <h1> Todo List</h1>
        <nav> <ul class = "nav-items"> 
            <li><a href="#">Home</a></li>
            <li>|</li>
            <li><a href="#">About</a></li>
        </ul></nav>
        </header>
    `
})
/* 
<li class="list-item">
                        <input type="Checkbox"><p>Walk the dog</p>
                        <button>X</button>
                    </li>
                    <li class="list-item">
                        <input type="Checkbox"><p>Play with the Kid</p>
                        <button>X</button>
                    </li>
                    <li class="list-item">
                        <input type="Checkbox"><p>Learn async function in JS</p>
                        <button>X</button>
                    </li>
                    <li class="list-item">
                        <input type="Checkbox"><p>Call the doctor</p>
                        <button>X</button>
                    </li>

*/

app.component("titem", {
    props : ['task', 'id', 'done'],
    emits : ['delTask', 'checkDone'],
    data(){
        return{ 
            isDone : true
        }
    },
    computed : {
        
    },
    template : `
        <li class="list-item" :class="{done : done}" @click="check">
        <p :class="{isdone : done}">{{task}}</p>
        <button @click.self.stop="del">X</button>
        </li>
    `,
    methods : {
        del(){
            //console.log(this.id)
            this.$emit('delTask', this.id)
        },
        check(){
            //console.log(this.id)
            this.$emit('checkDone', this.id)
        },
    },
})
app.component("tfooter",{
    data(){
        return{
            temp : ''
        }
    },
    emits : ['addTodo'],
    template : `
    <footer>
    <div class="footer-section"><input v-model = "temp" type="text" @keyup.enter="addEvent" id="inputField"> <button @click="addEvent">Add</button></div>
    </footer>
    `,
    methods : {
        addEvent(){
            if(this.temp){
                this.$emit('addTodo', this.temp)
                this.temp = ''
            }
        }
    }
})

app.mount('#app')