function husfunction(a) {
	var vaeg='5'
	var tag='1'
	if(a == 'default'){
	}
 else if (a =='pink') {
	 tag='41'
	 vaeg='35:6'
 }
	 else if (a =='blue') {
	 	 vaeg='35:3'
		 tag='22'
	 }
	 else if (a =='green') {
		 vaeg='35:5'
		 tag='35:4'

	 }
	 else if (a =='tnt') {
		 vaeg='46'
		 tag='46'
	 }
 this.box0(vaeg,7,4,7);
 this.up(4);
 this.prism0(tag,7,7);
 this.prism(tag,0,7);
 this.prism(tag,1,6,4);
 this.right(6);
 this.prism(tag,1,6,4);
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
Drone.extend( husfunction );
