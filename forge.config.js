const { FusesPlugin } = require("@electron-forge/plugin-fuses");
const { FuseV1Options, FuseVersion } = require("@electron/fuses");

module.exports = {
	packagerConfig: {
		icon: "./src/assets/icon.ico",
		asar: true, // Package the app into an ASAR archive
	},
	rebuildConfig: {},
	makers: [
		// Windows .exe maker
		{
			name: "@electron-forge/maker-squirrel",
			config: {
				name: "bachan_records",
				productName: "Bachan Records",
				setupIcon: "./src/assets/icon.ico",
				setupExe: "BachanRecordsInstaller.exe",
				noMsi: true,
			},
		},
	],
	plugins: [
		{
			name: "@electron-forge/plugin-auto-unpack-natives",
			config: {},
		},
		new FusesPlugin({
			version: FuseVersion.V1,
			[FuseV1Options.RunAsNode]: false,
			[FuseV1Options.EnableCookieEncryption]: true,
			[FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
			[FuseV1Options.EnableNodeCliInspectArguments]: false,
			[FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
			[FuseV1Options.OnlyLoadAppFromAsar]: true,
		}),
	],
};
