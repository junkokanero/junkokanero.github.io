define(['pipAPI', 'https://junkokanero.github.io/IAT/quiat8.js'], function(APIConstructor, iatExtension){
//define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){ 
   var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Clothes', //Will appear in the data.
			title : {
				media : {word : 'Clothes'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	//
			{image : 'bag_M_F_U_5_N.jpg'}, 
			{image : 'belt_F_M_U.jpg'}, 
    			{image : 'bonnet_M_N.jpg'}, 
    			{image : 'bracelet_M_F_U_3.jpg'}, 
    			{image : 'coat_M_M_M.jpg'}, 
    			{image : 'eyeglass_F_N.jpg'}, 
    			{image : 'glove_M_N.jpg'},
			{image : 'hairclip_F_F_M.jpg'}, 
			{image : 'hat_M_M_M.jpg'}, 
    			{image : 'jacket_F_M_U_N.jpg'}, 
    			{image : 'necktale_M_F_U_N.jpg'}, 
    			{image : 'phonecase_F_N.jpg'}, 
    			{image : 'ring_F_F_M_N.jpg'}, 
    			{image : 'shirt_F_M_U.jpg'},
			{image : 'skirt_F_F_M.jpg'}, 
    			{image : 'sock_F_N.jpg'}, 
    			{image : 'suit_M_M_M.jpg'}, 
    			{image : 'sweater_M_N.jpg'}, 
    			{image : 'swimsuit_M_F_U.jpg'},
       			{image : 'tie_F_M_U.jpg'}, 
    			{image : 'umbrella_M_N.jpg'}, 
    			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Tools', //Will appear in the data.
			title : {
				media : {word : 'Tools'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'axe_F_M_U.jpg'}, 
    			{image : 'blender_M_F_U.jpg'}, 
    			{image : 'bottle_F_N.jpg'}, 
    			{image : 'bottleopener_M_N.jpg'}, 
    			{image : 'cake_M_F_U.jpg'}, 
    			{image : 'drill_F_M_U.jpg'},
			{image : 'glass_M_N.jpg'}, 
    			{image : 'hammer_M_M_M.jpg'}, 
    			{image : 'metre_M_M_M.jpg'}, 
    			{image : 'mixer_M_F_U.jpg'}, 
    			{image : 'nailclipper_M_N.jpg'},
			{image : 'pan_F_F_M.jpg'}, 
    			{image : 'pliers_F_M_U.jpg'}, 
    			{image : 'rollingpin_M_F_U.jpg'}, 
    			{image : 'scissors_M_N.jpg'}, 
    			{image : 'screwdriver_M_M_M.jpg'},
			{image : 'spatula_F_F_M.jpg'}, 
    			{image : 'spoon_F_N.jpg'},
			{image : 'tooth_F_N.jpg'}, 
    			{image : 'tweezers_F_F_M.jpg'}, 
    			{image : 'woodenspoon_F_F_M.jpg'},
			{image : 'wrench_F_M_U.jpg'}, 
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://junkokanero.github.io/IAT/images/'
			//image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
