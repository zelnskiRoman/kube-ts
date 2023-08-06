import { applyPropertiesArray } from '../Utils';
import { RegistryItemEvent } from '../Types';

import { ItemConfig, ItemCreationResult } from './types';
import { AVAILABLE_SETTERS } from './config';

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

	applyPropertiesArray({
		item: ITEM,
		cfg: cfg,
		setters: AVAILABLE_SETTERS
	});

	return ITEM;
}

export {
	create
};
