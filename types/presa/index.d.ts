type Stylable = { className?: string; style?: React.CSSProperties }

declare module "presa" {
  export const Presentation: React.ComponentType<{} & Stylable>

  export const Slide: React.ComponentType<
    {
      background?: string
      name?: string
    } & Stylable
  >

  export const Fragment: React.ComponentType<{} & Stylable>
}

declare module "presa/lib/components/slide" {
  export const CenteredLayout: React.ComponentType<{} & Stylable>
}

declare module "presa/lib/blocks" {
  export const Code: React.ComponentType<{} & Stylable>
}
