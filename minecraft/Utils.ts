interface ApplyPropCfg {
	item: any,
	propName: string;
	propValue: any;
	setters: object;
}

/**
 * Apply property to the Item.
 * @param {ApplyPropCfg} cfg - apply config.
 */
function applyProperty(cfg: ApplyPropCfg): any {
	const SETTER_NAME: any = (cfg.setters as any)[cfg.propName];

	if (SETTER_NAME && cfg.propValue) {
		(cfg.item[SETTER_NAME] as any)(cfg.propValue);
	}

	return cfg.item;
}

export {
	applyProperty
};
