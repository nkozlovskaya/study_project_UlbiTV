import webpack from "webpack";
import { BuildOptions } from "./types/configType";

export function buildResolve(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
  };
}
