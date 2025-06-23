import React, { useState } from 'react'

const InputField = () => {

    const [text, setText] = useState('')

    function changeHandler(event) {
        setText(event.target.value)
    }

  return (
    <div>
        <div>
            <input
                type='text'
                value={text}
                name='text'
                onChange={changeHandler}
            />
            <br/>
            <div> {text} </div>
            <br/>
        </div>
        <div>-----------------------------------------------------------------------</div>
    </div>
  )
}

export default InputField
