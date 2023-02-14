export interface IList {
    abv: number
    address?: string
    category?: string
    city: string
    coordinates?: number[]
    country: string
    description?: string
    ibu: number
    name: string
    state?: string
    website?: string
    _id: string
}

export interface IBeerList {
    currentItems: IList[]
}

export interface IEditBeerList {
    item: IList
}

export interface IPgs {
    currentPage: number
    pages: number 
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}