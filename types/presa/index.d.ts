type Stylable = { className?: string; style?: React.CSSProperties }

declare module "presa" {
  export const Presentation: React.ComponentType<{} & Stylable>

  export type SlideProps = {
    background?: string
    name?: string
  } & Stylable

  export const Slide: React.ComponentType<SlideProps>

  export const Fragment: React.ComponentType<{} & Stylable>
}

declare module "presa/lib/components/slide" {
  export const CenteredLayout: React.ComponentType<{} & Stylable>
}

declare module "presa/lib/blocks" {
  type Language = "javascript" | "typescript" | "reason"

  export const Code: React.ComponentType<{ language?: Language } & Stylable>
}
