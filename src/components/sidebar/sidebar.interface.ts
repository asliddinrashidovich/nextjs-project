import { BlogsType } from "@/interfaces/blog.interface";
import { CategoryType } from "@/interfaces/category.interface";

export interface SidebarProps {
    latest: BlogsType[]
    category: CategoryType[]
}