import { defineConfig } from 'vite'
import pxToRemOrVwPlugin from "vite-plugin-px-rem-vw"

export default defineConfig({
    base: '', // Utilise des chemins relatifs pour le déploiement
    plugins: [
        pxToRemOrVwPlugin({
            type: 'rem',
            options: {
                rootValue: 20
            }
        }),
    ],
})
