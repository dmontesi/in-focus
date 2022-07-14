import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant'

// WebP
(async () => {
	await imagemin(['./img/*.{jpg,png}'], {
		destination: './img/build/',
		plugins: [imageminWebp({ quality: 50 }),],
	})

	console.log('Images optimized')
})()

// Jpegs & Pngs
const files = await imagemin(['./img/*.{jpg,png}'], {
	destination: './img/build/',
	plugins: [
		imageminJpegtran(),
		imageminPngquant({
			quality: [0.6, 0.8]
		}),
	]
});