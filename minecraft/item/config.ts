/**
 * Item config properties.
 */
enum ConfigFields {
	tooltip = 'tooltip',
	texture = 'texture',
	glow = 'isGlowing',
	maxStackSize = 'stackSize',
	rarity = 'rarity',
	maxDamage = 'maxDamage',
	burnTime = 'burnTime',
	containerItem = 'containerItem',
	group = 'group',
	color = 'color',
	textureJson = 'textureJson',
	modelJson = 'modelJson',
	parentModel = 'parentModel',
	barColor = 'barColor',
	barWidth = 'barWidth',
	fireResistant = 'fireResistant',
	modifyAttribute = 'modifyAttribute',
	useAnimation = 'useAnimation',
	useDuration = 'useDuration',
	use = 'use',
	finishUsing = 'finishUsing',
	releaseUsing = 'releaseUsing',
	subtypes = 'subtypes'
}


/**
 * KubeJs available item setters.
 */
enum KubeJsSetter {
	texture = 'texture',
	tooltip = 'tooltip',
	glow = 'glow',
	maxStackSize = 'maxStackSize',
	rarity = 'rarity',
	maxDamage = 'maxDamage',
	burnTime = 'burnTime',
	containerItem = 'containerItem',
	group = 'group',
	color = 'color',
	textureJson = 'textureJson',
	modelJson = 'modelJson',
	parentModel = 'parentModel',
	barColor = 'barColor',
	barWidth = 'barWidth',
	fireResistant = 'fireResistant',
	modifyAttribute = 'modifyAttribute',
	useAnimation = 'useAnimation',
	useDuration = 'useDuration',
	use = 'use',
	finishUsing = 'finishUsing',
	releaseUsing = 'releaseUsing',
	subtypes = 'subtypes'
}

const AVAILABLE_SETTERS: object = {
	[KubeJsSetter.tooltip]: [ConfigFields.tooltip],
	[KubeJsSetter.rarity]: [ConfigFields.rarity],
	[KubeJsSetter.glow]: [ConfigFields.glow],
	[KubeJsSetter.maxStackSize]: [ConfigFields.maxStackSize],
	[KubeJsSetter.texture]: [ConfigFields.texture],
	[KubeJsSetter.maxDamage]: [ConfigFields.maxDamage],
	[KubeJsSetter.burnTime]: [ConfigFields.burnTime],
	[KubeJsSetter.containerItem]: [ConfigFields.containerItem],
	[KubeJsSetter.group]: [ConfigFields.group],
	[KubeJsSetter.color]: [ConfigFields.color],
	[KubeJsSetter.textureJson]: [ConfigFields.textureJson],
	[KubeJsSetter.modelJson]: [ConfigFields.modelJson],
	[KubeJsSetter.parentModel]: [ConfigFields.parentModel],
	[KubeJsSetter.barColor]: [ConfigFields.barColor],
	[KubeJsSetter.barWidth]: [ConfigFields.barWidth],
	[KubeJsSetter.fireResistant]: [ConfigFields.fireResistant],
	[KubeJsSetter.modifyAttribute]: [ConfigFields.modifyAttribute],
	[KubeJsSetter.useAnimation]: [ConfigFields.useAnimation],
	[KubeJsSetter.useDuration]: [ConfigFields.useDuration],
	[KubeJsSetter.use]: [ConfigFields.use],
	[KubeJsSetter.finishUsing]: [ConfigFields.finishUsing],
	[KubeJsSetter.releaseUsing]: [ConfigFields.releaseUsing],
	[KubeJsSetter.subtypes]: [ConfigFields.subtypes]
};

export {
	ConfigFields,
	KubeJsSetter,
	AVAILABLE_SETTERS
};
