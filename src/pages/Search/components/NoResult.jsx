import React from 'react'

const NoResult = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-[16px] py-[40px]'>
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 14H14.71L14.43 13.73C15.444 12.5541 16.0012 11.0527 16 9.5C16 7.77609 15.3152 6.12279 14.0962 4.90381C12.8772 3.68482 11.2239 3 9.50003 3C6.08003 3 3.28003 5.64 3.03003 9H5.05003C5.30003 6.75 7.18003 5 9.50003 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.50003 14C9.33003 14 9.17003 13.97 9.00003 13.95V15.97C9.17003 15.99 9.33003 16 9.50003 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14Z" fill="black"/>
<path d="M6.47001 10.8199L4.00001 13.2899L1.53001 10.8199L0.820007 11.5299L3.29001 13.9999L0.820007 16.4699L1.53001 17.1799L4.00001 14.7099L6.47001 17.1799L7.18001 16.4699L4.71001 13.9999L7.18001 11.5299L6.47001 10.8199Z" fill="black"/>
</svg>

      <h2 className='text-center text-[24px] font-semibold'>No results match your search</h2>
      <p className='text-center'>Check the spelling, or try a different search</p>
    </div>
  )
}

export default NoResult
