import { produce } from "immer"

type Card = { text: string; flipped: boolean }

type CardsField = { cards: Card[][] }

type Brand<T> = T & { readonly __brand: unique symbol }

type X = Brand<number>
type Y = Brand<number>

export const initCardsField = (cards: Card[], width: X, height: Y) => {
  if (cards.length !== width * height) throw new Error("How dare you")

  const rows = cards.length / width
  const field = new Array<Card[]>(rows)

  for (let r = 0; r < rows; r++) {
    field[r] = cards.slice(r * width, (r + 1) * width)
  }

  return { cards: field }
}

export const flipCard = (field: CardsField, x: X, y: Y) =>
  produce(field, field => {
    getCard(field, x, y).flipped = true
  })

export const cardsFieldAsArray = (field: CardsField) => flatten(field.cards)

const flatten = <T>(arrOfArrs: T[][]) =>
  arrOfArrs.reduce((acc, curr) => [...acc, ...curr], [])

const getCard = (field: CardsField, x: X, y: Y) => field.cards[y][x]
