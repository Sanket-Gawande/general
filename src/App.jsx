import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [loginData, setLogindata] = useState
    ({})
  const [isLoading, setLoading] = useState(false)
  const onLoginFormSubmit = e => {
    e.preventDefault();
    console.log({ loginData })
    // dummy loading 
    setLoading(true)
    setTimeout(() => setLoading(false), 1000);
  }
  return (
    <>
      <div className="bg-slate-200  h-full flex justify-center items-center">

        <div className="bg-white w-[90%] max-w-[400px] px-6 py-6 rounded-md shadow-lg">
          <h4 className='text-xl  mb-2 text-slate-800 font-semibold'>
            Sign Up
          </h4>
          <form className='' onSubmit={onLoginFormSubmit}>
            <label

              htmlFor="name"
              className=' text-md text-slate-600 mt-4 mb-2 inline-block'>
              Name
            </label>
            <input
              pattern='[A-Za-z]{3,}'
              required
              id='name'
              className='text-md py-2 px-4 rounded-md outline-none w-full border focus:border-blue-500'
              type="text"
            />

            <label
              htmlFor="name"
              className=' text-md text-slate-600 mt-4 mb-2 inline-block'>
              Email
            </label>
            <input
              required

              id='name'
              className='text-md py-2 px-4 rounded-md outline-none w-full border focus:border-blue-500'
              type="email"

            />

            <label
              htmlFor="name"
              className=' text-md text-slate-600 mt-4 mb-2 inline-block'>
              Date of Birth
            </label>
            <input
              required
              id='name'
              className='text-md py-2 px-4 rounded-md outline-none w-full border focus:border-blue-500'
              type="date"

            />

            <label
              htmlFor="name"
              className=' text-md text-slate-600 mt-4 mb-2 inline-block'>
              Roll Number
            </label>
            <input
              required
              id='name'
              className='text-md py-2 px-4 rounded-md outline-none w-full border focus:border-blue-500'
              type="number"

            />

            <label htmlFor="password" className=' text-md text-slate-600 mt-4 mb-2 inline-block'>Password</label>
            <input
              required
              className='text-md py-2 px-4 rounded-md outline-none w-full border focus:border-blue-500' type="password" id='password'
              onInput={e => setLogindata({ ...loginData, password: e.target.value })}
              value={loginData?.password} />

            <button className='py-2 px-8 bg-blue-500 text-white rounded-md mt-4'>
              Signup
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
