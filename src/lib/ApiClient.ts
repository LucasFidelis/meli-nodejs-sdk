import superagent, { SuperAgentRequest } from 'superagent'
import { ApiRequest, ApiResponse } from '../protocols/api'

export class ApiClient {
  private readonly accessToken: string
  private readonly baseUrl: string
  private request: SuperAgentRequest

  constructor (
    accessToken = ''
  ) {
    this.accessToken = accessToken
    this.baseUrl = 'https://api.mercadolibre.com'
    this.request = superagent(this.baseUrl)
  }

  addAuthToRequest (): void {
    if (this.accessToken !== '') {
      void this.request.set('Authorization', `Bearer ${this.accessToken}`)
    }
  }

  async callApi (apiRequest: ApiRequest): Promise<ApiResponse> {
    this.request.method = apiRequest.method

    this.request.url = `${this.baseUrl}${apiRequest.path}`

    this.addAuthToRequest()

    if (apiRequest.queryParams) {
      await this.request.query(apiRequest.queryParams.toString())
    }

    await this.request.send()

    return {
      statusCode: (await this.request).statusCode,
      body: (await this.request).body
    }
  }
}
