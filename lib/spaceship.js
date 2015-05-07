'use strict';

function Spaceship(name, member, phasers, shields) {
	this.name = name;
	this.phasers = phasers;
	this.shields = shields;
	this.cloaked = false;
	this.warpDrive = "disengaged";
	this.phasersCharge = "uncharged";

	if(member.length > 0){
		this.member = member
		for(var i = 0; i < member.length; i++){
			member[i].currentShip = this;
		};
	}
	else{
		this.member = []
	};

	if (this.member.length === 0){
		this.docked = true
		}
	else {
		this.docked = false
		};

};
