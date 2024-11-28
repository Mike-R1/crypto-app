import { ChangeEvent, useState } from "react";
import { currencies } from "../data/currencyCrypto";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import AlertMessage from "./AlertMessage";

export default function CryptoForm() {

  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)
  const fetchData = useCryptoStore((state) => state.fetchData)
  const [pair, setPair] = useState<Pair>({
    criptocurrency: '',
    currency: ''
  })

  const [alert, setAlert] = useState('')

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {

    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if (Object.values(pair).includes('')) {
      setAlert('Todos los campos son obligatorios')
      return
    }
    setAlert('')
    fetchData(pair)
  }

  return (
    <>


      <form className="form"
        onSubmit={handleSubmit}
      >
        {alert && <AlertMessage>{alert}</AlertMessage>}

        <div className="field">

          <label htmlFor="currency">Moneda:</label>
          <select
            name="currency"
            id="currency"
            value={pair.currency}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            {currencies.map(currency => (
              <option key={currency.code} value={currency.code}>{currency.name}</option>
            ))}

          </select>

        </div>

        <div className="field">

          <label htmlFor="criptocurrency">Cripto Moneda:</label>
          <select
            name="criptocurrency"
            id="criptocurrency"
            value={pair.criptocurrency}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            {cryptocurrencies.map(crypto => (
              <option
                key={crypto.CoinInfo.FullName}
                value={crypto.CoinInfo.Name}
              > {crypto.CoinInfo.FullName}</option>

            ))}
          </select>


        </div>

        <input type="submit"
          value="Cotizar" />

      </form>
    </>
  )

}
