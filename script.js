console.log('vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    data: () => ({
        tasks: [
            { id: 1, text: 'Fare la spesa'},
            { id: 2, text: 'Lavare i capelli' },
            { id: 3, text: 'Comprare una marca da bollo' },
            { id: 4, text: 'Aggiornare il PC' }
        ],

        newTaskInput: ''

    }),
    methods: {
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => id !== task.id);
        },

        addTask() {
            const newTask = { id: 5, done: false, text: this.newTaskInput}
            this.tasks.push(newTask);
            this.newTaskInput = '';
        }
    }
});
app.mount('#root');