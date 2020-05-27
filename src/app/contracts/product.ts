import { IItem } from './item';
import { ProductType } from './product-type';

export interface IProduct extends IItem{
    name: string
    type: ProductType
    description:  string
    price: number
    stars: number
}