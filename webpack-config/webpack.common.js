const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");
const PUBLIC_PATH = "/";
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
    const base = {
        entry: {
            client: path.resolve(process.cwd(), "src/client/client.tsx")
        },
        output: {
            filename: "[name].js",
            chunkFilename: "[name].[hash].bundle.js",
            path: path.resolve(process.cwd(), "dist"),
            publicPath: PUBLIC_PATH,
        },
        resolve: {
            alias: {
                Common: path.resolve(process.cwd(), "src/common/"),
                Core: path.resolve(process.cwd(), "src/core/"),
                Mock: path.resolve(process.cwd(), "src/mock"),
                Components: path.resolve(process.cwd(), "src/components"),
                Assets: path.resolve(process.cwd(), "src/assets/"),
                AppConstant$: path.resolve(process.cwd(), "src/app-constant.ts"),
                RoutesConstant$: path.resolve(process.cwd(), "src/routes-constant.ts"),
                Template$: path.resolve(process.cwd(), "src/template.ts"),
                ServerRender$: path.resolve(process.cwd(), "src/server/server.tsx")
            },
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {

            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                {
                    test: /\.(tsx|ts)$/,
                    use: {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                sourceMap: true,
                                modules: true,
                            }
                        }
                    ]
                },
                { test: /\.(png|jpg|gif|svg)$/, use: ["file-loader"] },
                { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"] },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: path.resolve(process.cwd(), "src/assets/"),
                    to: path.resolve(process.cwd(), "dist/assets"),
                    force: true
                }
            ])
        ]
    };

    // server-specific configuration
    if (process.env.platform === 'server') {
        base.target = 'node';
        base.entry = {
            index: path.resolve(process.cwd(), "index.ts")
        };
        base.output.filename = "[name].js";
        base.externals = [nodeExternals()]
    }
    return base;
}