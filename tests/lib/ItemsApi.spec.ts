import { ApiClient } from '../../src/lib/ApiClient'
import { ItemsApi } from '../../src/lib/ItemsApi'
import dotenv from 'dotenv'
dotenv.config()

describe('ItemsApi', () => {
  describe('getItemById', () => {
    it('Should return 200 and a data object in the body with a property id', async () => {
      const apiClient = new ApiClient()
      const itemsApi = new ItemsApi(apiClient)
      const response = await itemsApi.getItemById('MLB1191972200')
      expect(response.statusCode).toBe(200)
      expect(response.body.id).toBe('MLB1191972200')
    })
  })

  describe('getItemsIdByUserIdWithScan', () => {
    it('Should return 200', async () => {
      const apiClient = new ApiClient(process.env.TOKEN)
      const itemsApi = new ItemsApi(apiClient)
      const response = await itemsApi.getItemsIdByUserIdWithScan(process.env.SELLER_ID)
      expect(response.statusCode).toBe(200)
    })
    
    it('Should seeks diferents products', async () => {
      const apiClient = new ApiClient(process.env.TOKEN)
      const itemsApi = new ItemsApi(apiClient)
      const { body } = await itemsApi.getItemsIdByUserIdWithScan(process.env.SELLER_ID)
      const scrollId = body.scroll_id
      const firstProduct = body.results[0]
      await itemsApi.getItemsIdByUserIdWithScan(process.env.SELLER_ID, scrollId)
      const secondProcut = (await itemsApi.getItemsIdByUserIdWithScan(process.env.SELLER_ID, scrollId)).body.results;
      expect(firstProduct).not.toEqual(secondProcut)
    })
    
  })  
})
