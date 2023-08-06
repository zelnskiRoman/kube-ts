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

const AVAILABLE_SETTERS: object = {
	[KubeJsSetter.tier]: [ConfigFields.tier],
	[KubeJsSetter.attackDamageBaseline]: [ConfigFields.attackDamageBaseline],
	[KubeJsSetter.attackDamageBonus]: [ConfigFields.attackDamageBonus],
	[KubeJsSetter.speedBaseline]: [ConfigFields.speedBaseline],
	[KubeJsSetter.speed]: [ConfigFields.speed]
};

export {
	ConfigFields,
	KubeJsSetter,
	AVAILABLE_SETTERS
};
