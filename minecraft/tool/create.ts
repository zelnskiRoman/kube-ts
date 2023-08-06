import { create as createItem } from '../Item';
import { RegistryItemEvent } from '../Types';
import { applyPropertiesArray } from '../Utils';

import { ToolConfig, ToolCreationResult } from './types';
import { AVAILABLE_SETTERS } from './config';

/**
 * Create Tool.
 * @param {RegistryItemEvent} event - Startup registry.item event instance.
 * @param {ToolConfig} cfg - Tool configuration.
 * @returns {ToolCreationResult}
 */
function create(event: RegistryItemEvent, cfg: ToolConfig): ToolCreationResult {
	const TOOL: ToolCreationResult = createItem(event, cfg) as ToolCreationResult;
	TOOL.unstackable();

	applyPropertiesArray({
		item: TOOL,
		cfg: cfg,
		setters: AVAILABLE_SETTERS
	});

	return TOOL;
}

export {
	create
};
