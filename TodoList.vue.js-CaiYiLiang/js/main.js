/**Inspired by CaiYiLiang(github)**/

//Use HTML5 Local Storage to restore date
var STORAGEKEY = "TODOLISTKEY";
var STORAGEKEYID = 0;
var todolist = getLocalStorage();

/*
 *If the browser is not support HTML5 Web Strage,
 *Will return an array directory
*/
function getLocalStorage(){
	if(localStorage.getItem(STORAGEKEY)!==null){
	  console.log("getLocalStorage ");
	  console.log(typeof localStorage.getItem(STORAGEKEY));
	  console.log(localStorage.getItem(STORAGEKEY));
	  console.log("todolist ");
	  console.log(localStorage.getItem(STORAGEKEY).split(","));
	  //the localStorage will return a string 
	  return localStorage.getItem(STORAGEKEY).split(",");
	}
	else return [];
}



var todoApp = new Vue({
	//to mount the element block
	el:"#todoApp", 
	//declare the variables
	data:{ 
		input:"",
		iscomplete:false,
		todos:todolist
	},

	methods:{
		/*
		 * Be aware the difference of 'this'
         * when use ES6 arrow function
		*/
		addTodoItem:function(inputContent){
		   //to validate input value
		   var inputContent = inputContent.trim();
		   if(!inputContent){return;}
		   //save user's input
		   //data:todos refresh automatically
           todolist.push(inputContent); 
           console.log(todolist);
           localStorage.setItem("TODOLISTKEY", todolist);
           //clear up the input bar
           this.input=" "; 
           
           //debug
           // console.log("localStorage:");
           // console.log(localStorage.TODOLISTKEY);
           // console.log("addTodoItem: " + "current todolist");
           // console.log(this.todos);
		},

		removeTodoItem:function(todoItem){
			//remove according item and todolist refresh
            todolist.forEach(function(element,index){
            	console.log("removeTodoItem.."+index);
            	console.log(element);
                if(todoItem===element){
                  console.log("removeTodoItem..ing"+index);
                  console.log(todolist);
                  todolist.splice(index,1);

                }
                
            });

            if(todolist.length!==0){
               localStorage.setItem("TODOLISTKEY", todolist);
            }
            else {
               localStorage.removeItem("TODOLISTKEY");
            }
            	
             //debug
            console.log("localStorage:");
            console.log(localStorage.TODOLISTKEY);
            console.log("removeTodoItem: " + "current todolist");
            console.log(this.todos);
		}

	}
	
	
});