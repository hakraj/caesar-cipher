import './App.css'
import Decrypt from './components/Decrypt'
import Encrypt from './components/Encrypt'

function App() {
  return (
    <>
      <main>
        <div className="bg-white  dark:bg-slate-800 rounded-lg w-96 p-4 text-center mx-auto">
          <h1 className="my-4 font-medium text-xl">Caesar Cipher Text Encryption/Decryption</h1>

          <Encrypt />

          <div className="bg-slate-400 dark:bg-slate-600 my-4"></div>

          <Decrypt />

        </div>
      </main>
    </>
  )
}

export default App
