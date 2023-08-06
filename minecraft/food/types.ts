import { TConfig as ItemConfig, TCreationResult as ItemCreationResult } from '../Item';
import { ConfigFields, KubeJsSetter } from './config';
import { ConfigFields as BConfigFields, KubeJsSetter as BKubeJsSetter } from './builderConfig';
import { ConfigFields as EConfigFields } from './effectConfig';

interface FoodBuilder {
	[BKubeJsSetter.hunger](n: number): FoodCreationResult;
	[BKubeJsSetter.saturation](n: number): FoodCreationResult;
	[BKubeJsSetter.meat](b: boolean): FoodCreationResult;
	[BKubeJsSetter.alwaysEdible](b: boolean): FoodCreationResult;
	[BKubeJsSetter.fastToEat](b: true): FoodCreationResult;
	[BKubeJsSetter.effect](a: any, b: any, c: any, d: any): FoodCreationResult;
	[BKubeJsSetter.removeEffect](s: string): FoodCreationResult;
}

interface EffectSetting {

	/**
	 * The id of the effect.
	 */
	[EConfigFields.mobEffectId]: string;

	/**
	 * The duration of the effect in ticks.
	 */
	[EConfigFields.duration]?: number;

	/**
	 * The amplifier of the effect. 0 means level 1, 1 means level 2, etc.
	 */
	[EConfigFields.amplifier]?: number;

	/**
	 * The probability of the effect being applied. 1 = 100%.
	 */
	[EConfigFields.probability]?: number;
}

interface FoodSettings {

	/**
	 * Sets the hunger restored.
	 * @default 0
	 */
	[BConfigFields.hunger]?: number;

	/**
	 * Sets the saturation modifier.
	 * @note saturation restored is hunger * saturation.
	 * @default 0
	 */
	[BConfigFields.saturation]?: number;

	/**
	 * Is food is meat.
	 * @default false
	 */
	[BConfigFields.meat]?: boolean;

	/**
	 * Is food is always edible.
	 * @default false
	 */
	[BConfigFields.alwaysEdible]?: boolean;

	/**
	 * Is food is fast to eat (having half of the eating time).
	 * @default false
	 */
	[BConfigFields.fastToEat]?: boolean;

	/**
	 * Effect to the food.
	 */
	[BConfigFields.effect]?: EffectSetting;

	/**
	 * Removes an effect from the food.
	 */
	[BConfigFields.removeEffect]?: string;
}

interface FoodConfig extends ItemConfig {

	/**
	 * Set the food properties of the item.
	 * @supported true
	 */
	[ConfigFields.food]: FoodSettings;
}

interface FoodCreationResult extends ItemCreationResult {
	[KubeJsSetter.food](f: any): FoodCreationResult;
}
 
export {
	FoodConfig,
	FoodCreationResult,
	FoodBuilder
};
