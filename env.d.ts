/// <reference types="vite/client" />

// webstorm 中 TS 报错解决：TS2307: Cannot find module ./App.vue or its corresponding type declarations.
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
