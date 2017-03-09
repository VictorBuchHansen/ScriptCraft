function hus() {
	
	
	this.box0('5',7,4,7);
	this.up(4);
	this.prism0('1',7,7);	
	this.prism('1',0,7);
	this.prism('1',1,6,4);
	this.right(6);
	this.prism('1',1,6,4);
	this.down(4);
	this.left(5);
	this.box('0',1,2,1);
	this.up(1);
	this.right(2);
	this.box('102',1,1,1);
	this.right(2);
	this.box('102',1,1,1);
	this.fwd(5);
	this.down(1);
	this.box('58',1,1,1);
	this.left(3);
	this.up(1);
	this.hangtorch(1);
	
};

var Drone = require('drone');
Drone.extend( hus );
0
