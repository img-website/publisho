import { Timestamp, addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../context/Firebase";
import { useUser } from "../context/UserContext";
import { Button, Input } from "@nextui-org/react";
import { BackIcon } from "../component/Icons";

const AddBlog = () => {
    const { currentUser } = useUser();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        title: "",
        shortDescription: "",
        description: "",
        authorImgUrl: "",
        authorName: "",
        bannerImgUrl: "",
        metaTitle: "",
        metaDescription: "",
        slug: "",
    });

    console.log(data,"data form")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const addBlogData = async () => {
        setIsLoading(true);
        try {
            const res = await addDoc(collection(db, "blogs"), {
                authorID: currentUser?.uid,
                ...data,
                createdAt: Timestamp.fromDate(new Date()),
                modifiedAt: Timestamp.fromDate(new Date()),
            });
            console.log(res);
            setData({
                title: "",
                shortDescription: "",
                description: "",
                authorImgUrl: "",
                authorName: "",
                bannerImgUrl: "",
                metaTitle: "",
                metaDescription: "",
                slug: "",
            });
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="pt-20 flex flex-col items-center relatve">
            <BackIcon/>
            <form className="w-full max-w-lg p-4 border rounded shadow-md" onSubmit={(e) => {
                e.preventDefault();
                addBlogData();
            }}>
                <Input 
                    clearable 
                    underlined
                    fullWidth
                    name="title"
                    label="Title" 
                    placeholder="Enter blog title"
                    onChange={handleChange}
                    value={data.title} 
                />
                <Input 
                    clearable 
                    underlined 
                    fullWidth 
                    name="shortDescription" 
                    label="Short Description" 
                    placeholder="Enter short description" 
                    onChange={handleChange} 
                    value={data.shortDescription} 
                />
                <Input 
                    isClearable 
                    underlined 
                    fullWidth 
                    name="description" 
                    label="Description" 
                    placeholder="Enter blog description" 
                    onChange={handleChange} 
                    value={data.description} 
                />
                <Input 
                    clearable 
                    underlined
                    fullWidth 
                    name="authorImgUrl" 
                    label="Author Image URL" 
                    placeholder="Enter author image URL" 
                    onChange={handleChange} 
                    value={data.authorImgUrl} 
                />
                <Input 
                    clearable 
                    underlined 
                    fullWidth 
                    name="authorName" 
                    label="Author Name" 
                    placeholder="Enter author name" 
                    onChange={handleChange} 
                    value={data.authorName} 
                />
                <Input 
                    clearable 
                    underlined 
                    fullWidth 
                    name="bannerImgUrl" 
                    label="Banner Image URL" 
                    placeholder="Enter banner image URL" 
                    onChange={handleChange} 
                    value={data.bannerImgUrl} 
                />
                <Input 
                    clearable 
                    underlined 
                    fullWidth 
                    name="metaTitle" 
                    label="Meta Title" 
                    placeholder="Enter meta title" 
                    onChange={handleChange} 
                    value={data.metaTitle} 
                />
                <Input 
                    clearable 
                    underlined 
                    fullWidth 
                    name="metaDescription" 
                    label="Meta Description" 
                    placeholder="Enter meta description" 
                    onChange={handleChange} 
                    value={data.metaDescription} 
                />
                <Input 
                    clearable 
                    underlined 
                    fullWidth 
                    name="slug" 
                    label="Slug" 
                    placeholder="Enter blog slug" 
                    onChange={handleChange} 
                    value={data.slug} 
                />
                <Button 
                    type="submit" 
                    disabled={isLoading} 
                    variant="bordered" 
                    color="primary" 
                    size="lg" 
                    className="mt-4"
                >
                    {isLoading ? "Adding Blog..." : "Add Blog"}
                </Button>
            </form>
        </div>
    );
};

export default AddBlog;
