import { URLSearchParams } from 'url'
import { ApiResponse, CategoryMeli } from '../protocols'
import { ApiClient } from './ApiClient'

export class CategoriesApi implements CategoryMeli {
  private readonly apiClient: ApiClient

  constructor (apiClient: ApiClient) {
    this.apiClient = apiClient
  }

  /**
   * Gets details of a category by ID
   * @param {string} id
   * @returns {Promise<ApiResponse>}
   */
  async getDetailsById (id: string): Promise<ApiResponse> {
    const url = `/categories/${id}`
    return await this.apiClient.callApi({
      path: url,
      method: 'GET'
    })
  }

  async getCategoriesBySite (site: string): Promise<ApiResponse> {
    const url = `/sites/${site}/categories`
    return await this.apiClient.callApi({
      path: url,
      method: 'GET'
    })
  }
}
