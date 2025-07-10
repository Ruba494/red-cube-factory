import {AliasOptions, defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from "vite-tsconfig-paths";
//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src");


// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    base: mode === 'production' ? '/red-cube-factory/' : '/',
    plugins: [
        viteTsconfigPaths(),
        react()
    ],
    resolve: {
        alias: {
            "@": root,
        },
    },
}));
