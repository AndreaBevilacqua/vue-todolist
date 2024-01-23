console.log('vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'TodoList',
    data: () => ({
        tasks,
    })
})
app.mount('#root');