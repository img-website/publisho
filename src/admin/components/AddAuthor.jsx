import React from 'react'
import AddAuthorTable from './addAuthorTable/Table'

const AddAuthor = () => {
  return (
    <div>
         <div className='pt-24 px-4'>
      <div className='font-semibold text-xl mb-4'>
        Add Author
      </div>
      <AddAuthorTable/>
    </div>
    </div>
  )
}

export default AddAuthor