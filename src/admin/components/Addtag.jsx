import React from 'react'
import {Input, Button} from "@nextui-org/react";
import DashboardTable from './dashboardTable/Table';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Link} from "@nextui-org/react";
import AddTagTable from './addtagTable/Table';

export const Addtag = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
 
  return (
    <>
    <div className='pt-24 px-4'>
      <div className='font-semibold text-xl'>
        Add Topic
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
      <AddTagTable />
    </div>
    {/* view tag */}
    

    </>
  )
}
