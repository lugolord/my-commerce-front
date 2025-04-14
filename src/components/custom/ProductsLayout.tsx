function ProductsLayout ({ children } : { children: React.ReactNode }) {
  return (
    <div className='my-4 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {children}
    </div>
  )
}

export default ProductsLayout
