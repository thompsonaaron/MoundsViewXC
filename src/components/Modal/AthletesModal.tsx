import { useState } from 'preact/hooks'
import Modal from './Modal'

const AthletesModal = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [userInput, setUserInput] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        if (userInput === 'fleming') {
            setErrorMessage('')
            window.open(
                'https://drive.google.com/drive/folders/1Lqt_gB01CgFz0gVaOpNcn7co0Jx5ESDS?usp=drive_link',
                '_blank'
            )
            window.open('https://www.moundsviewxc.com', '_self')
            // setIsOpen(false)
        } else {
            setErrorMessage('Try again 😉')
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <form>
                <div class="flex flex-col justify-between">
                    <h1 class="text-lg font-bold py-4">
                        Please enter the password to verify that you are a
                        member of Mounds View Cross Country
                    </h1>
                    <div class="py-4">
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
                        <span class="pl-4 text-red-600">{errorMessage}</span>
                    </div>
                    <div class="flex py-4 justify-center">
                        <button
                            id="submit-button"
                            onClick={handleSubmit}
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
