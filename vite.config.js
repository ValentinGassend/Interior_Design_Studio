import { defineConfig } from 'vite'
import pxToRemOrVwPlugin from "vite-plugin-px-rem-vw"

export default defineConfig({
    plugins: [
        pxToRemOrVwPlugin({
            type: 'rem',
            options: {
                rootValue: 20
            }
        }),
    ],
})
