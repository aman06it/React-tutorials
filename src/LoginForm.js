import React from 'react'
// import { ModalDismissAsyncButton } from "./components/common/Modal"

const makeFakeRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() * 10
      random <= 5 ? resolve("success") : reject("error")
    }, 1000)
  })
}

function LoginForm() {
  const [error, setError] = React.useState()

  function onSubmit() {
    return makeFakeRequest().then(
      response => response,
      error => {
        setError(error)
      }
    )
  }

  return (
    <>
      <label>username</label>
      <input type="text" />
      <label>password</label>
      <input type="password" />
      {/* <ModalDismissAsyncButton>
        <button onClick={onSubmit}>submit</button>
      </ModalDismissAsyncButton> */}
    </>
  )
}

export default LoginForm