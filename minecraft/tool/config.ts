/**
 * Item config properties.
 */
enum ConfigFields {
	tier = 'tier',
	attackDamageBaseline = 'attackDamageBaseline',
	speedBaseline = 'speedBaseline',
	attackDamageBonus = 'attackDamageBonu',
	speed = 'speed',
	type = 'type'
}


/**
 * KubeJs available item setters.
 */
enum KubeJsSetter {
	tier = 'tier',
	attackDamageBaseline = 'attackDamageBaseline',
	speedBaseline = 'speedBaseline',
	attackDamageBonus = 'attackDamageBonu',
	speed = 'speed'
}

const PROPETIES_SETTERS: object = {
	[ConfigFields.tier]: [KubeJsSetter.tier],
	[ConfigFields.attackDamageBaseline]: [KubeJsSetter.attackDamageBaseline],
	[ConfigFields.attackDamageBonus]: [KubeJsSetter.attackDamageBonus],
	[ConfigFields.speedBaseline]: [KubeJsSetter.speedBaseline],
	[ConfigFields.speed]: [KubeJsSetter.speed],
};

export {
	ConfigFields,
	KubeJsSetter,
	PROPETIES_SETTERS
};
