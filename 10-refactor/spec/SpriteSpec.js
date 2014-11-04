describe("Clase Sprite", function(){
	var canvas, ctx;

        beforeEach(function(){
	    oldGame = Game;
	    loadFixtures('index.html');

	    canvas = $('#game')[0];
	    expect(canvas).toExist();

	    ctx = canvas.getContext('2d');
	    expect(ctx).toBeDefined();
	
    	});

	
  	it("draw()", function(){
		spyOn(SpriteSheet, "draw");
		var sprite = new Sprite();
		sprite.draw();
		expect(SpriteSheet.draw).toHaveBeenCalled();
		expect(SpriteSheet.draw.calls[0].args[1]).toEqual(sprite.sprite);
 		expect(SpriteSheet.draw.calls[0].args[2]).toEqual(sprite.x);
 		expect(SpriteSheet.draw.calls[0].args[3]).toEqual(sprite.y);

    });

 	it("merge()", function(){
		var sprite = new Sprite();
		sprite.merge({vx:-50});
		expect(sprite.vx).toBe(-50);
    });
	
	it("setup()", function(){
		var sprite = new Sprite();
		spyOn(SpriteSheet, "merge");
		sprite.setup(sprite.sprite, {vx: -100});
		expect(SpriteSheet.merge).toHaveBeenCalled();
		expect(SpriteSheet.w).toBe(64);
		expect(SpriteSheete.h).toBe(64);
		expect(SpriteSheet.frame).toBe(0);

    });

	

});

