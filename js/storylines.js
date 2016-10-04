function HuxStory(){
	var huxEvents = [
		{
			day:"zero",
			message:"You are General Hux. You want to romance Kylo Ren. \
You'll have five days to get his mood above 50. If his mood reaches 50, \
success, he's yours! If his mood drops below zero, you could be in trouble.",
			choice1:"",
			choice2:"Start",
			choice3:""
		},
		{
			day:"One",
			message:"You see Kylo Ren in the hallway.",
			choice1:"Give him a bill for damaged equipment",
			choice2:"Compliment his helmet",
			choice3:"Remind him about Saturday's potluck luncheon"
		},
		{
			day:"Two",
			message:"You stumble upon Kylo Ren strangling Mitaka.",
			choice1:"Help him ",
			choice2:"Order him to leave Mitaka alone",
			choice3:"Call Snoke "
		},
		{
			day:"Three",
			message:"You're at the gym when Kylo Ren storms in.",
			choice1:"Hide!",
			choice2:"Pick up the heaviest gravity-weights",
			choice3:"Compliment his glutes "
		},
		{
			day:"Four",
			message:"It's your weekly meeting with Kylo Ren and Snoke",
			choice1:"Tell Snoke that Kylo forgot to file his reports",
			choice2:"Commend Kylo's job performance",
			choice3:"Brag about Starkiller Base"
		},
		{
			day:"Five",
			message:"It's the first annual Starkiller Base staff potluck.",
			choice1:"Drug Kylo Ren's food",
			choice2:"Cook Kylo's favorite food",
			choice3:"Ask him to slice the cake."
		}
		];
	var huxEndings = [
		"It's the end of the potluck. Kylo Ren takes off his helmet, \
shakes his hair and asks you to stop by his spaceship tonight. Success! Here's to your future wedding!",
		"It's the end of the potluck. Kylo Ren is about to walk past you \
when he stops and says, 'Not a bad party, ' before storming off. At least he doesn't hate you. There's always next week.",
		"It's the end of the potluck. Kylo Ren is angry; \
you cooked his least favorite food and there's frosting on his lightsaber. He's going to tell Snoke what a disaster \
the party was, if he doesn't kill you first!"
		];
	var huxStory = new Story("hrk","Kylo Ren",huxEvents,huxEndings);
	$("#romance-kylo,#hux-icon").removeClass("off");
	$("#hux-icon").appendTo("#icon-box");
	$("#hux-icon, #wrap").addClass("story-mode");
	huxStory.loadPrompt();
	$(".choice").unbind().click(function(){
		huxStory.gameLoop($(this));
	});
};

function KyloStory(){
	var kyloEvents=[
		{
			day:"zero",
			message:"You are Kylo Ren. You want to romance General Hux. \
You'll have five days to get his mood above 50. If his mood reaches 50,\
 success, he's yours! If his mood drops below zero, you could be in trouble.",
			choice1:"Start",
			choice2:"",
			choice3:"",
		},
		{
			day:"One",
			message:"You see General Hux in the hallway",
			choice1:"Make a snarky remark",
			choice2:"Threaten him",
			choice3:"Insult him"
		},
		{
			day:"Two",
			message:"Rebels escaped from you and Hux's forces",
			choice1:"Blame Hux",
			choice2:"Blow off steam by destroying equipment",
			choice3:"Strangle Mitaka"
		},
		{
			day:"Three",
			message:"You walk into the gym and see Hux already there.",
			choice1:"Correct his form",
			choice2:"Make fun of his outfit",
			choice3:"Strike suggestive poses as you workout"
		},
		{
			day:"Four",
			message:"It's your weekly meeting with Snoke and General Hux.",
			choice1:"Tell Snoke about Starkiller Base's flaws",
			choice2:"Brag about how many Rebels you've killed this week",
			choice3:"Commend General Hux's job performance"
		},
		{
			day: "Five",
			message:"It's the annual Starkiller Base staff potluck luncheon.",
			choice1:"Offer to slice the cake with your lightsaber",
			choice2:"Eat desserts suggestively while looking at Hux",
			choice3:"Destroy the dessert table because Mitaka took the last cake slice"
		}	
	];
	var kyloEndings= [
		"After the potluck, Hux gets you alone, leans in close and asks to see your lightsaber. You've seduced General Hux!",
		"As the potluck is winding down, Hux passes you as he's leaving. 'Thank you for not making too much of a mess today,'\
 he says before leaving. Well, it's a start.",
		"It's the middle of the potluck and General Hux is in a rage. You've ruined his party and he's going to tell Snoke \
if he doesn't kill you first!"
	];
	var kyloStory = new Story("krh","General Hux",kyloEvents,kyloEndings);
	$("#romance-hux,#kylo-icon").removeClass("off");
	$("#kylo-icon").appendTo("#icon-box");
	$("#kylo-icon, #wrap").addClass("story-mode");
	kyloStory.loadPrompt();
	$(".choice").unbind().click(function(){
		kyloStory.gameLoop($(this));
	});

};

function MitakaStory(){
	var mitakaEvents=[
		{
			day:"zero",
			message:"You are Mitaka. You want to keep your job, \
so you have to impress your boss. You'll have five days to get his mood above zero. \
If his mood reaches zero or higher success! If his mood stays below zero, you're headed for unemployment.",
			choice1:"Start",
			choice2:"",
			choice3:"",
		},
		{
			day:"One",
			message:"It's your first day as Hux's assistant",
			choice1:"Hover silently until he addresses you",
			choice2:"Trip and fall into his arms",
			choice3:"Wipe the sweat off your hands before introducing yourself "
		},
		{
			day:"Two",
			message:"Hux asks you to file insurance claims for damages to Starkiller Base caused by Kylo Ren.",
			choice1:"Make honest estimates",
			choice2:"Overestimate so Hux can keep the difference",
			choice3:"Forget to file the claims"
		},
		{
			day:"Three",
			message:"You arrive at the office before Hux.",
			choice1:"Organize his holos",
			choice2:"Clean his desk",
			choice3:"Make coffee"
		},
		{
			day:"Four",
			message:"It's the weekly staff meeting",
			choice1:"Take copious notes",
			choice2:"Attend the refreshment table",
			choice3:"Give helpful feedback"
		},
		{
			day:"Five",
			message:"It's the first annual Starkiller Base potluck luncheon.",
			choice1:"Raid the food tables",
			choice2:"Offer to serve food",
			choice3:"Smooze with other officers "
		},
	];	

	var mitakaEndings=[
		"After the potluck, Hux strides up to you. \
' Good job this week. Looks like I don't have to fire you just yet. '",
		"After the potluck, Hux strides up to you. \
After staring down at you for a moment, he says, ' I don't think you're cut out for high command. \
Report to garbage detail next week. '",
		"It's the middle of the potluck and everyone is having a good time.\
 Which makes it extra embarrassing when Hux storms over and tells you you're a worthless nerf-herder and to pack up your things.\
 Time to find another job!"
	];
	var mitakaStory = new Story("mrh","General Hux",mitakaEvents,mitakaEndings);
	$("#romance-hux,#mitaka-icon").removeClass("off");
	$("#mitaka-icon").appendTo("#icon-box");
	$("#mitaka-icon, #wrap").addClass("story-mode");
	mitakaStory.loadPrompt();
	$(".choice").unbind().click(function(){
		mitakaStory.gameLoop($(this));
	});
}; 
