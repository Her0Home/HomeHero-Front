import { ICategoryPro } from "@/types/category"

export const useCategoryOptions = (categories: ICategoryPro[]) => {
  return categories.map(cat => ({
    label: cat.name,
    value: cat.id,
  }))
}
