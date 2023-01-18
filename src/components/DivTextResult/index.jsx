import { useData } from '../../providers/dataProvider'


function DivTextResult() {
  let postDays

  const { data } = useData()

  if (data) {
    postDays = Object.entries(data)
  }

  return (
    <>
      {data ? (
        postDays.map((item, index) =>
          item[0] == 1 ? (
            <p key={index}>
              Tomorrow <strong>R${item[1].toFixed(2)} </strong>
            </p>
          ) : (
            <p key={index}>
              In {item[0]} days <strong>${item[1].toFixed(2)} </strong>
            </p>
          )
        )
      ) : (
        <>
          <p>
            Tomorrow <strong>$ 0,00</strong>
          </p>
          <p>
            in 15 days <strong>$ 0,00</strong>
          </p>
          <p>
            in 30 days <strong>$ 0,00</strong>
          </p>
          <p>
            in 90 days <strong>$ 0,00</strong>
          </p>
        </>
      )}
    </>
  )
}

export default DivTextResult
