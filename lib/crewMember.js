'use strict';

function CrewMember(position) {
	this.position = position;
	this.currentShip = "Looking for a Rig";
};

CrewMember.prototype.engageWarpDrive = function () {
	if(this.currentShip === "Looking for a Rig"){
		return "had no effect"
	}
	else if(this.position === "Pilot" && this.currentShip !== "Looking for a Rig"){ this.currentShip.warpDrive = "engaged!"
	}
};
CrewMember.prototype.setsInvisibility = function () {
	if(this.currentShip === "Looking for a Rig"){
		return "had no effect"
	}
	else if(this.position === "Defender" && this.currentShip !== "Looking for a Rig"){this.currentShip.cloaked = true}
};
CrewMember.prototype.chargePhasers = function () {
	if(this.currentShip === "Looking for a Rig"){
		return "had no effect"
	}
	else if(this.position === "Gunner" && this.currentShip !== "Looking for a Rig"){ this.currentShip.phasersCharge = "charged!"}
};
