/**Inspired by CaiYiLiang(github)**/

//Use HTML5 Local Storage to restore date
var STORAGEKEY = "TODOLISTKEY";
var todolist = getLocalStorage();

/*
 *If the browser is not support HTML5 Web Strage,
 *Will return an array directory
*/
function getLocalStorage(){
	if(localStorage.getItem(STORAGEKEY)!==null){
	  //the localStorage will return a string 
	  return JSON.parse(localStorage.getItem(STORAGEKEY));
	}
	else return [];
}



var todoApp = new Vue({
	//to mount the element block
	el:"#todoApp", 
	//declare the variables
	data:{ 
		input:"",
		isComplete:false,
		index:0,
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
           //todolist.push(inputContent); 
           todolist.push({
                content:inputContent,
                isComplete:false
           }); 
           localStorage.setItem("TODOLISTKEY", JSON.stringify(todolist));
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
                if(todoItem===element.content){
                  this.index--;
                  todolist.splice(index,1);

                }
                
            });

            if(todolist.length!==0){
               localStorage.setItem("TODOLISTKEY", JSON.stringify(todolist));
            }
            else {
               localStorage.removeItem("TODOLISTKEY");
            }
            	
             //debug
            console.log("localStorage:");
            console.log(localStorage.TODOLISTKEY);
            console.log("removeTodoItem: " + "current todolist");
            console.log(this.todos);
		},

		completeTodoItem:function(todoItem){
			//debug
            // console.log("completeTodoItem:");
            // console.log(todoItem);
            // console.log(todolist[todoIndex-1]);
            todolist.forEach(function(element,index){
	        	// console.log("removeTodoItem.."+index);
	        	// console.log(element);
                if(todoItem===element.content){
                 todolist[index].isComplete = true;
                 localStorage.setItem("TODOLISTKEY", JSON.stringify(todolist));
                }
                
            });
            
		}

	}
	
	
});