import { CloseModalTimeOut } from './style'

function ModalTimeOut({ closeTimeOutModal }) {
  return (
    <CloseModalTimeOut>
      <header>
        <button onClick={() => closeTimeOutModal()}>X</button>
      </header>
      <p>Time Out.</p>
      <footer>Try again</footer>
    </CloseModalTimeOut>
  )
}
export default ModalTimeOut
