import React from 'react'

const ShowTemplates = () => {
  return (
    <>
    <div>
        <h1 className='text-3xl font-bold text-center mt-10'>Templates</h1>
        <div className='flex justify-center items-center mt-10'>
            <div className='flex justify-around gap-16 bg-green-100 p-5'>
            {/* Template 1 */}
            <div className='border p-4 rounded-lg shadow-lg' onClick={() => window.location.href = '/res'}>
                <h2 className='text-xl font-semibold'>Template 1</h2>
                <p className='mt-2'>Description of Template 1.</p>
                <img src="/temp1.png" alt="" className='h-96 border border-r-black' />
            </div>
            {/* Template 2 */}
            <div className='border p-4 rounded-lg shadow-lg' onClick={() => window.location.href = '/res'}>
                <h2 className='text-xl font-semibold'>Template 2</h2>
                <p className='mt-2'>Description of Template 2.</p>
                <img src="/temp1.png" alt="" className='h-96 border border-r-black' />
            </div>
            {/* Template 3 */}
            <div className='border p-4 rounded-lg shadow-lg' onClick={() => window.location.href = '/res'}>
                <h2 className='text-xl font-semibold'>Template 3</h2>
                <p className='mt-2'>Description of Template 3.</p>
                <img src="/temp1.png" alt="" className='h-96 border border-r-black' />
            </div>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default ShowTemplates
