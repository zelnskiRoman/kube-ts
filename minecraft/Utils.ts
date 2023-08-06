interface ApplyPropCfg {
	item: any,
	setter: string;
	value: any;
}

interface ApplyPropArrayCfg {
	item: any;
	cfg: any;
	setters: object;
}

function applyPropertiesArray(cfg: ApplyPropArrayCfg): any {
	Object.keys(cfg.setters).forEach((el: string) => {
		const VALUE: any = (cfg.cfg as any)[(cfg.setters as any)[el]];

		if (VALUE) {
			(cfg.item as any)[el](VALUE);
		}
	});
}

/**
 * Apply property to the Item.
 * @param {ApplyPropCfg} cfg - apply config.
 */
function applyProperty(cfg: ApplyPropCfg): any {
	if (cfg.item[cfg.setter] && cfg.value) {
		(cfg.item[cfg.setter] as any)(cfg.value);
	}

	return cfg.item;
}

export {
	applyProperty,
	applyPropertiesArray
};
