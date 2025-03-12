export interface BlogsType {
    slug: string,
    excerpt: string,
    title: string,
    id: string,
    image: {
      url: string
    },
    description: {
        text: string
    },
    author: {
        avatart: {
            url:string,
        }
        avatar: string
    }
    category: {
        label: string,
        slug: string
    }
    createdAt: string
}