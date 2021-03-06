export interface ApiRequest {
  path: string
  method: string
  queryParams?: URLSearchParams
}

export interface ApiResponse {
  statusCode: number
  body: any
}
