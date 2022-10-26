import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [order, setOrder] = useState([])
  const [infoPopuo, setInfoPopup] = useState(false)
  const coffeeData = {
    Espresso: {
      milk: 60,
      cream: 75,
      latte: 100
    },
    Cappuccino: {
      milk: 80,
      cream: 90,
      latte: 125
    },
    latte: {
      milk: 100,
      cream: 125,
      latte: 150
    }
  }
  const getCoffeOrder = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const coffee = {}
    for (let key of data.keys()) {
      coffee[key] = data.get(key)
    }
    setOrder([...order, coffee])
    e.target.reset()
  }
  return (
    <section className="bg-slate-900 overflow-y-auto h-full py-8">
      {/* pop up */}
      {
        infoPopuo &&
        <section className='grid place-items-center bg-slate-900/20 backdrop-filter backdrop-blur-md inset-0 fixed'>
          <div className='bg-slate-800 rounded-md px-8 py-12 shadow-md'>
            <h1 className='text-center text-[50px] p-2'>🎊</h1>
            <h4 className='text-slate-300 text-lg  px-2 font-semibold'>Yay ! your order has been confirmed </h4>
            <p className='text-slate-400 px-2'>Please wait, we are getting your order ready </p>
            <button onClick={() => setInfoPopup(false)} className='py-2 px-4 bg-sky-500 text-slate-200 rounded-full my-3 float-right'>ok, close</button>
          </div>
        </section>
      }

      {/* pop up ends here */}
      <h4 className=" text-slate-300 text-center font-semibold text-4xl">
        Welcome to <span className='text-orange-600'>Coffee House </span>
      </h4>
      {/* coffee catalog */}
      <table>
        <thead>
          <tr className='text-orange-600'>
            <th>Product/Add-on</th>
            <th>Milk</th>
            <th>Cream</th>
            <th>Latte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Espresso</td>
            <td>60</td>
            <td>75</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Cappuccino</td>
            <td>80</td>
            <td>90</td>
            <td>125</td>
          </tr>
          <tr>
            <td>Latte</td>
            <td>100</td>
            <td>125</td>
            <td>150</td>
          </tr>
        </tbody>
      </table>

      {/* order coffee */}
      <form onSubmit={getCoffeOrder} className="w-[90%] mx-auto max-w-[800px] border border-slate-200 p-4 border-dotted rounded-md bg-slate-800">
        <section className='w-max mx-auto justify-center flex wrap md:flex-row flex-col items-center '>
          <span className=' text-orange-600 text-xl w-[200px]'>
            <h5 >Select coffee</h5>
            <select className='mt-3 w-full border-slate-700 bg-transparent border rounded-md p-1 px-4' name="type">
              {
                Object.keys(coffeeData).map(name =>
                  <option className='' value={name} key={name}>{name}</option>
                )
              }
            </select>
          </span>
          <span className=' md:mx-8 text-orange-600 text-xl w-[200px]'>
            <h5 >Select combination</h5>
            <select name="combination" className='w-full mt-3 border-slate-700 bg-transparent border rounded-md p-1 px-4'>
              <option value="milk">Milk </option>
              <option value="cream">Cream </option>
              <option value="latte">Latte </option>
            </select>
          </span>
          <span className=' block text-orange-600 text-xl w-[200px]'>
            <h5 >Enter quantity</h5>
            <input name="qty" defaultValue={0} min={1} max={10} type={"number"} className='mt-3 w-full border-slate-700 bg-transparent border rounded-md p-1 px-2 w-24'>

            </input>
          </span>
        </section>
        <button className='rounded-full text-orange-600 py-2 px-4 mt-5 block w-max bg-slate-900 border border-orange-500' type='submit'>Add to order</button>
      </form>
      {/* added to order  */}
      <section className=' pb-8 w-max max-w-[900px] mx-auto py-4 px-4 text-slate-400 text-xl'>
        {
          order.length ?
            <section>
              <h4 className=' text-left text-2xl text-slate-400 my-4 font-bold'>Your orders</h4>


              <table key={Math.random()} className="my-2 p-2  px-6 rounded-lg">
                <thead className='text-orange-600'>

                  <tr>
                    <th>Sr no</th>
                    <th>Type</th>
                    <th>Combined with</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map(({ type, combination, qty }, index) =>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{type}</td>
                      <td>{combination}</td>
                      <td>{qty}</td>
                      <td>{
                        coffeeData?.[type]?.[combination] * qty
                      }</td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan={4} className="text-right">Total bill : </td>
                    <td>{
                      order.reduce((acc, { type, qty, combination }) => {
                        return acc += coffeeData[type]?.[combination] * qty
                      }, 0)
                    }</td>
                  </tr>
                </tbody>

              </table>

              <button className=' text-sm bg-orange-500 text-slate-100 py-2 px-4 float-right my-2 rounded-full' onClick={() => setInfoPopup(true)}>Confirm order</button>
              <button className='bg-red-600 text-sm text-slate-100 py-2 px-4 float-right my-2 rounded-full mx-3 ' onClick={() => setOrder([])}>Reset order</button>
            </section>
            : null
        }
      </section>
    </section>
  )
}

export default App
