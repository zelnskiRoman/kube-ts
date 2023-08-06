import { create as createItem } from '../Item';
import { RegistryItemEvent } from '../Types';
import { applyProperty } from '../Utils';

import { ToolConfig, ToolCreationResult } from './types';
import { PROPETIES_SETTERS } from './config';

/**
 * Create Tool.
 * @param {RegistryItemEvent} event - Startup registry.item event instance.
 * @param {ToolConfig} cfg - Tool configuration.
 * @returns {ToolCreationResult}
 */
function create(event: RegistryItemEvent, cfg: ToolConfig): ToolCreationResult {
	const TOOL: ToolCreationResult = createItem(event, cfg) as ToolCreationResult;
	const CONFIG_PROPERTIES: string[] = Object.keys(cfg);
	TOOL.unstackable();

	CONFIG_PROPERTIES.forEach((el: string) => {
		applyProperty({
			item: TOOL,
			propName: el,
			propValue: (cfg as any)[el],
			setters: PROPETIES_SETTERS
		});		
	});

	return TOOL;
}

export {
	create
};
