define(['pipAPI', 'https://junkokanero.github.io/IAT/quiat8.js'], function(APIConstructor, iatExtension){
//define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){ 
   var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Giyecek', //Will appear in the data.
			title : {
				media : {word : 'Giyecek'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		   	{image : 'bag_M_F_U.jpg'}, 
				{image : 'belt_F_M_U.jpg'}, 
    			{image : 'bonnet_M_N_N.jpg'},  
    			{image : 'coat_M_M_M.jpg'}, 
    			{image : 'eyeglass_F_N_N.jpg'}, 
    			{image : 'glove_M_N_N.jpg'},
				{image : 'hairclip_F_F_M.jpg'}, 
				{image : 'hat_M_M_M.jpg'},  
    			{image : 'necktale_M_F_U.jpg'},  
    			{image : 'ring_F_F_M.jpg'}, 
    			{image : 'shirt_F_M_U.jpg'},
				{image : 'skirt_F_F_M.jpg'}, 
    			{image : 'sock_F_N_N.jpg'}, 
    			{image : 'suit_M_M_M.jpg'}, 
    			{image : 'sweater_M_N_N.jpg'}, 
    			{image : 'swimsuit_M_F_U.jpg'},
       			{image : 'tie_F_M_U.jpg'},  
				{image : 'watch_F_N_N.jpg'},
    			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Alet', //Will appear in the data.
			title : {
				media : {word : 'Alet'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'axe_F_M_U.jpg'}, 
    			{image : 'blender_M_F_U.jpg'}, 
    			{image : 'bottleopener_M_N_N.jpg'},  
    			{image : 'drill_F_M_U.jpg'},
    			{image : 'hammer_M_M_M.jpg'}, 
    			{image : 'metre_M_M_M.jpg'}, 
    			{image : 'mixer_M_F_U.jpg'}, 
    			{image : 'nailclipper_M_N_N.jpg'},
				{image : 'pan_F_F_M.jpg'}, 
    			{image : 'pliers_F_M_U.jpg'}, 
    			{image : 'rollingpin_M_F_U.jpg'}, 
    			{image : 'scissors_M_N_N.jpg'}, 
    			{image : 'screwdriver_M_M_M.jpg'},
    			{image : 'spoon_F_N_N.jpg'},
				{image : 'tooth_F_N_N.jpg'}, 
    			{image : 'tweezers_F_F_M.jpg'}, 
    			{image : 'woodenspoon_F_F_M.jpg'},
				{image : 'fork_F_N_N.jpg'},
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		attribute1 :	{
				name : 'Kadın', //Will appear in the data.
				title : {
				media : {word : 'Kadın'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "or" in the combined block.
			}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
						{image: 'female_2.jpg'},
						{image: 'female_5.jpg'},
						{image: 'female_6.jpg'},
						{image: 'female_7.jpg'},
						{image: 'female_9.jpg'},
						{image: 'female_10.jpg'},
						{image: 'female_13.jpg'},
						{image: 'female_15.jpg'},
						{image: 'female_16.jpg'},
						{image: 'female_18.jpg'},
						{image: 'female_19.jpg'},
						{image: 'female_24.jpg'},
						{image: 'female_25.jpg'},
						{image: 'female_26.jpg'},
						{image: 'female_27.jpg'},
						{image: 'female_28.jpg'},
						{image: 'female_29.jpg'},
						{image: 'female_30.jpg'},
					],
					//Stimulus css
					stimulusCss : {color:'#31940F','font-size':'1.8em'}
				},
				attribute2 :	{
				name : 'Erkek', //Will appear in the data.
				title : {
				media : {word : 'Erkek'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
						{image: 'male_3.jpg'},
						{image: 'male_4.jpg'},
						{image: 'male_6.jpg'},
						{image: 'male_7.jpg'},
						{image: 'male_8.jpg'},
						{image: 'male_9.jpg'},
						{image: 'male_11.jpg'},
						{image: 'male_12.jpg'},
						{image: 'male_13.jpg'},
						{image: 'male_14.jpg'},
						{image: 'male_15.jpg'},
						{image: 'male_18.jpg'},
						{image: 'male_19.jpg'},
						{image: 'male_21.jpg'},
						{image: 'male_22.jpg'},
						{image: 'male_24.jpg'},
						{image: 'male_25.jpg'},
						{image: 'male_26.jpg'},
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
