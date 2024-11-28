import { z } from 'zod'
import { CryptoPriceSchema, CurrencySchema, PairSchema } from "../schema/crypto-schema";
import { CryptoCurrencyResponseSchema } from '../schema/crypto-schema';

export type Currency = z.infer<typeof CurrencySchema>

export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>