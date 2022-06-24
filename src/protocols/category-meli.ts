import { ApiResponse } from './api'

export interface CategoryMeli {
  getDetailsById: (id: string) => Promise<ApiResponse>
  getCategoriesBySite: (site: string) => Promise<ApiResponse>
}
