export interface iPokemon {
    count: number
    next: string
    previous: string
    results: iDataPokemon[]
}

export interface iDataPokemon {
    name: string
    url: string
}