import { TConfig as ItemConfig, TCreationResult as ItemCreationResult } from '../Item';
import { ConfigFields, KubeJsSetter } from './config';

enum Tier {
	wooden = 'wood',
	stone = 'stone',
	iron = 'iron',
	golden = 'gold',
	diamond = 'diamond',
	netherite = 'netherite'
}

enum Type {
	sword = 'sword',
	pickaxe = 'pickaxe',
	axe = 'axe',
	shovel = 'shovel',
	hoe = 'hoe'
}

interface ToolConfig extends ItemConfig {
	[ConfigFields.tier]: Tier;
	[ConfigFields.type]: Type;
	[ConfigFields.attackDamageBaseline]?: number;
	[ConfigFields.attackDamageBonus]?: number;
	[ConfigFields.speedBaseline]?: number;
	[ConfigFields.speed]?: number;
}

interface ToolCreationResult extends ItemCreationResult {
	[KubeJsSetter.tier](t: Tiers): ToolCreationResult;
	[KubeJsSetter.speed](n?: number): ToolCreationResult;
	unstackable(): ToolCreationResult;
}

export {
	Tier,
	Type,
	ToolConfig,
	ToolCreationResult
}
