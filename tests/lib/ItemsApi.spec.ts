import { ApiClient } from '../../src/lib/ApiClient'
import { ItemsApi } from '../../src/lib/ItemsApi'

describe('ItemsApi', () => {
  it('Should return 200 and a data object in the body with a property id', async () => {
    const apiClient = new ApiClient()
    const itemsApi = new ItemsApi(apiClient)
    const response = await itemsApi.itemIdGet('MLB1191972200')
    expect(response.statusCode).toBe(200)
    expect(response.body.id).toBe('MLB1191972200')
  })
})
