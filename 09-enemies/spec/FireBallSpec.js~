
describe("Clase FireBall", function(){
	var canvas, ctx;

        beforeEach(function(){
	    oldGame = Game;
	    loadFixtures('index.html');

	    canvas = $('#game')[0];
	    expect(canvas).toExist();

	    ctx = canvas.getContext('2d');
	    expect(ctx).toBeDefined();

	    oldGame = Game;
	    SpriteSheet.load (sprites,function(){});
	
    	});

    	afterEach(function(){
        	Game = oldGame;
    	});
	

	
	it("step()", function(){
		var fireball = new FireBall(100,300,-1);
		var dt  = 0.1;
		fireball.step(dt);
		var x = fireball.vx * dt + 200 - fireball.w/2 - 100;
    	var y = fireball.vy * dt - fireball.h + 297.5 ;

		expect(x).toEqual(fireball.x);
		expect(y).toEqual(fireball.y);

		var fireball2 = new FireBall(1,10,1);
		fireball2.board = {remove: function () {}}
		spyOn(fireball2.board, "remove");
		fireball2.step(dt);
		expect(fireball2.board.remove).toHaveBeenCalled();
		
    });

	it("draw()", function(){
		spyOn(SpriteSheet, "draw");
		var fireball = new FireBall(1,10,-1);
		fireball.draw();
		expect(SpriteSheet.draw).toHaveBeenCalled();
		expect(SpriteSheet.draw.calls[0].args[1]).toEqual("fireball");
 		expect(SpriteSheet.draw.calls[0].args[2]).toEqual(fireball.x);
 		expect(SpriteSheet.draw.calls[0].args[3]).toEqual(fireball.y);
		expect(SpriteSheet.draw.calls[0].args[4]).toEqual(fireball.side);
    });

});


   


