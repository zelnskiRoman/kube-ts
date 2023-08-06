import { TCreationResult as ItemCreationResult } from './Item';

/**
 * Type of 'reqistry.item'.
 */
type RegistryItemEvent = {
	create(name: string, type: string): ItemCreationResult;
};

export {
	RegistryItemEvent
};
