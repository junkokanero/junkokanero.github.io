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
			{image : 'earring_F_F_M_2_N.jpg'},
			{image : 'wallet_M_M_M.jpg'},
			{image : 'watch_F_N.jpg'},
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
			{image : 'razor_M_M_M.jpg'},
			{image : 'fork_F_N.jpg'},
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
attribute1 :	{
				name : 'Kadın', //Will appear in the data.
				title : {
				media : {word : 'Kadın'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
						{image: 'female_2.jpg'},
						{image: 'female_4.jpg'},
						{image: 'female_5.jpg'},
						{word: 'female_6.jpg'},
						{word: 'female_7.jpg'},
						{word: 'female_9.jpg'},
						{word: 'female_10.jpg'},
						{word: 'female_11.jpg'},
						{word: 'female_12.jpg'},
						{word: 'female_13.jpg'},
						{word: 'female_15.jpg'},
						{word: 'female_16.jpg'},
						{word: 'female_18.jpg'},
						{word: 'female_19.jpg'},
						{word: 'female_20.jpg'},
						{word: 'female_21.jpg'},
						{word: 'female_23.jpg'},
						{word: 'female_24.jpg'},
						{word: 'female_25.jpg'},
						{word: 'female_26.jpg'},
						{word: 'female_27.jpg'},
						{word: 'female_28.jpg'},
						{word: 'female_29.jpg'},
						{word: 'female_30.jpg'},
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
						{word: 'male_3.jpg'},
						{word: 'male_4.jpg'},
						{word: 'male_5.jpg'},
						{word: 'male_6.jpg'},
						{word: 'male_7.jpg'},
						{word: 'male_8.jpg'},
						{word: 'male_9.jpg'},
						{word: 'male_10.jpg'},
						{word: 'male_11.jpg'},
						{word: 'male_12.jpg'},
						{word: 'male_13.jpg'},
						{word: 'male_14.jpg'},
						{word: 'male_15.jpg'},
						{word: 'male_16.jpg'},
						{word: 'male_17.jpg'},
						{word: 'male_18.jpg'},
						{word: 'male_19.jpg'},
						{word: 'male_20.jpg'},
						{word: 'male_21.jpg'},
						{word: 'male_22.jpg'},
						{word: 'male_23.jpg'},
						{word: 'male_24.jpg'},
						{word: 'male_25.jpg'},
						{word: 'male_26.jpg'},
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
