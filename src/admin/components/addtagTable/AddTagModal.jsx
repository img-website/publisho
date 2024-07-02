import React, { useState, useEffect } from 'react';
import { Input, Button, Spinner } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { collection, addDoc, doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from '../../../context/Firebase';
import { toast } from 'sonner';

const AddTagModal = ({ isOpen, onOpenChange, tag, fetchData }) => {
  const [tagName, setTagName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tag) {
      setTagName(tag.name);
    } else {
      setTagName("");
    }
  }, [tag]);

  const submitTagData = async () => {
    if (tagName.trim() === "" || tagName.length < 3) {
      toast.error("Please enter a proper tag");
      return;
    }
    setLoading(true);
    try {
      if (tag) {
        // Update existing tag
        const tagRef = doc(db, "tags", tag.id);
        await updateDoc(tagRef, { name: tagName });
        toast.success("Tag updated successfully");
      } else {
        // Add new tag
        await addDoc(collection(db, "tags"), { name: tagName, status: true, createdAt: Timestamp.fromDate(new Date()), });
        toast.success("Tag added successfully");
      }
      setTagName("");
      onOpenChange(false); 
      fetchData(); 
    } catch (e) {
      console.error("Error adding/updating document: ", e);
      toast.error("Error adding/updating tag");
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
                {tag ? "Edit your Tag" : "Add your Tag"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  placeholder="Enter your Tag"
                  variant='bordered'
                  color='default'
                  value={tagName}
                  onChange={(e) => setTagName(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={submitTagData} className='text-white font-semibold bg-black' disabled={loading}>
                {loading ? <Spinner color="current" size="sm" /> : tag ? "Update" : "Add"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddTagModal;
