//prompt to play again//
function repeat(){
	$(".character-img").removeClass("story-mode");
	$(".choice").addClass("choose-char");
	$("#icon-box").text("");
	$(".ending, #romance-box,#romance-hux,#romance-kylo").addClass("off");
	$("#title").text("Welcome to Starkiller Fantasy!");
	$("#event").text("Choose your character:");
	$("#a").append('<img id="hux-icon" src="img/icon-hux.jpg" class="character-img" alt="hux-icon" height="125" width="125"><p>A. General Hux</p>');
	$("#b").append('<img id="kylo-icon" src="img/icon-kylo.jpg" class="character-img" alt="kylo-icon" height="125" width="125"><p>B. Kylo Ren</p>');
	$("#c").append('<img id="mitaka-icon" src="img/icon-mitaka.jpg" class="character-img" alt="mitaka-icon" height="125" width="125"><p>C. Mitaka</p>');
	$("#a").off().click(function(){
		HuxStory();
		});
	$("#b").off().click(function(){
		KyloStory();
		});
	$("#c").off().click(function(){
		MitakaStory();
		});
}

//controls game structure //
function main(){
	$("#title").text("Welcome to Starkiller Fantasy!");
	$("#status-box,.intro,.ending").addClass("off");
	$(".character-img").removeClass("off");
	$(".choice").addClass("choose-char");
	$("#event").text("Choose your character:");
	$("#a").append("<p>A. General Hux</p>");
	$("#b").append("<p>B. Kylo Ren</p>");
	$("#c").append("<p>C. Mitaka</p>");
	$("#a").off().click(function(){
		HuxStory();
		});
	$("#b").off().click(function(){
		KyloStory();
		});
	$("#c").off().click(function(){
		MitakaStory();
		});
}



