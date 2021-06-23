import type { Ref } from 'vue'

export type MaybeRef<T> = T | Ref<T>

export type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]

export interface LocaleConfig {
  lang: string
  title?: string
  description?: string
  head?: HeadConfig[]
  label?: string
  selectText?: string
}

export interface SiteData<ThemeConfig = any> {
  base: string
  lang: string
  title: string
  description: string
  head: HeadConfig[]
  themeConfig: ThemeConfig
  locales: Record<string, LocaleConfig>
  customData: any
}

export interface Header {
  level: number
  title: string
  slug: string
}

export interface PageData {
  relativePath: string
  title: string
  description: string
  headers: Header[]
  frontmatter: Record<string, any>
  lastUpdated: number
}
