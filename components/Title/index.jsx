const index = ({ children, span }) => {
  return (
    <h1 className='text-blue600 title'>{children}<span className='text-orange500'>{span}</span></h1>
  )
}

export default index;