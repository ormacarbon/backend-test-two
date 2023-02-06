export interface IProduct {
    id?:string
    abv: number
    category: string
    city: string
    country: string
    ibu:number
    name:string
    state:string
    coordinates: Array<Number>
    website?: string
    description?: string
    address?:string
}