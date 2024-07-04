import React, { useState, useEffect } from 'react';
import { Input, Button, Spinner } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { collection, addDoc, doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from '../../../context/Firebase';
import { toast } from 'sonner';

const AddAuthorModal = ({ isOpen, onOpenChange, authors, fetchData }) => {
  const [authorName, setAuthorName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authors) {
      setAuthorName(authors.name);
    } else {
      setAuthorName("");
    }
  }, [authors]);

  const submitAuthorsData = async () => {
    if (authorName.trim() === "" || authorName.length < 3) {
      toast.error("Please enter a proper author Name");
      return;
    }
    setLoading(true);
    try {
      if (authors) {
        // Update existing authors
        const authorsRef = doc(db, "addAuthors", authors.id);
        await updateDoc(authorsRef, { name: authorName });
        toast.success("author updated successfully");
      } else {
        // Add new author
        await addDoc(collection(db, "addAuthors"), { name: authorName, status: true, createdAt: Timestamp.fromDate(new Date()), });
        toast.success("author added successfully");
      }
      setAuthorName("");
      onOpenChange(false); 
      fetchData(); 
    } catch (e) {
      console.error("Error adding/updating document: ", e);
      toast.error("Error adding/updating author");
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
                {authors ? "Edit your authors" : "Add your authors"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  placeholder="Enter your authors"
                  variant='bordered'
                  color='default'
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={submitAuthorsData} className='text-white font-semibold bg-black' disabled={loading}>
                {loading ? <Spinner color="current" size="sm" /> : authors ? "Update" : "Add"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddAuthorModal;
