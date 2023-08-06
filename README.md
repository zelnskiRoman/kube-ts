# KubeTS
KubeTs is a library written in TypeScript, which goal is to make developing KubeJs Mod as easy as possible.
> The project is in early development stage and provides a minimum set of functions for developing scripts for KubeJs Mods.

# Usage
Create your own working directory and configure it like example below:
```
| dir: working_directory
| --- file: startup_script.ts
```

Now, open terminal from the working directory and run:
```
npm init
npm install webpack webpack-cli typescript tsconfig-paths-webpack-plugin ts-loader
tsc -init
```

Create **webpack.config.js** in your working directory. Configure it using default configuration example below:
```
const webpack = require("webpack");
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'production',
	optimization: {
		minimize: true 
	},
	entry: { // <- Entry points
        './server_script.js': './server_script.ts',
    },
    output:{
        path: path.resolve('<PATH>/kubejs/startup_scripts'), // <- Provide a path to an instance folder
        filename: "[name]""
    },
    resolve: {
        extensions: [".ts", ".js"],
        plugins: [new TsconfigPathsPlugin({})]
    },
    module: {
        rules: [{ 
            test: /\.ts?$/,
            loader: "ts-loader",
            options: {
                transpileOnly: true
            }
        }]
    }
};
```

Now, add KubeTs to your working directory by clonning this repo:
```
git clone https://github.com/zelnskiRoman/kube-ts.git
```

By this point, your working directory should look like an example below:
```
| dir: working_directory
| --- dir: kube-ts
| --- file: startup_script.ts
| --- file: webpack.config.js
| --- file: package.json
| --- file: package-lock.json
| --- file: tsconfig.json
```

In **tsconfig.json** file configure paths property:
```
"paths": {
    "@kubets/minecraft": ["kube-ts/minecraft"] // <- Minecraft module.
}
```
# Item
### Item creation:
Import **Item** object from **@kubets/minecraft** module in your current script:
```
import { Item } from '@kubets/minecraft';

(StartupEvents as any).registry('item', (event: any) => { // <- StartupEvents is a KubeJs built in event.
/* Use CREATE method and pass required fields to create an item */
	Item.create(event, {
		name: { // <- Required field.
			system: 'kube-ts_item', // <- Item system name
			display: 'KubeTs Item' // <- Item display name
		},	
		isGlowing: true,
		stackSize: 3,
		description: 'This is first description.',
		rarity: Item.Rarity.EPIC // <- Item.Rarity is an enum of availbale rariry values.
	});
}
```
> In your IDE look for available config fields and available config constants.