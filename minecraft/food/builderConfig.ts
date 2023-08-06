/**
 * Food settings object config.
 */
enum ConfigFields {
	hunger = 'hunger',
	saturation = 'saturation',
	meat = 'meat',
	alwaysEdible = 'alwaysEdible',
	fastToEat = 'fastToEat',
	effect = 'effect',
	removeEffect = 'removeEffect'
}

/**
 * FoodBuilder setters.
 */
enum KubeJsSetter {
	hunger = 'hunger',
	saturation = 'saturation',
	meat = 'meat',
	alwaysEdible = 'alwaysEdible',
	fastToEat = 'fastToEat',
	effect = 'effect',
	removeEffect = 'removeEffect'
}

const SETTERS: object = {
	[KubeJsSetter.hunger]: [ConfigFields.hunger],
	[KubeJsSetter.saturation]: [ConfigFields.saturation],
	[KubeJsSetter.meat]: [ConfigFields.meat],
	[KubeJsSetter.alwaysEdible]: [ConfigFields.alwaysEdible],
	[KubeJsSetter.fastToEat]: [ConfigFields.fastToEat],
	[KubeJsSetter.removeEffect]: [ConfigFields.removeEffect]
};

export {
	ConfigFields,
	KubeJsSetter,
	SETTERS
};
