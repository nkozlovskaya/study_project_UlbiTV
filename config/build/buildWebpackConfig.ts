import { BuildOptions } from "./types/configType";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
