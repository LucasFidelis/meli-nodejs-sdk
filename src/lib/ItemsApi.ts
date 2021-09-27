import { ApiResponse } from '../protocols/api'
import { ApiClient } from './ApiClient'

export class ItemsApi {
  private readonly apiClient: ApiClient

  constructor (apiClient: ApiClient) {
    this.apiClient = apiClient
  }

  /**
   * Gets an item by ID
   * @param {string} id
   * @returns {Promise<ApiResponse>}
   */
  async getItemById (id: string): Promise<ApiResponse> {
    const url = `/items/${id}`
    return await this.apiClient.callApi({
      path: url,
      method: 'GET'
    })
  }
}
