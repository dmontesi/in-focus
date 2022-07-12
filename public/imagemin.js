const imagemin = require('imagemin'), // The imagemin module.
	webp = require('imagemin-webp'), // imagemin's WebP plugin.
	outputFolder = './img/WebP', // Output folder
	PNGImages = './img/*.png', // PNG images
	JPEGImages = './img/*.jpg'; // JPEG images

// WEBP
// imagemin([PNGImages], outputFolder, {
// 	plugins: [
// 		webp({
// 			lossless: true, // Losslessly encode images
// 		}),
// 	],
// });

// imagemin([JPEGImages], outputFolder, {
// 	plugins: [
// 		webp({
// 			quality: 65, // Quality setting from 0 to 100
// 		}),
// 	],
// });

// JPGs
const imageminMozjpeg = require('imagemin-mozjpeg');
const output = './img/small';

const optimiseJPEGImages = () =>
	imagemin([JPEGImages], output, {
		plugins: [
			imageminMozjpeg({
				quality: 70,
			}),
		],
	});

optimiseJPEGImages().catch((error) => console.log(error));
