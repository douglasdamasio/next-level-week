import { Request, Response } from 'express'
import knex from './../database/connection'

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*')
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        imagem_url: `http://192.168.0.24:3334/uploads/${item.image}`
      }
    })
  
    return res.json(serializedItems)
  }
}

export default ItemsController