import { FormEventHandler, useState } from "react";
import { decrypt } from "../utils/cipher";


const Decrypt = () => {
  const [loading, setLoading] = useState<Boolean>(false)
  const [ciphertext, setCiphertext] = useState('');
  const [key, setKey] = useState(0);
  const [plaintext, setPlaintext] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setLoading(true)
    const result = decrypt(ciphertext, key);
    setPlaintext(result);
    setLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating text-left my-1">
          <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="floatingCipherText">Decrypt</label><br />
          <input
            onChange={(e) => setCiphertext(e.target.value)}
            type="text"
            className="dark:bg-slate-700 w-full border border-slate-300 dark:border-slate-500 focus:border-[#f5ba13] rounded-lg mt-1 mr-1 p-1.5 outline-none text-sm font-family-inherit resize-none"
            id="floatingCipherText"
            placeholder="Enter Cipher Text ..."
            required
            name="ciphertext"
            value={ciphertext}
            autoFocus
          />
        </div>

        <div className="form-floating text-left my-1">
          <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="floatingDKey">Key</label><br />
          <input
            onChange={(e) => setKey(parseInt(e.target.value))}
            type="number"
            className="dark:bg-slate-700 w-full border border-slate-300 dark:border-slate-500 focus:border-[#f5ba13] rounded-lg mt-1 mr-1 p-1.5 outline-none text-sm font-family-inherit resize-none"
            id="floatingDKey"
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
            "Decrypt"
          }
        </button>
      </form>
      <p className="m-4 text-lg">Plaintext: {plaintext}</p>
    </>
  )
}

export default Decrypt;