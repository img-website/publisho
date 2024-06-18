import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../context/Firebase";
import { useUser } from "../context/UserContext";
import { Button } from "@nextui-org/react";


const AddBlog = () => {
    const {currentUser} = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    
    const addblogData = async () => {
        try {
            const res = await addDoc(collection(db, "blogs"), {
                authorID: currentUser?.uid,
                title: "Hello world",
                shortDescription: "short hi hai",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti rerum quibusdam. Est amet eveniet officiis autem veniam suscipit illum voluptatibus voluptatum, dolorum mollitia, quo earum ut perspiciatis, ex iste.",
                authorImgUrl: "",
                authorName: "",
                createdAt: Timestamp.fromDate(new Date()),
                modifiedAt: Timestamp.fromDate(new Date()),
                bannerImgUrl: "",
                metaTitle: "",
                metaDescription: "",
                slug: "https:google.com/"
              })

              console.log(res.id)
            //   setData(res);
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className="pt-20">
            {isLoading && data}
            <Button onClick={addblogData} variant="bordered" color="primary" size="lg">Add Blogwa</Button>
        </div>
    )
};

export default AddBlog;
