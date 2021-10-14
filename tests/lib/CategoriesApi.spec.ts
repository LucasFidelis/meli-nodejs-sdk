import { ApiClient } from '../../src/lib/ApiClient'
import { CategoriesApi } from '../../src/lib/CategoriesApi'
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env'})

describe('CategoriesApi', () => {
  describe('getDetailsById', () => {
    it('Should return 200 and a data object in the body with a property name', async () => {
      const apiClient = new ApiClient()
      const categoriesApi = new CategoriesApi(apiClient)
      const response = await categoriesApi.getDetailsById('MLA1055')
      expect(response.statusCode).toBe(200)
      expect(response.body.name).toBe('Celulares y Smartphones')
    })

    it('Should returns 200 and a data object length more than 1', async () => {
      const apiClient = new ApiClient()
      const categoriesApi = new CategoriesApi(apiClient)
      const response = await categoriesApi.getCategoriesBySite('MLA')
      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBeGreaterThan(1)
    })
  })
})
