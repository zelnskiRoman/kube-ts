import { applyProperty } from '../Utils';
import { RegistryItemEvent } from '../Types';

import { ItemConfig, ItemCreationResult } from './types';
import { PROPETIES_SETTERS } from './config';

/**
 * Create Item.
 * @param {RegistryItemEvent} event - Startup registry.item event instance.
 * @param {ItemConfig} cfg - Item configuration.
 * @returns {ItemCreationResult}
 */
function create(event: RegistryItemEvent, cfg: ItemConfig): ItemCreationResult {
	const ITEM: ItemCreationResult = event.create(cfg.name.system, cfg.type || 'basic');

	if (cfg.name.display) {
		ITEM.displayName(cfg.name.display);
	}

	const CONFIG_VALUES: string[] = Object.keys(cfg);
	
	CONFIG_VALUES.forEach((el: string) => {
		applyProperty({
			item: ITEM,
			propName: el,
			propValue: (cfg as any)[el],
			setters: PROPETIES_SETTERS
		})
	});

	return ITEM;
}

export {
	create
};
