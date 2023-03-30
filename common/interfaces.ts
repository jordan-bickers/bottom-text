export interface meme {
  image: string
}

export interface memeData extends meme {
  id: number
}

export interface Meme {
  id?: number
  image: string
}

export interface MemeData extends Meme {
  topText: string
  bottomText: string
}
