var harvester = require('harvester');

for(var name in Game.creeps) {
	var creep = Game.creeps[name];

	//if(creep.memory.role == 'harvester') {
		harvester(creep);
	//}

	if(creep.memory.role == 'builder') {
	
		if(creep.carry.energy == 0) {
			creep.moveTo(Game.spawns.Spawn1);
			Game.spawns.Spawn1.transferEnergy(creep);
		}
		else {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if(targets.length) {
				creep.moveTo(targets[0]);
				creep.build(targets[0]);
			}
		}
	}
}