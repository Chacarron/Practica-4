/*

  Requisitos: 

  La nave del usuario disparará 2 misiles si está pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendrá un tiempo de recarga de 0,25s, no pudiéndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificación:

  - Hay que añadir a la variable sprites la especificación del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se añadirán
    misiles al tablero de juego en la posición en la que esté la nave
    del usuario. En el código de la clase PlayerSip es donde tienen
    que añadirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creación de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declararán los métodos de
    la clase en el prototipo

*/


describe("Clase PlayerMissile", function(){
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
		var misil = new PlayerMissile(2,150);
		var dt = 0.1;
		misil.step(dt);

		expect(misil.y).toBe(70);
		expect(misil.x).toBe(1);


		misil2 = new PlayerMissile(2,10);
	    misil2.board = {remove : function(){}};
		var board = misil2.board;
	      	
	    spyOn(board, "remove");
	      	
	    misil2.step(0.25);
	      	
	    expect(board.remove).toHaveBeenCalled();
	});	
		

	it("draw()", function(){
		var pm = new PlayerMissile(5,5);
		spyOn(SpriteSheet, "draw");	
		pm.draw(ctx);

		expect(SpriteSheet.draw).toHaveBeenCalled();
		expect(SpriteSheet.draw.calls[0].args[1]).toEqual("missile");
 		expect(SpriteSheet.draw.calls[0].args[2]).toEqual(pm.x);
 		expect(SpriteSheet.draw.calls[0].args[3]).toEqual(pm.y);
    	});


     	

});


   
