enum Effect {
	/**
	 * @name Absorption
	 * @description Adds yellow Absorption health hearts.
	 * @intId 22
	 */
	Absorption = 'absorption',

	/**
	 * @name Bad_Luck
	 * @description Decreases the chances of getting valuable loot.
	 * @intId 27
	 */
	BadLuck = 'unluck',

	/**
	 * @name Bad_Omen
	 * @description Causes a group of hostile mobs to attack when a player with Bad Omen enters a village.
	 * @intId 31
	 */
	BadOmen = 'bad_omen',

	/**
	 * @name Blindness
	 * @description Creates a thick black fog.
	 * @intId 15
	 */
	Blindness = 'blindness',

	/**
	 * @name Conduit_Power
	 * @description Improves visibility and mining speed underwater, and adds ability to breathe underwater.
	 * @intId 29
	 */
	ConduitPower = 'conduit_power',

	/**
	 * @name Darkness
	 * @description In periodic pulses, the Darkness effect will lower the overall brightness of the world so that the darkness creeps up against light sources.
	 * @intId 33
	 */
	Darkness = 'darkness',

	/**
	 * @name Dolphins_Grace
	 * @description Increases swimming speed.
	 * @intId 30
	 */
	DolphinsGrace = 'dolphins_grace',

	/**
	 * @name Fire_Resistance
	 * @description Immunity to fire, lava, and direct hits from fire balls.
	 * @intId 12
	 */
	FireResistance = 'fire_resistance',

	/**
	 * @name Glowing
	 * @description Shows a bright white outline around the player or mob that can be seen through solid objects.
	 * @intId 24
	 */
	Glowing = 'glowing',

	/**
	 * @name Haste
	 * @description Speeds up how fast you break blocks.
	 * @intId 3
	 */
	Haste = 'haste',

	/**
	 * @name Health_Boost
	 * @description Adds additional hearts to your base health.
	 * @intId 21
	 */
	HealthBoost = 'health_boost',

	/**
	 * @name Hero_of_the_Village
	 * @description Receive discounted trades from villagers after completing a Raid.
	 * @intId 32
	 */
	HeroOfTheVillage = 'hero_of_the_village',

	/**
	 * @name Hunger
	 * @description Depletes food meter.
	 * @intId 17
	 */
	Hunger = 'hunger',

	/**
	 * @name Instant_Damage
	 * @description Damages instantly.
	 * @intId 7
	 */
	InstantDamage = 'instant_damage',

	/**
	 * @name Instant_Health
	 * @description Heals instantly.
	 * @intId 6
	 */
	InstantHealth = 'instant_health',

	/**
	 * @name Invisibility
	 * @description Invisible to others.
	 * @intId 14
	 */
	Invisibility = 'invisibility',

	/**
	 * @name Jump_Boost
	 * @description Jump higher.
	 * @intId 8
	 */
	JumpBoost = 'jump_boost',

	/**
	 * @name Levitation
	 * @description
	 * @intId 25
	 */
	Levitation = 'levitation',

	/**
	 * @name Luck
	 * @description Increases the chances of getting valuable loot.
	 * @intId 26
	 */
	Luck = 'luck',

	/**
	 * @name Mining_Fatigue
	 * @description Slows down how fast you break blocks.
	 * @intId 4
	 */
	MiningFatigue = 'mining_fatigue',

	/**
	 * @name Nausea
	 * @description Wobbles and warps what you see in the game.
	 * @intId 9
	 */
	Nausea = 'nausea',

	/**
	 * @name Night_Vision
	 * @description Increases brightness level to 15 (see better in dark).
	 * @intId 16
	 */
	NightVision = 'night_vision',

	/**
	 * @name Poison
	 * @description Does damage every 1.25 seconds (can not kill player).
	 * @intId 19
	 */
	Poison = 'poison',

	/**
	 * @name Regeneration
	 * @description Restores half heart every 2.5 seconds.
	 * @intId 10
	 */
	Regeneration = 'regeneration',

	/**
	 * @name Resistance
	 * @description Reduces all damage.
	 * @intId 11
	 */
	Resistance = 'resistance',

	/**
	 * @name Saturation
	 * @description Replenishes food meter.
	 * @intId 23
	 */
	Saturation = 'saturation',

	/**
	 * @name Slow_Falling
	 * @description Slows down how fast you fall and eliminates fall damage.
	 * @intId 28
	 */
	SlowFalling = 'slow_falling',

	/**
	 * @name Slowness
	 * @description Decreases speed.
	 * @intId 2
	 */
	Slowness = 'slowness',

	/**
	 * @name Speed
	 * @description Increases speed.
	 * @intId 1
	 */
	Speed = 'speed',

	/**
	 * @name Strength
	 * @description Increases attack damage (melee attacks).
	 * @intId 5
	 */
	Strength = 'strength',

	/**
	 * @name Water_Breathing
	 * @description Breathe underwater without using up oxygen bar.
	 * @intId 13
	 */
	WaterBreathing = 'water_breathing',

	/**
	 * @name Weakness
	 * @description Decreases attack damage (melee attacks).
	 * @intId 18
	 */
	Weakness = 'weakness',

	/**
	 * @name Wither
	 * @description Does damage every 2 seconds (can kill player).
	 * @intId 20
	 */
	Wither = 'wither'
}

export {
	Effect
};
