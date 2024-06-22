import { FormEventHandler, useState } from "react";
import { encrypt } from "../utils/cipher";


const Encrypt = () => {
  const [loading, setLoading] = useState<Boolean>(false)
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState(0);
  const [ciphertext, setCiphertext] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setLoading(true)
    const result = encrypt(plaintext, key);
    setCiphertext(result);
    setLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating text-left my-1">
          <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="floatingPlainText">Encrypt</label><br />
          <input
            onChange={(e) => setPlaintext(e.target.value)}
            type="text"
            className="dark:bg-slate-700 w-full border border-slate-300 dark:border-slate-500 focus:border-[#f5ba13] rounded-lg mt-1 mr-1 p-1.5 outline-none text-sm font-family-inherit resize-none"
            id="floatingPlainText"
            placeholder="Enter Text ..."
            required
            name="plaintext"
            value={plaintext}
            autoFocus
          />
        </div>
        <div className="form-floating text-left my-1">
          <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="floatingEKey">Key</label><br />
          <input
            onChange={(e) => setKey(parseInt(e.target.value))}
            type="number"
            className="dark:bg-slate-700 w-full border border-slate-300 dark:border-slate-500 focus:border-[#f5ba13] rounded-lg mt-1 mr-1 p-1.5 outline-none text-sm font-family-inherit resize-none"
            id="floatingEKey"
            placeholder="Enter Key ..."
            required
            name="key"
            value={key}
            autoFocus
          />
        </div>

        <button className={`mt-4 hover:bg-white text-xl w-full p-2 hover:text-[#f5ba13] border-[#f5ba13] border rounded-lg text-white ${!loading && "bg-[#f5ba13]"}`}>
          {loading ?
            <div className="w-5 h-5 rounded-full animate-spin border-2 border-solid border-[#f5ba13] border-t-transparent shadow-md mx-auto my-1"></div>
            :
            "Encrypt"
          }
        </button>
      </form>
      <p className=" m-4 text-lg">Ciphertext: {ciphertext}</p>
    </>
  )
}

export default Encrypt;