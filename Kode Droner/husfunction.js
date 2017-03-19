function husfunction(a,loegde,hoede,dybde) {
	var vaeg='5'
	var tag='1'

	if (typeof a == 'undefined' ) {
		a = 'default'
	}
	if (typeof loegde == 'undefined' ) {
		loegde = 7
	}
	if (typeof hoede == 'undefined' ) {
		hoede = 4
	}
	if (typeof dybde == 'undefined' ) {
		dybde = 7
	}

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
	 else if (a =='diamond') {
		vaeg='57'
		tag='57'
}
	else if (a =='lava') {
		vaeg='11'
		tag='11'
}
	if (a =='vand') {
		vaeg='9'
		tag='9'
}


	this.chkpt('houseStart');
  this.up(hoede);
  this.prism(tag, loegde,dybde);
  this.move('houseStart');
  this.right(Math.floor(loegde/2));
  this.box(0,1,2,1);
  this.move('houseStart');
  this.right(loegde)



/*this.box0(vaeg,loegde,hoede,dybde);
this.up(4);
this.prism0(tag,loegde,dybde);
this.prism(tag,loegde,dybde);
this.right(6);
this.prism(tag,1,dybde);
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
*/

if(a!='lava')
{
this.box('58',1,1,1);
}

if(a!='vand' && a!='lava')
{
this.box('58',1,1,1);
this.left(3);
this.up(1);
this.hangtorch(1);
}

};

var Drone = require('drone');
Drone.extend( husfunction );
