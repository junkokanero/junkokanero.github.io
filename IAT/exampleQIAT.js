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
    			{image : 'glove_M_N.jpg'}
			{image : 'hairclip_F_F_M.jpg'}, 
			{image : 'hat_M_M_M.jpg'}, 
    			{image : 'jacket_F_M_U_N.jpg'}, 
    			{image : 'necktale_M_F_U_N.jpg'}, 
    			{image : 'phonecase_F_N.jpg'}, 
    			{image : 'ring_F_F_M_N.jpg'}, 
    			{image : 'shirt_F_M_U.jpg'}
			{image : 'skirt_F_F_M.jpg'}, 
    			{image : 'sock_F_N.jpg'}, 
    			{image : 'suit_M_M_M.jpg'}, 
    			{image : 'sweater_M_N.jpg'}, 
    			{image : 'swimsuit_M_F_U.jpg'}
       			{image : 'tie_F_M_U.jpg'}, 
    			{image : 'umbrella_M_N.jpg'}, 
    			{image : 'wallet_M_M_M.jpg'}, 
    			{image : 'watch_F_N.jpg'}
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
    		    {image : 'hammer_M_M_M.jpg'}, 
    			{image : 'Picture4.jpg'}, 
    			{image : 'mixer_M_F_U.jpg'}, 
    			{image : 'nailclipper_M_N.jpg'}, 
    			{image : 'pliers_F_M_U.jpg'}, 
    			{image : 'rollingpin_M_F_U.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://junkokanero.github.io/IAT/images/'
			//image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
