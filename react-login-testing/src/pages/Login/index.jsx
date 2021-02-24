import React from "react"

export default () => {
  return (
    <div>
      <strong>Hello stranger. Sign in to continue.</strong>
      Username:
      <input />
      Passoword: <input />
      <button onClick={() => alert("Hello")}>Sign</button>
    </div>
  )
}