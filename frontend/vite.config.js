import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		historyApiFallback: true,
		proxy: {
			'/register': {
				target: 'http://localhost:3001',
				changeOrigin: true,
			},
			'/logout': {
				target: 'http://localhost:3001',
				changeOrigin: true,
			},
			'/login': {
				target: 'http://localhost:3001',
				changeOrigin: true,
			},
			'/posts': {
				target: 'http://localhost:3001',
				changeOrigin: true,
			},
			'/users': {
				target: 'http://localhost:3001',
				changeOrigin: true,
			},
		},
	},
})
