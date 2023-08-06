import { ConfigFields, KubeJsSetter } from './config';

interface ItemCreationResult {
	[KubeJsSetter.maxStackSize](n: number): ItemCreationResult;
	[KubeJsSetter.maxDamage](n: number): ItemCreationResult;
	[KubeJsSetter.burnTime](n: number): ItemCreationResult;

	[KubeJsSetter.containerItem](a: any): ItemCreationResult; // not supported
	[KubeJsSetter.subtypes](f: Function): ItemCreationResult; // not supported

	[KubeJsSetter.rarity](r: Rarity): ItemCreationResult;
	[KubeJsSetter.glow](b: boolean): ItemCreationResult;
	[KubeJsSetter.tooltip](s: string): ItemCreationResult;
	[KubeJsSetter.group](s: string): ItemCreationResult;

	[KubeJsSetter.color](obj: { index?: number, color?: number, callback?: Function  }): ItemCreationResult; // not supported
	[KubeJsSetter.texture](s: string): ItemCreationResult; // not supported
	[KubeJsSetter.textureJson](s: string): ItemCreationResult; // not supported
	[KubeJsSetter.modelJson](s: string): ItemCreationResult; // not supported
	[KubeJsSetter.parentModel](s: string): ItemCreationResult; // not supported
	[KubeJsSetter.barColor](f: Function): ItemCreationResult; // not supported
	[KubeJsSetter.barWidth](f: Function): ItemCreationResult; // not supported

	[KubeJsSetter.fireResistant](b: boolean): ItemCreationResult;

	[KubeJsSetter.modifyAttribute](a: any): ItemCreationResult; // not supported
	[KubeJsSetter.useAnimation](a: any): ItemCreationResult; // not supported
	[KubeJsSetter.useDuration](a: any): ItemCreationResult; // not supported
	[KubeJsSetter.use](a: any): ItemCreationResult; // not supported
	[KubeJsSetter.finishUsing](a: any): ItemCreationResult; // not supported
	[KubeJsSetter.releaseUsing](a: any): ItemCreationResult; // not supported

	displayName(s: string): ItemCreationResult;
}

interface ItemConfig {
	/**
	 * Item name.
	 */
	name: {
		system: string,
		display?: string
	};

	type?: string;

	/**
	 * Items's stack size.
	 * @supported true
	 * @default 64
	 */
	[ConfigFields.maxStackSize]?: number;

	/**
	 * Item's max damage.
	 * @supported true
	 * @default 0 (No durability)
	 */
	[ConfigFields.maxDamage]?: number;

	/**
	 * Item's burn time
	 * @supported true
	 * @default 0 (Not a fuel)
	 */
	[ConfigFields.burnTime]?: number;

	/**
	 * Item's container item, e.g. a bucket for a milk bucket.
	 * @supported false
	 */
	[ConfigFields.containerItem]?: number;

	/**
	 * Item's Subtypes.
	 * The function should return a collection of item stacks, each with a different subtype.
	 * Each subtype will appear as a separate item in JEI and the creative inventory.
	 * @supported false
	 */
	[ConfigFields.subtypes]?: Function;

	/**
	 * Item's rarity.
	 * @supported true
	 * @default Rariry.COMMON
	 */
	[ConfigFields.rarity]?: Rarity;

	/**
	 * Makes the item glow like enchanted, even if it's not enchanted.
	 * @supported true
	 * @default false
	 */
	[ConfigFields.glow]?: boolean;

	/**
	 * Item's tooltip.
	 * @supported true
	 */
	[ConfigFields.tooltip]?: string;

	/**
	 * Sets the group of the item, e.g. 'building_blocks' for the 'Blocks' tab.
	 * @supported true
	 */
	[ConfigFields.group]?: string;

	/**
	 * Colorizes item's texture of the given index. Index is used when you have multiple layers, e.g. a crushed ore (of rock + ore).
	 * @supported false
	 */
	[ConfigFields.color]?: { index?: number, color?: number, callback: Function };

	/**
	 * Texture path.
	 * @example mobbo:item/lava
	 * @exampleDitails This texture would be located at kubejs/assets/mobbo/textures/item/lava.png.
	 */
	[ConfigFields.texture]?: string;

	/**
	 * Item's texture json.
	 * @supported false
	 */
	[ConfigFields.textureJson]?: string;

	/**
	 * Item's model json.
	 * @supported false
	 */
	[ConfigFields.modelJson]?: string;

	/**
	 * Item's model (parent).
	 * @supported false
	 */
	[ConfigFields.parentModel]?: string

	/**
	 * Determines the color of the item's durability bar.
	 * @supported false
	 * @default Vanilla behavior.
	 */
	[ConfigFields.barColor]?: Function;

	/**
	 * Determines the width of the item's durability bar.
	 * The function should return a value between 0 and 13 (max width of the bar).
	 * @supported false
	 * @default Vanilla behavior.
	 */
	[ConfigFields.barWidth]?: Function;

	/**
	 * Makes the item fire resistant like netherite tools.
	 * @supported true
	 * @default false
	 */
	[ConfigFields.fireResistant]?: boolean;

	/**
	 * Attribute modifier to the item.
	 * An attribute modifier is something like a damage boost or a speed boost.
	 * On tools, they're applied when the item is held, on armor, they're applied when the item is worn.
	 * @supported false
	 */
	[ConfigFields.modifyAttribute]?: any;

	/**
	 * Animation of the item when used, e.g. eating food.
	 * @supported false
	 */
	[ConfigFields.useAnimation]?: any;

	/**
	 * The duration when the item is used.
	 * For example, when eating food, this is the time it takes to eat the food.
	 * This can change the eating speed, or be used for other things (like making a custom bow).
	 * @supported false
	 */
	[ConfigFields.useDuration]?: any;

	/**
	 * Determines if player will start using the item.
	 * For example, when eating food, returning true will make the player start eating the food.
	 * @supported false
	 */
	[ConfigFields.use]?: any;

	/**
	 * When players finish using the item.
	 * This is called only when `useDuration` ticks have passed.
	 * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
	 * @supported false
	 */
	[ConfigFields.finishUsing]?: any;
	
	/**
	 * When players did not finish using the item but released the right mouse button halfway through.
	 * An example is the bow, where the arrow is shot when the player releases the right mouse button.
	 * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
	 * @supported false
	 */
	[ConfigFields.releaseUsing]?: any;
}

enum Rarity {
	COMMON = 'COMMON',
	UNCOMMON = 'UNCOMMON',
	RARE = 'RARE',
	EPIC = 'EPIC'
}

export {
	ItemCreationResult,
	ItemConfig,
	Rarity
}
