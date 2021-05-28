define(['pipAPI', 'https://junkokanero.github.io/IAT/quiat8.js'], function(APIConstructor, iatExtension){
//define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){ 
   var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Black people', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	//{image : 'black1.jpg'}, 
			{image : 'axe_F_M_U.jpg'}, 
    			{image : 'blender_M_F_U.jpg'}, 
    			{image : 'bottle_F_N.jpg'}, 
    			{image : 'bottleopener_M_N.jpg'}, 
    			{image : 'cake_M_F_U.jpg'}, 
    			{image : 'drill_F_M_U.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'tweezers_F_F_M.jpg'}, 
    			{image : 'tshirt_M_M_M.jpg'}, 
    			{image : 'umbrella_M_N.jpg'}, 
    			{image : 'wallet_M_M_M.jpg'}, 
    			{image : 'watch_F_N.jpg'}, 
    			{image : 'tie_F_M_U.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://junkokanero.github.io/IAT/images/'
			//image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
