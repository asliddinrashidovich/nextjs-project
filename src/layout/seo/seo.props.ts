import { ReactNode } from "react";

export interface SeoProps{  
    children: ReactNode
    author?: string
    metaDescription?: string
    metaKeywords?: string
    metaTitle?: string
}