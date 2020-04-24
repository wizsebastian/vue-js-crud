const app = new Vue({
    el: '#app',
    data: {
        title: 'TO DO',
        tasks: [],
        newTask: '',
    },
    methods:{
        addTask(){
            this.tasks.push(
                {
                    name: this.newTask,
                    status: false
                });
            this.newTask = '';
            this.setItemAtLocalStorage();
        },
        editTask(index){
            this.tasks[index].status = !this.tasks[index].status;
            this.setItemAtLocalStorage();
        }, 
        deleteTask(index){
             this.tasks.splice(index, 1);
             this.setItemAtLocalStorage();
        }, 
        setItemAtLocalStorage(){
            window.localStorage.setItem('crud-with-vue', JSON.stringify(this.tasks))
        }
    }, 
    created: function(){
        let dataDB = JSON.parse(window.localStorage.getItem('crud-with-vue'));
        !dataDB ? this.tasks = [] : this.tasks = dataDB;
    }
})