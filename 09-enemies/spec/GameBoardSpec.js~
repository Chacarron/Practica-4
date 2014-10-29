/*
  En el anterior prototipo (06-player), el objeto Game permite
  gestionar una colección de tableros (boards). Los tres campos de
  estrellas, la pantalla de inicio, y el sprite de la nave del
  jugador, se añaden como tableros independientes para que Game pueda
  ejecutar sus métodos step() y draw() periódicamente desde su método
  loop(). Sin embargo los objetos que muestran los tableros no pueden
  interaccionar entre sí. Aunque se añadiesen nuevos tableros para los
  misiles y para los enemigos, resulta difícil con esta arquitectura
  pensar en cómo podría por ejemplo detectarse la colisión de una nave
  enemiga con la nave del jugador, o cómo podría detectarse si un
  misil disparado por la nave del usuario ha colisionado con una nave
  enemiga.


  Requisitos:

  Este es precisamente el requisito que se ha identificado para este
  prototipo: diseñar e implementar un mecanismo que permita gestionar
  la interacción entre los elementos del juego. Para ello se diseñará
  la clase GameBoard. Piensa en esta clase como un tablero de un juego
  de mesa, sobre el que se disponen los elementos del juego (fichas,
  cartas, etc.). En Alien Invasion los elementos del juego serán las
  naves enemigas, la nave del jugador y los misiles. Para el objeto
  Game, GameBoard será un board más, por lo que deberá ofrecer los
  métodos step() y draw(), siendo responsable de mostrar todos los
  objetos que contenga cuando Game llame a estos métodos.

  Este prototipo no añade funcionalidad nueva a la que ofrecía el
  prototipo 06.


  Especificación: GameBoard debe

  - mantener una colección a la que se pueden añadir y de la que se
    pueden eliminar sprites como nave enemiga, misil, nave del
    jugador, explosión, etc.

  - interacción con Game: cuando Game llame a los métodos step() y
    draw() de un GameBoard que haya sido añadido como un board a Game,
    GameBoard debe ocuparse de que se ejecuten los métodos step() y
    draw() de todos los objetos que contenga

  - debe ofrecer la posibilidad de detectar la colisión entre
    objetos. Un objeto sprite almacenado en GameBoard debe poder
    detectar si ha colisionado con otro objeto del mismo
    GameBoard. Los misiles disparados por la nave del jugador deberán
    poder detectar gracias a esta funcionalidad ofrecida por GameBoard
    cuándo han colisionado con una nave enemiga; una nave enemiga debe
    poder detectar si ha colisionado con la nave del jugador; un misil
    disparado por la nave enemiga debe poder detectar si ha
    colisionado con la nave del jugador. Para ello es necesario que se
    pueda identificar de qué tipo es cada objeto sprite almacenado en
    el tablero de juegos, pues cada objeto sólo quiere comprobar si ha
    colisionado con objetos de cierto tipo, no con todos los objetos.

*/


describe("Clase GameBoard", function(){
	var canvas, ctx;

        beforeEach(function(){
	    oldGame = Game;
	    loadFixtures('index.html');

	    canvas = $('#game')[0];
	    expect(canvas).toExist();

	    ctx = canvas.getContext('2d');
	    expect(ctx).toBeDefined();
	
    	});

	it("GameBoard.add()", function(){
		var board = new GameBoard();
   
		var foo = "foo";
		board.add(foo);
        	expect(board.objects[0]).toEqual("foo");
 
    	});

	it("GameBoard.remove()", function(){
		var board = new GameBoard();

		var foo = board.add("foo");
		expect(board.objects.length).toEqual(1);

		board.resetRemoved();
		board.remove(foo);
		board.finalizeRemoved();

		expect(board.objects.length).toEqual(0);
		expect(board.objects[0]).toEqual(undefined);
    	});

	it("step()", function(){
		var board = new GameBoard();
		var dt = 0.5;
		spyOn(board,"iterate");
		board.step(dt);
		expect(board.iterate).toHaveBeenCalledWith("step",dt);
		
    	});

	it("draw()", function(){
		var board = new GameBoard();
		var ctx = "dummy";
		spyOn(board,"iterate");
		board.draw(ctx);
		expect(board.iterate).toHaveBeenCalledWith("draw",ctx);
		
    	});


	it("iterate()", function(){
		var board = new GameBoard();
		var foo = {func : function(){}};
		board.add(foo);
		spyOn(foo,"func"); 
		board.iterate("func");
	
		expect(foo.func).toHaveBeenCalled();
		
    	});

	it("detect()", function(){
		var board = new GameBoard();
		var o1 = "o1";
		var o2 = "o2";
		var func = function(obj){
			obj == "Soy " + obj;
		}
		board.add(o1);
		board.add(o2);

		spyOn(board,"detect");
		board.detect(func);

		expect(board.detect).toHaveBeenCalledWith(func);
		expect(board.detect).toBeTruthy();	

    	});


	it("overlap()", function(){
		var board = new GameBoard();
		var o1 = {w:1,h:1,x:1,y:1};
		var o2 = {w:1,h:2,x:1,y:1};
		var o3 = {w:1,h:2,x:3,y:4};
		expect(board.overlap(o1,o2)).toBeTruthy();
		expect(board.overlap(o1,o3)).toBeFalsy();
    	});

		
	it("collide()", function(){
		var board = new GameBoard();
		var o1 = {w:1,h:1,x:1,y:1};
		var o2 = {w:1,h:1,x:1,y:1};
		var o3 = {w:3,h:3,x:3,y:3};

		board.add(o1);
		board.add(o2);
		board.add(o3);
		expect(board.collide(o1)).toBeTruthy();
		expect(board.collide(o3)).toBeFalsy();

    	});

	
	

});


   
