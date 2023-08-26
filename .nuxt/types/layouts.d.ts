import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "page" | "section"
declare module "/Users/vlxdsxd/Desktop/vlxd project/cv/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}