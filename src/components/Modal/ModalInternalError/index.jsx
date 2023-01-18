import { ModalError } from './style'

function ModalInternalError() {
  return (
    <>
      <ModalError>
        <h1>Internal Error!</h1>
        <p>Press(F5), to refresh the page</p>
      </ModalError>
    </>
  )
}
export default ModalInternalError
