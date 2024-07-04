import React from 'react'
import AddCategoryTable from './addCategoryTable/Table'

const AddCategory = () => {
  return (
    <div>
         <div className='pt-24 px-4'>
      <div className='font-semibold text-xl mb-4'>
        Add Category
      </div>
      {/* <Button onPress={onOpen} className='border-black bg-white border-2 font-semibold hover:bg-black hover:text-white'>Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add your Topic</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  placeholder="Enter your Topic"
                  variant='bordered'
                  color='default'
                />
              </ModalBody>
              <ModalFooter>
                <Button className='text-white font-semibold bg-black ' onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
      <AddCategoryTable />
    </div>
    </div>
  )
}

export default AddCategory