import { ApiClient } from '../../src/lib/ApiClient'

describe('ApiClient', () => {
  it('Should return 200 and a data object in the body with a property id', async () => {
    const apiClient = new ApiClient()
    const call = await apiClient.callApi({
      path: '/items/MLB1191972200',
      method: 'GET',
      queryParams: new URLSearchParams()
    })
    expect(call.statusCode).toBe(200)
    expect(call.body.id).toBe('MLB1191972200')
  })
})
