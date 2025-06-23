import React, { useState } from 'react'

const ToggleVisibility = () => {

    const [textarea, setTextarea] = useState('')
    const [visibility, setVisibility] = useState(false)

    function changeHandler(event) {
        setTextarea(event.target.value)
    }

    function visibilityHandler() {
        setVisibility((prev) => !prev)
    }

    return (
        <div>
            <div>
                <textarea
                    name='textarea'
                    value={textarea}
                    onChange={changeHandler}
                    rows={5}
                    cols={35}
                />
            </div>
            <br/>
            <button onClick={visibilityHandler}>
                {
                    visibility ? "Hide" : "Show"
                }
            </button>
            <p>
                {
                    visibility ? textarea : ''
                }
            </p>
        </div>
    )
}

export default ToggleVisibility
