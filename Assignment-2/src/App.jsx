
import './App.css'
import Counter from './components/Counter'
import InputField from './components/InputField'
import ToggleVisibility from './components/ToggleVisibility'

function App() {
  return(
    <div>
      <div>
        <p>
          A Counter with Increment and Decrement buttons
        </p>
        <Counter/>
      </div>
      <div>
        <p>
          An Input field that displays the typed text live below it
        </p>
        <InputField/>
      </div>
      <div>
        <p>
          A Visibility toggle for showing/hiding a paragraph
        </p>
        <ToggleVisibility/>
      </div>
    </div>
  )
}

export default App
