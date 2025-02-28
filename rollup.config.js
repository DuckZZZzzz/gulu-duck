import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import dartSass from 'sass';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/lib/index.ts',
	output: {
        globals: {
            vue: 'Vue'
        },
		name: 'gulu-duck',
		file: 'dist/lib/gulu-duck.js',
		format: 'umd',
        plugins: [terser()]
	},
	plugins: [
		vue({
			include: /\.vue$/,
		}),
		scss({
            include: /\.scss$/,
            sass: dartSass,
			output: { to: 'gulu-duck.css' }
		}),
		esbuild({
			include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === 'production',
			target: 'es2015',
		})
	]
};