enum ConfigFields {
	food = 'food'
}

enum KubeJsSetter {
	food = 'food'
}

const AVAILABLE_SETTERS: object = {
	[KubeJsSetter.food]: [ConfigFields.food]
};

export {
	ConfigFields,
	KubeJsSetter,
	AVAILABLE_SETTERS
};
