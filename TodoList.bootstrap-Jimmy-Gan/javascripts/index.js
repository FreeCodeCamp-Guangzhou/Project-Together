$(function(){
  var STORAGE_KEY = "todolist";
  var todoStorage = {
    fetch: function(){
      var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      return todos;
    },
    save: function(todos){
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  };
  var todos = todoStorage.fetch();
  // 初始 渲染列表
  todosChange(todos, todoStorage);

  // 按下Enter键 后添加 新todo条目
  $(window).on("keydown", function(event) {
    var e = event || window.event;
    var keyCode = e.which ? e.which : e.keyCode;
    if(keyCode === 9){
      if($(".form-control").is(":focus")){
        var newTodo = $(".form-control").val();
        newTodo = newTodo.replace(/^\s*/, "").replace(/\s*$/, "");
        // 输入不能为空
        if(!newTodo){
          return;
        }
        todos.push(newTodo);
        todoStorage.save(todos);
        
        todosChange(todos, todoStorage);

        // 清空 输入表单
        $(".form-control").val("");
      }else{
        $(".form-control").focus();
      }
      return false;
    }
  });
});
// 每次更新todos时，都需要重新渲染列表和添加相关事件及更新对应的localStorage
function todosChange(todos, todoStorage){
  // 渲染todolist
  $(".list-group").html(todolistDOM(todos));
  // 编辑事件
  $(".item").on("keyup", function(event){
    var preVal = $(this).attr("value"),
        newVal = $(this).html();
    todos.splice(todos.indexOf(preVal), 1, newVal);
    todoStorage.save(todos);
    $(this).attr("value", newVal);
  });
  // 删除事件
  $(".badge").on("click", function(){
    var rmtodo = $(this).prev(".item").html();
    todos.splice(todos.indexOf(rmtodo), 1);
    todoStorage.save(todos);
    $(this).parent().remove();
  });
}
// 返回ul下的所有li的DOM字符串
function todolistDOM(todos){
  var htmlstr = "";
  for(var i = 0; i < todos.length; i++){
    htmlstr += '<li class="list-group-item">'
            +     '<span value="'+ todos[i] +'" class="item" contenteditable>'
            +         todos[i]
            +     '</span>'
            +     '<span class="badge">'
            +         '<span class="glyphicon glyphicon-remove"></span>'
            +     '</span>'
            +  '</li>';
  }
  return htmlstr; 
}
