import React, { useState, useEffect } from 'react';
import { Input, Button, Spinner } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { collection, addDoc, doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from '../../../context/Firebase';
import { toast } from 'sonner';

const AddcategoryNameModal = ({ isOpen, onOpenChange, category, fetchData }) => {
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) {
      setCategoryName(category.name);
    } else {
      setCategoryName("");
    }
  }, [category]);

  const submitcategoryData = async () => {
    if (categoryName.trim() === "" || categoryName.length < 3) {
      toast.error("Please enter a proper category");
      return;
    }
    setLoading(true);
    try {
      if (category) {
        // Update existing category
        const categoryRef = doc(db, "addCategory", category.id);
        await updateDoc(categoryRef, { name: categoryName });
        toast.success("category updated successfully");
      } else {
        // Add new category
        await addDoc(collection(db, "addCategory"), { name: categoryName, status: true, createdAt: Timestamp.fromDate(new Date()), });
        toast.success("category added successfully");
      }
      setCategoryName("");
      onOpenChange(false); 
      fetchData(); 
    } catch (e) {
      console.error("Error adding/updating document: ", e);
      toast.error("Error adding/updating category");
    }finally {
        setLoading(false);
      }
  };

  return (
    <div>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {category ? "Edit your category" : "Add your category"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  placeholder="Enter your category"
                  variant='bordered'
                  color='default'
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={submitcategoryData} className='text-white font-semibold bg-black' disabled={loading}>
                {loading ? <Spinner color="current" size="sm" /> : category ? "Update" : "Add"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddcategoryNameModal;
