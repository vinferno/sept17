function add_game(name_value){
   var new_game = name_value.toUpperCase();

   new_game = new_game.replace(/^\s+/, '').replace(/\s+$/, '');

   if (new_game===''|| new_game===null){
   	return ;
   }

   for (var i = 0; i < games.length; i++) {   	
   		if (new_game === games[i].innerText){
   		alert("you already have this game");
   		return;
   	}
   }

   var new_li = document.createElement('li');
   new_li.innerText = name_value; 
	game_unordered_list.appendChild(new_li);
	new_li.innerText = name_value.toUpperCase(); 
	new_li.classList.toggle("game_list_item");
};

function get_event_target(event_name) {
    event_name = event_name || window.event;
    return event_name.target || event_name.srcElement; 
};

function get_index(target){
	target_parent= target.parentElement;
	for (i=0;i<target_parent.children.length;i++){
		if (target_parent.children[i] === target){		
		};
	};
};

function make_minus(target){
	//alert("make_minus(this)");
	alert(target);
	function_loop_mouse_enter();
	if (target.parentNode == game_unordered_list){
		if (target.children.length == 0){
			if (target != target_parent.children[0]){
			var new_minus = document.createElement('div');
		  	target.appendChild(new_minus);
			new_minus.innerText = "-"; 
			new_minus.classList.toggle("minus");
			add_minus_listener();
			};
		}else{if(target.children.length == 1){target.removeChild(target.children[0])};}
	};
};

var function_minus = function(target) {  
	if (target.innerText === "-"){ 
	target.parentNode.parentNode.removeChild(target.parentNode);
   }
};

var add_minus_listener = function(){
	var class_minus = document.getElementsByClassName("minus");
    for(var i=0;i<class_minus.length;i++){
        class_minus[i].addEventListener('click', function_minus, false);
    }
};

var start_swipe = 0;
var end_swipe = 0;
var threshold = 100;
var y_threshold = 50;

var function_loop_mouse_enter = function(){
	for (var i= 0;i<game_list_item.length;i++){
		game_list_item[i].addEventListener('mousedown', function(){
		start_swipe = event.clientX;
});

game_list_item[i].addEventListener('mouseup', function(){
			end_swipe = event.clientX;
			if (start_swipe + threshold < end_swipe ){
				alert("swipe right");				
			}
			if (start_swipe > end_swipe + threshold){
				alert('swipe left')
			}
});
	
game_list_item[i].addEventListener('mouseenter', function(event){
		   	for (var i = 0;i < games.length; i++) {
		   			//alert(event.clientX);
			   	if (games[i].children.length===1){
			   		games[i].removeChild(games[i].children[0]);
				   	
				};
   			};
		});
	};
};

game_unordered_list.addEventListener('mouseleave', function(event){
			   	for (var i = 0;i < games.length; i++) {
		   			//alert(event.clientX);
			   	if (games[i].children.length===1){
			   		games[i].removeChild(games[i].children[0]);
				   	
				};
   			};
 });
	
game_list_item[3].addEventListener('touchstart', function(event){ 		
		start_swipe = event.touches[0].pageX;
		start_swipe_y = event.touches[0].pageY;
}); 
game_list_item[3].addEventListener('touchend', function(event){
     		end_swipe = event.changedTouches[0].pageX;
     		end_swipe_y = event.changedTouches[0].pageY;
     		if (start_swipe_y < end_swipe_y){
     			if (end_swipe_y - start_swipe_y > y_threshold){
     				alert("crooked fingers");
     				alert(end_swipe_y - start_swipe_y);
     			}
     		} 
     		if (start_swipe_y > end_swipe_y){
     			if (start_swipe_y - end_swipe_y > y_threshold){
     				alert("crooked fingers");
     				alert(start_swipe_y - end_swipe_y)
     			}
     		}       			
			if (start_swipe + threshold< end_swipe ){
				alert("swipe right");	
				this.remove(this);	
				//make_minus(this.id);	
			}
			if (start_swipe > end_swipe + threshold){
				alert('swipe left')
			}
});

alert('MakeMinusthis3');