console.log('vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'TodoList',
    data: () => ({})
})
app.mount('#root');