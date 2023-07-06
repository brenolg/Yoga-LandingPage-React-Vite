import { viteS3 } from 'vite-plugin-s3';
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv  } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  if (command === 'build' && env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY) {
    return {
      plugins: [
        viteS3({
          s3Options: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            region: 'us-east-1'
          },
          s3UploadOptions: {
            Bucket: 'yoga-landing-page',
          },
        })
      ]
    }
  }

  return {
    base: '/Yoga-LandingPage-React-Vite',
    plugins: [
      react(),
    ]
  }
})
