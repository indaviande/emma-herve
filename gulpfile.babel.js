import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import atimport from 'postcss-import';
import del from 'del';
import named from 'vinyl-named';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
const PRODUCTION = yargs.argv.prod;

const srcFolder = 'src';
const destFolder = 'static';
const bundleCssFile = srcFolder + '/scss/app.scss';
const bundleJsFile = srcFolder + '/js/bundle.js';
const tailwindConfig = './tailwind.config.js';

const server = browserSync.create();

export const clean = () => del([destFolder]);

export const styles = () => {
	return src(bundleCssFile)
		.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([atimport(), tailwindcss(tailwindConfig), postcssPresetEnv({ stage: 1 })]))
		.pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
		.pipe(gulpif(PRODUCTION, cleanCss({ compatibility: 'ie8' })))
		.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
		.pipe(dest(destFolder + '/css'))
		.pipe(server.stream());
};
export const images = () => {
	return src([
		srcFolder + '/images/*.{jpg,jpeg,png,svg,ico,gif}',
		srcFolder + '/images/**/*.{jpg,jpeg,png,svg,ico,gif}'
	])
		.pipe(gulpif(PRODUCTION, imagemin()))
		.pipe(dest(destFolder + '/images'));
};
export const copy = () => {
	return src([
		srcFolder + '/**/*',
		'!' + srcFolder + '/{images,js,scss,css}',
		'!' + srcFolder + '/{images,js,scss,css}/**/*'
	]).pipe(dest(destFolder));
};
export const scripts = () => {
	return src(bundleJsFile)
		.pipe(named())
		.pipe(
			webpack({
				module: {
					rules: [
						{
							test: /\.js$/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: ['@babel/preset-env']
								}
							}
						}
					]
				},
				mode: PRODUCTION ? 'production' : 'development',
				devtool: !PRODUCTION ? 'inline-source-map' : false,
				output: {
					filename: '[name].js'
				}
			})
		)
		.pipe(gulpif(PRODUCTION, uglify()))
		.pipe(dest(destFolder + '/js'));
};
export const watchForChanges = () => {
	watch(srcFolder + '/scss/**/*.scss', styles);
	watch(srcFolder + '/images/**/*.{jpg,jpeg,png,svg,gif}', series(images));
	watch(
		[
			srcFolder + '/**/*',
			'!' + srcFolder + 'src/{images,js,scss}',
			'!' + srcFolder + 'src/{images,js,scss}/**/*'
		],
		series(copy)
	);
	watch(srcFolder + '/js/**/*.js', series(scripts));
};

export const dev = series(clean, parallel(styles, images, copy, scripts), watchForChanges);
export const build = series(clean, parallel(styles, images, copy, scripts));
export default dev;
