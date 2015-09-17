game_unordered_list.onclick = function(event) {
    var target = get_event_target(event);
    get_index(target);    
    make_minus(target); 
    function_minus(target);   
};

game_list_item[0].addEventListener('click',function(){
	game_list_item[1].classList.toggle("closed");
	game_list_item[1].classList.toggle("open");
	//add_game();
});

add_submit.addEventListener('click',function(){
	var name_value = document.getElementById("name_input_box").value;
	add_game(name_value);
	game_list_item[1].classList.toggle("closed");
	game_list_item[1].classList.toggle("open");
	document.getElementById("name_input_box").value='';
});

document.getElementById("name_input_box").addEventListener('keydown', function keydown(){
    
        if(event.keyCode == 13) {
            document.getElementById('add_submit_button').click();
       
    };
});


function_loop_mouse_enter();

game_list_item[0].addEventListener('mouseenter', function(){
		game_list_item[1].classList.remove("closed");
		game_list_item[1].classList.add("open");
});

game_list_item[2].addEventListener('mouseenter', function(){
    	game_list_item[1].classList.add("closed");
    	game_list_item[1].classList.remove("open");
});

game_unordered_list.addEventListener('mouseleave', function(){
    	game_list_item[1].classList.add("closed");
    	game_list_item[1].classList.remove("open");
});


//add_mobile_event_listners('li');
