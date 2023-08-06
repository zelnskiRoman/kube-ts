/**
 * Item config properties.
 */
enum ConfigFields {
	tooltip = 'description',
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
	food = 'food',
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
	food = 'food',
	subtypes = 'subtypes'
}

const PROPETIES_SETTERS: object = {
	[ConfigFields.tooltip]: [KubeJsSetter.tooltip],
	[ConfigFields.rarity]: [KubeJsSetter.rarity],
	[ConfigFields.glow]: [KubeJsSetter.glow],
	[ConfigFields.maxStackSize]: [KubeJsSetter.maxStackSize],
	[ConfigFields.texture]: [KubeJsSetter.texture],
	[ConfigFields.maxDamage]: [KubeJsSetter.maxDamage],
	[ConfigFields.burnTime]: [KubeJsSetter.burnTime],
	[ConfigFields.containerItem]: [KubeJsSetter.containerItem],
	[ConfigFields.group]: [KubeJsSetter.group],
	[ConfigFields.color]: [KubeJsSetter.color],
	[ConfigFields.textureJson]: [KubeJsSetter.textureJson],
	[ConfigFields.modelJson]: [KubeJsSetter.modelJson],
	[ConfigFields.parentModel]: [KubeJsSetter.parentModel],
	[ConfigFields.barColor]: [KubeJsSetter.barColor],
	[ConfigFields.barWidth]: [KubeJsSetter.barWidth],
	[ConfigFields.fireResistant]: [KubeJsSetter.fireResistant],
	[ConfigFields.modifyAttribute]: [KubeJsSetter.modifyAttribute],
	[ConfigFields.useAnimation]: [KubeJsSetter.useAnimation],
	[ConfigFields.useDuration]: [KubeJsSetter.useDuration],
	[ConfigFields.use]: [KubeJsSetter.use],
	[ConfigFields.finishUsing]: [KubeJsSetter.finishUsing],
	[ConfigFields.releaseUsing]: [KubeJsSetter.releaseUsing],
	[ConfigFields.food]: [KubeJsSetter.food],
	[ConfigFields.subtypes]: [KubeJsSetter.subtypes]
};

export {
	ConfigFields,
	KubeJsSetter,
	PROPETIES_SETTERS
};
