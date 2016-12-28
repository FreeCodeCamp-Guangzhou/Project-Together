var STORAGE_KEY = 'todolist'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
new Vue({
    el:'#app',
    data :{
        msg:'todolist',
        todos:todoStorage.fetch(),
        newTodo:'',
        checked:false
    },
    methods:{
        addTodo:function(){
            // console.log(2222)
            var value = this.newTodo.trim()
            if (!value) {
                return
            }
            this.todos.push({
                title:value,
                isFinsh:false
            })
            this.newTodo = '';
            save(todo)
        },
        toggleItem:function(item){
            item.isFinsh = !item.isFinsh
            console.log(item.isFinsh)
        },
        editTodo:function(){
            console.log(111222)
        },
        removeTodo:function(todo){
            this.todos.splice(this.todos.indexOf(todo),1)
        }
    },
    watch:{
        todos:{
            handler: function (todos) {
                todoStorage.save(todos)
            },
            deep: true
        }
        
    }

})
