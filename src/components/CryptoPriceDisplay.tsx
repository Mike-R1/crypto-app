import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"


export default function CriptoPriceDisplay() {

  const result = useCryptoStore((state) => state.result)
  const loading = useCryptoStore((state) => state.loading)
  const hasResult = useMemo(() => !Object.values(result).includes(''), [result])
  return (

    <div className="result-wrapper">
      {loading ? <Spinner /> : hasResult && (
        <>

          <h2>Cotizacion</h2>
          <div className="result">

            <img
              src={`https://cryptocompare.com/${result.IMAGEURL}`}
              alt="Imagen de cryptomoneda"
            />
            <div>

              <p>El precio es: <span>{result.PRICE}</span></p>
              <p>Precio mas alto en el dia <span>{result.HIGHDAY}</span></p>
              <p>Precio mas bajo en el dia <span>{result.LOWDAY}</span></p>
              <p>Ultimos cambios en las 24h <span>{result.CHANGEPCT24HOUR}</span></p>
              <p>Ultima actualizacion <span>{result.LASTUPDATE}</span></p>
            </div>

          </div>


        </>
      )}
    </div>

  )
}
