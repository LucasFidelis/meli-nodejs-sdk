import superagent, { SuperAgentRequest } from 'superagent'
import { ApiRequest, ApiResponse } from '../protocols/api'
import fs from 'fs'

export class ApiClient {
  private readonly accessToken: string
  private readonly baseUrl: string

  constructor (
    accessToken = ''
  ) {
    this.accessToken = accessToken
    this.baseUrl = 'https://api.mercadolibre.com'
  }

  /**
   * Calls the endpoint and return a Promise of ApiResponse with the MercadoLibre API response
   * @param {ApiRequest} apiRequest
   * @returns {Promise<ApiResponse>}
   */
  async callApi (apiRequest: ApiRequest): Promise<ApiResponse> {

    const request = superagent(this.baseUrl)

    request.method = apiRequest.method

    request.url = `${this.baseUrl}${apiRequest.path}`

    if (this.accessToken !== '') {
      request.auth(this.accessToken, { type: "bearer" })
    }

    if (apiRequest.queryParams) {
      let queryParamsString = apiRequest.queryParams.toString()
      request.url = `${request.url}?${queryParamsString}`
    }
    
    await request.send()

    return {
      statusCode: (await request).statusCode,
      body: (await request).body
    }
  }
}
