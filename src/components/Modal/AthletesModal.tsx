import { useState } from 'preact/hooks'
import Modal from './Modal'

const AthletesModal = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [userInput, setUserInput] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        if (userInput.toLowerCase().trim() === 'fleming') {
            setErrorMessage('')
            setIsOpen(false)
        } else {
            setErrorMessage('Try again 🤔')
            // setErrorMessage('Try again 😉')
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <form onSubmit={handleSubmit}>
                <div class="flex flex-col justify-between">
                    <h1 class="text-lg font-bold py-4">
                        Please enter the password to verify that you are a
                        member of Mounds View Cross Country
                    </h1>
                    <div class="py-4 flex flex-col md:flex-row">
                        <label class="pr-4">Password:</label>
                        <input
                            autofocus={true}
                            placeholder="password"
                            class="border-2 border-solid border-slate-300"
                            id="password-input"
                            value={userInput}
                            onChange={(e) =>
                                setUserInput(e.currentTarget.value)
                            }
                        />
                        <span class="pl0 md:pl-4 text-red-600">
                            {errorMessage}
                        </span>
                    </div>
                    <div class="flex py-4 justify-center">
                        <button
                            type="submit"
                            id="submit-button"
                            class="border-2 border-solid border-slate-300 p-2"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default AthletesModal
