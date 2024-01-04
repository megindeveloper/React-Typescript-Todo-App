import reactLogo from '../assets/react.svg' 

export const ImageHeader = () => {
  return (
       <div className='flex items-center mb-8'>  
        
          <img 
          className='w-28 h-28 object-contain'
          src={reactLogo}  alt="React logo" /> 
         <span className='mx-4'>+</span> 
                   <img
          className='w-28 h-28 object-contain'
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"  alt="Vite logo" />
      </div> 
  )
}
