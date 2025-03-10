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
        const result = await request(graphqlAPI, query)
        return result
    }
}