const {src, dest, parallel, series, watch} = require('gulp'),
			sass = require('gulp-sass'),
			notify = require('gulp-notify'),
			rename = require('gulp-rename'),
			autoprefixer = require('gulp-autoprefixer'),
			cleanCSS = require('gulp-clean-css'),
			sourcemaps = require('gulp-sourcemaps'),
			browserSync = require('browser-sync').create(),
			fileinclude = require('gulp-file-include'),
			svgSprite = require('gulp-svg-sprite'),
			ttf2woff = require('gulp-ttf2woff'),
			ttf2woff2 = require('gulp-ttf2woff2'),
			fs = require('fs'),
			del = require('del'),
			webpack = require('webpack'),
			webpackStream = require('webpack-stream'),
			uglify = require('gulp-uglify-es').default,
			tiny = require('gulp-tinypng-compress'),
			gutil = require('gulp-util'),
			ftp = require('vinyl-ftp'),
			htmlmin = require('gulp-htmlmin');


const fonts = () => {
	src('./src/fonts/**.ttf')
		.pipe(ttf2woff())
		.pipe(dest('./app/fonts/'))
	return src('./src/fonts/**.ttf')
		.pipe(ttf2woff2())
		.pipe(dest('./app/fonts/'))
}

const cb = () => {}

let srcFonts = './src/scss/_fonts.scss';
let appFonts = './app/fonts/';

const fontsStyle = (done) => {
	let file_content = fs.readFileSync(srcFonts);

	fs.writeFile(srcFonts, '', cb);
	fs.readdir(appFonts, function (err, items) {
		if (items) {
			let c_fontname;
			for (var i = 0; i < items.length; i++) {
				let fontname = items[i].split('.');
				fontname = fontname[0];
				if (c_fontname != fontname) {
					fs.appendFile(srcFonts, '@include font-face("' + fontname + '", "' + fontname + '", 400);\r\n', cb);
				}
				c_fontname = fontname;
			}
		}
	})

	done();
}

const svgSprites = () => {
	return src('./src/img/svg/*.svg')
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: "../sprite.svg"
				}
			}
		}))
		.pipe(dest('./app/img'))
}

const styles = () => {
	return src('./src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', notify.onError()))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(autoprefixer({
			cascade: false,
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./app/css/'))
		.pipe(browserSync.stream());
}

const htmlInclude = () => {
	return src(['./src/index.html'])
		.pipe(fileinclude({
			prefix: '@',
			basepath: '@file'
		}))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('./app'))
		.pipe(browserSync.stream());
}

const imgToApp = () => {
	return src(['./src/img/**/*.jpg', './src/img/**/*.png', './src/img/**/*.jpeg', './src/img/icon/**/*.svg'])
		.pipe(dest('./app/img'))
}

const resources = () => {
	return src('./src/resources/**')
		.pipe(dest('./app'))
}

const clean = () => {
	return del(['app/*'])
}

const scripts = () => {
	return src('./src/js/main.js')
		.pipe(webpackStream({
			mode: 'development',
			output: {
				filename: 'main.js',
			},
			module: {
				rules: [{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}]
			},
		}))
		.on('error', function (err) {
			console.error('WEBPACK ERROR', err);
			this.emit('end'); // Don't stop the rest of the task
		})

		.pipe(sourcemaps.init())
		.pipe(uglify().on("error", notify.onError()))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./app/js'))
		.pipe(browserSync.stream());
}

const watchFiles = () => {
	browserSync.init({
		server: {
			baseDir: "./app"
		}
	});

	watch('./src/scss/**/*.scss', styles);
	watch('./src/index.html', htmlInclude);
	watch('./src/img/**.jpg', imgToApp);
	watch('./src/img/**.png', imgToApp);
	watch('./src/img/**.jpeg', imgToApp);
	watch('./src/img/**.svg', svgSprites);
	watch('./src/resources/**', resources);
	watch('./src/fonts/**.ttf', fonts);
	watch('./src/fonts/**.ttf', fontsStyle);
	watch('./src/js/**/*.js', scripts);
}

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileinclude = htmlInclude;

exports.default = series(clean, parallel(htmlInclude, scripts, fonts, resources, imgToApp, svgSprites), fontsStyle, styles, watchFiles);


const tinypng = () => {
	return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg'])
		.pipe(tiny({
			key: 'bmMKZkG1RfCSsrqD3hXNPGHVrn8kfHPt',
			log: true
		}))
		.pipe(dest('./app/img'))
}

const stylesBuild = () => {
	return src('./src/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', notify.onError()))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(autoprefixer({
			cascade: false,
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(dest('./app/css/'))
}

const scriptsBuild = () => {
	return src('./src/js/main.js')
		.pipe(webpackStream({
				mode: 'development',
				output: {
					filename: 'main.js',
				},
				module: {
					rules: [{
						test: /\.m?js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						}
					}]
				},
			}))
			.on('error', function (err) {
				console.error('WEBPACK ERROR', err);
				this.emit('end'); // Don't stop the rest of the task
			})
		.pipe(uglify().on("error", notify.onError()))
		.pipe(dest('./app/js'))
}

exports.build = series(clean, parallel(htmlInclude, scriptsBuild, fonts, resources, imgToApp, svgSprites), fontsStyle, stylesBuild, tinypng);


// deploy
const deploy = () => {
	let conn = ftp.create({
		host: '',
		user: '',
		password: '',
		parallel: 10,
		log: gutil.log
	});

	let globs = [
		'app/**',
	];

	return src(globs, {
			base: './app',
			buffer: false
		})
		.pipe(conn.newer('')) // путь ftp
		.pipe(conn.dest('')); // путь ftp
}

exports.deploy = deploy;