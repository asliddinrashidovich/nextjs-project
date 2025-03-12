import { BlogsType } from "@/interfaces/blog.interface"
import { CategoryType } from "@/interfaces/category.interface"
import { request, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_HIGHRAPH_ENDPOINT as string

export const BlogService = {
    async getAllBlogs() {
        const query = gql`
            query MyQuery {
                blogs {
                    slug
                    excerpt
                    title
                    id
                    image {
                        url
                    }
                    description {
                        text
                    }
                    author {
                    avatart {
                        url
                    }
                    avatar
                    }
                    category {
                        label
                        slug
                    }
                }
                }
        `
        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query)
        return result.blogs
    },

    async getLatestBlogs() {
        const query = gql`
            query LatestBlog {
                blogs(last: 2) {
                    slug
                    title
                    id
                    author {
                    avatart {
                        url
                    }
                    avatar
                    }
                    createdAt
                    image {
                        url
                    }
                }
            }
        `
        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query)
        return result.blogs
    },

    async getCategory() {
        const query = gql`
            query Category {
                categories {
                    label
                    slug
                }
            }
        `

        const result = await request<{categories: CategoryType[]}>(graphqlAPI, query)
        return result.categories
    },

    async getDetailedBlogs(slug: string) {
        const query = gql`
            query GetDetailedBlog($slug: String!) {
                blog(where: { slug: $slug }) {
                      slug
                    excerpt
                    title
                    id
                    image {
                        url
                    }
                    description {
                        html
                        text
                    }
                    author {
                    avatart {
                        url
                    }
                    avatar
                    }
                    category {
                        label
                        slug
                    }
                }
            }
        `

        const result = await request<{blog: BlogsType[]}>(graphqlAPI, query, {slug}) 
        return result.blog
    }
}