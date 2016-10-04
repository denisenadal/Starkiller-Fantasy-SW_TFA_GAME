class Story{
	constructor(storyline,romanceChar,eventsList,endingList){
		this.storyline = storyline;
		if(storyline==="mrh"){
			this.character= {
			name : romanceChar,
			oldMood : -50,
			mood : -50,
			changeMood : function(val){
				this.mood+=val;},
			};
		}
		else{
			this.character= {
			name : romanceChar,
			oldMood : 0,
			mood : 0,
			changeMood : function(val){
				this.oldMood = this.mood;
				this.mood+=val;},
			};
		}
		this.events=eventsList;
		this.counter=0;
		this.choiceLog="default";
		this.endings=endingList;		
	}
	
	countNext(){
		this.counter = this.counter + 1;
	}
	
	choiceUpdater(elem){
		this.choiceLog =  elem.attr('id').toUpperCase();
	}
	
	checkAnswer(){
		var day = this.getDay();
		var action = this.getChoice();
		if (this.storyline === "hrk"){
			if ( day === "zero"){
				return 0;
			}
			else if (day === "One"){
				if (action === "A"){
					return -10;
				}
				else if(action === "B"){
					return 20;
				}
				else if (action === "C"){
					return 10;
				}
				else{
					return 0;
				}
			}
			else if (day === "Two"){
				if (action === "A"){
					return 20;
				}
				else if(action === "B"){
					return 0;
				}
				else if (action === "C"){
					return -10;
				}
				else{
					return 0;
				}
			}
			else if (day === "Three"){
				if (action === "A"){
					return 10;
				}
				else if(action === "B"){
					return -10;
				}
				else if (action === "C"){
					return 20;
				}
				else{
					return 0;
				}
			}
			else if (day === "Four"){
				if (action === "A"){
					return -10;
				}
				else if(action === "B"){
					return 10;
				}
				else if (action === "C"){
					return 10;
				}
				else{
					return 0;
				}
			}
			else{
			if (action === "A"){
				return 20;
			}
			else if(action === "B"){
				return 20;
			}
			else if (action === "C"){
				return 20;
			}
			else{
				return 0;
			}
		}
		}
		else if (this.storyline === "krh"){
			if ( day === "zero"){
				return 0;
			}
			else if (day === "One"){
				if (action === "A"){
					return 20;
				}
				else if(action === "B"){
					return 10;
				}
				else if (action === "C"){
					return -10;
				}
				else{
					return 0;
				}
			}
			else if (day === "Two"){
				if (action === "A"){
					return -10;
				}
				else if(action === "B"){
					return 0;
				}
				else if (action === "C"){
					return 20;
				}
				else{
					return 0;
				}
			}
			else if (day === "Three"){
				if (action === "A"){
					return 10;
				}
				else if(action === "B"){
					return -10;
				}
				else if (action === "C"){
					return 20;
				}
				else{
					return 0;
				}
			}
			else if (day === "Four"){
				if (action === "A"){
					return -10;
				}
				else if(action === "B"){
					return 10;
				}
				else if (action === "C"){
					return 10;
				}
				else{
					return 0;
				}
			}
			else{
				if (action === "A"){
					return 20;
				}
				else if(action === "B"){
					return 20;
				}
				else if (action === "C"){
					return 20;
				}
				else{
					return 0;
				}
			}
		}
		if (this.storyline === "mrh"){
			if ( day === "zero"){
				return 0;
			}
			else if (day === "One"){
				if (action === "A"){
					return 10;
				}
				else if(action === "B"){
					return -20;
				}
				else if (action === "C"){
					return -10;
				}
				else{
					return 0;
				}
			}
			else if (day === "Two"){
				if (action === "A"){
					return -10;
				}
				else if(action === "B"){
					return 20;
				}
				else if (action === "C"){
					return -20;
				}
				else{
					return 0;
				}
			}
			else if (day === "Three"){
				if (action === "A"){
					return -20;
				}
				else if(action === "B"){
					return -20;
				}
				else if (action === "C"){
					return 10;
				}
				else{
					return 0;
				}
			}
			else if (day === "Four"){
				if (action === "A"){
					return 0;
				}
				else if(action === "B"){
					return -10;
				}
				else if (action === "C"){
					return -20;
				}
				else{
					return 0;
				}
			}
			else{
			if (action === "A"){
				return -20;
			}
			else if(action === "B"){
				return 10;
			}
			else if (action === "C"){
				return 0;
			}
			else{
				return 0;
			}
		}
		}
	}
	
	getDay(){
		var i = this.getCount();
		return this.events[i].day;
	}
	
	getChoice(){
		return this.choiceLog;
	}
	
	getCount(){
		return this.counter;
	}
	
	getMood(){
	return this.character.mood
	}
	
	getOldMood(){
	return this.character.oldMood
	}
	
	loadPrompt(){
		var i = this.getCount();
		if(i===0){
			$("#title").text("Introduction");
			$("#event").text(this.events[i].message);
			$("#a").text("Start");
			$("#a").addClass("btn");
			$("#status-box,#romance-box").addClass("off");
			$(".choice").removeClass("choose-char");
			$(".romance-img").addClass("active");
			$("#b,#c").text("");
		}
		else{
			$("#a").removeClass("btn");
			$("#status-box,#romance-box").removeClass("off");
			$("#title").text("Day "+ this.getDay());
			$("#romance-title").text(this.character.name);
			$("#romance-mood").text("Mood: "+ this.getMood());
			$("#event").text(this.events[i].message+" Do you:");
			$("#a").text("A. "+ this.events[i].choice1);
			$("#b").text("B. "+ this.events[i].choice2);
			$("#c").text("C. "+ this.events[i].choice3);
			this.graphAnimation();
		}
	}
	
	endingGenerator(){
		$("#romance-mood").text("Mood: "+ this.character.mood)
		var finalScore = this.character.mood;
		$(".choice").text("");
		$("#title").text("The End");
		if(this.storyline==="mrh"){
			finalScore+=50;
		}
		this.graphAnimation();
		if (finalScore >= 50){
			$("#event").text(this.endings[0]);
		}
		else if (finalScore > 0 && finalScore < 50){
			$("#event").text(this.endings[1]);
		}
		else{
			$("#event").text(this.endings[2]);
		}
		$(".ending").removeClass("off");
		console.log(finalScore)
	}
	
	gameLoop(obj){
		var $elem = $(obj);
		this.choiceUpdater($elem);
		var score = this.checkAnswer();
		this.character.changeMood(score);
		this.countNext();
		if (this.counter === 6){
			this.endingGenerator();
		}
		else {
			this.loadPrompt();
		}
	}//end gameloop
	
	graphAnimation(){
		var score = this.getMood();
		var oldScore = this.getOldMood();
		var newsize = "0"
	//check if old and new score are positive
		if (score>=0 && oldScore >=0){
			$(".bar-label:first-child").text("0");
			$(".bar-label:last-child").text("50");
			newsize = (score * 2).toString()+"%";
			$("#romance-bar").css({"float":"left"});				
			$("#romance-bar").animate({
     			width: newsize}, {
      			queue: false,
      			duration: 500
    			});
		} 
	//check if old and new score are negative
		else if (score<0 && oldScore <0){
			$(".bar-label:first-child").text("-50");
			$(".bar-label:last-child").text("0");
			newsize = (score * -2).toString()+"%";
			$("#romance-bar").css({"float":"right"});			
			$("#romance-bar").animate({
     			width: newsize}, {
      			queue: false,
      			duration: 500
    			});
		}
	//check if old score is positive and new score is negative
		else if (oldScore>=0 && score <0){
		$("#romance-bar").animate({width: 0},500,
				function(){
					$(".bar-label:first-child").text("-50");
					$(".bar-label:last-child").text("0");
					newsize = (score * -2).toString()+"%";
					$("#romance-bar").css({"float":"right"});			
					$("#romance-bar").animate({
						width: newsize}, {
						duration: 500
						});
    			});
		}
	//check if old score is negative and new score is positive
		else if (oldScore<0 && score >=0){
			$("#romance-bar").animate({width: 0},500,
				function(){
					$(".bar-label:first-child").text("0");
					$(".bar-label:last-child").text("50");
					newsize = (score * 2).toString()+"%";
					$("#romance-bar").css({"float":"left"});			
					$("#romance-bar").animate({
						width: newsize}, {
						duration: 500
						});
    			});
		}
	}	//end GraphAnimation
} //endClass