import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "page" | "section"
declare module "C:/Users/vlxdsxd/Documents/GitHub/cv/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}