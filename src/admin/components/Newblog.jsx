import React, { useRef, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import {
  Select,
  SelectItem,
  Avatar,
  Input,
  DatePicker,
  Textarea,
  Chip,
  Button,
} from "@nextui-org/react";
import { PlusIcon } from "../../component/Icons";
import { useUser } from "../../context/UserContext";
import { db, useFirebase } from "../../context/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export const users2 = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png",
    email: "brian.kim@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Designer",
    team: "Design",
    status: "paused",
    age: "27",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "HR Manager",
    team: "HR",
    status: "active",
    age: "31",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/4.png",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "F. Manager",
    team: "Finance",
    status: "vacation",
    age: "33",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Ops Manager",
    team: "Operations",
    status: "active",
    age: "35",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/5.png",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Jr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/7.png",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "P. Manager",
    team: "Product",
    status: "paused",
    age: "28",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/7.png",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "S. Manager",
    team: "Security",
    status: "active",
    age: "37",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/8.png",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "M. Specialist",
    team: "Marketing",
    status: "active",
    age: "30",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/8.png",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "IT Specialist",
    team: "I. Technology",
    status: "paused",
    age: "31",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/9.png",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Manager",
    team: "Sales",
    status: "active",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/9.png",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "active",
    age: "28",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/11.png",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "active",
    age: "27",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/11.png",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Administrator",
    team: "Information Technology",
    status: "paused",
    age: "32",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/12.png",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Coordinator",
    team: "Operations",
    status: "active",
    age: "26",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/12.png",
    email: "mia.robinson@example.com",
  },
];
export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];
export const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png",
    email: "brian.kim@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Designer",
    team: "Design",
    status: "paused",
    age: "27",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "HR Manager",
    team: "HR",
    status: "active",
    age: "31",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/4.png",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "F. Manager",
    team: "Finance",
    status: "vacation",
    age: "33",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Ops Manager",
    team: "Operations",
    status: "active",
    age: "35",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/5.png",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Jr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/7.png",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "P. Manager",
    team: "Product",
    status: "paused",
    age: "28",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/7.png",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "S. Manager",
    team: "Security",
    status: "active",
    age: "37",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/8.png",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "M. Specialist",
    team: "Marketing",
    status: "active",
    age: "30",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/8.png",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "IT Specialist",
    team: "I. Technology",
    status: "paused",
    age: "31",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/9.png",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Manager",
    team: "Sales",
    status: "active",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/9.png",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "active",
    age: "28",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/11.png",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "active",
    age: "27",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/11.png",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Administrator",
    team: "Information Technology",
    status: "paused",
    age: "32",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/12.png",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Coordinator",
    team: "Operations",
    status: "active",
    age: "26",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/12.png",
    email: "mia.robinson@example.com",
  },
];

export const Newblog = () => {
  const firebase = useFirebase();
  const { currentUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [QillValue, setQillValue] = useState("");
  const formRef = useRef(null);
  const [data, setData] = useState({
    title: "",
    shortDescription: "",
    authorImgUrl: "",
    authorName: "",
    bannerImgUrl: "",
    metaTitle: "",
    metaDescription: "",
    slug: "",
    Select_category: "",
    Select_Author: "",
    Select_Tag: "",
    color:"",
  });

  const [faqs, setFaqs] = useState([
    { id: Math.random() * 1000, question: "", answer: "" },
  ]);

  // console.log(data, "data form");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addBlogData = async () => {
    setIsLoading(true);
    if (image) {
      const timestamp = Date.now();
      const originalFileName = image.name;
      const extension = originalFileName.split(".").pop();
      const newFileName = `${timestamp}.${extension}`;
      const storage = firebase.firebaseStorage;
      const storageRef = ref(storage, `blogImages/${newFileName}`);
      uploadBytes(storageRef, image)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");
          return getDownloadURL(storageRef);
        })
        .then(async (downloadURL) => {
          console.info("downloadURL", downloadURL);
          // Now you can use the downloadURL as needed, like saving it to your database
          setData((prev) => ({
            ...prev,
            bannerImgUrl: downloadURL,
          }));
          submitFormData(downloadURL);
        })
        .catch((error) => {
          console.error("Error uploading the file:", error);
        });
    } else {
      submitFormData();
    }
  };
  // console.log('data outside', data)

  const submitFormData = async (downloadURL) => {
    try {
      const { bannerImgUrl, ...payload } = data;

      console.log('data', {
        authorID: currentUser?.uid,
        ...payload,
        ...downloadURL ? {bannerImgUrl: downloadURL} : {},
        description: QillValue,
        faqs,
        createdAt: Timestamp.fromDate(new Date()),
        modifiedAt: Timestamp.fromDate(new Date()),
      })
      const res = await addDoc(collection(db, "blogs"), {
        authorID: currentUser?.uid,
        ...payload,
        ...downloadURL ? {bannerImgUrl: downloadURL} : {},
        description: QillValue,
        faqs,
        createdAt: Timestamp.fromDate(new Date()),
        modifiedAt: Timestamp.fromDate(new Date()),
      });

      console.info("res", res);
      console.info("Uploaded Data:", payload, res.id);
      // console.log('data', payload)
      // console.log("res", res);
      setData({
        title: "",
        shortDescription: "",
        authorImgUrl: "",
        authorName: "",
        bannerImgUrl: "",
        metaTitle: "",
        metaDescription: "",
        slug: "",
        Select_category: "",
        Select_Author: "",
        Select_Tag: "",
        color:""
      });
      setFaqs([{ id: Math.random() * 1000, question: "", answer: "" }])
      setQillValue("");
      formRef.current.reset();
    } catch (error) {
      console.info("form submit error", error);
    } finally {
      setIsLoading(false);

    }
  };

  const uploadImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFaqChange = (id, e) => {
    const { name, value } = e.target;

    const mapped = faqs.map((item) => {
      if (item?.id === id) {
        item[name] = value;
      } else {
        return item;
      }
      return item;
    });
    setFaqs((prev) => mapped);
  };
  const addFaq = () => {
    setFaqs((prevFaqs) => [
      ...prevFaqs,
      { id: Math.random() * 1000, question: "", answer: "" },
    ]);
  };

  const removeFaq = (id) => {
    if (faqs.length > 1) {
      const newFaqs = faqs.filter((item) => item.id !== id);
      setFaqs(newFaqs);
    }
  };

  // console.log({ faqs });
  return (
    <>
      <div className="  col-span-12 md:col-span-9 lg:col-span-10 overflow-y-auto">
        <div class="top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
          <div class="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
            <div class="relative flex h-16 justify-between">
              <div class="flex flex-1 items-stretch justify-start">
                <a class="flex md:hidden flex-shrink-0 items-center" href="#">
                  <div href="/" className="font-bold text-inherit ">
                    BLOGERA
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="text-lg font-semibold flex items-center gap-2 ">
            <PlusIcon className=" size-5 border-black border rounded-full" />
            Add Blog <span></span>
          </div>
          <div>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <form
          className="bg-white p-4 shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            addBlogData();
          }}
          ref={formRef}
        >
          <div className="grid sm:grid-cols-2 gap-4 items-stretch">
            <div className="w-full h-full">
              <Select
                label="Select category"
                name="Select_category"
                variant="bordered"
                // validationBehavior="native"
                // isRequired
                placeholder="Select an category"
                // selectedKeys={[value]}
                className="w-full"
                onChange={handleChange}
                value={data.Select_category}
                classNames={{
                  base: "w-full !bg-white",
                  trigger: "h-12",
                }}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
            </div>

            <div className="">
              <Select
                items={users}
                label="Select a Author"
                name="Select_Author"
                placeholder="Select a Author"
                // validationBehavior="native"
                // isRequired
                variant="bordered"
                classNames={{
                  base: "w-full !bg-white",
                  trigger: "h-12",
                }}
                renderValue={(items) => {
                  return items.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                      <Avatar
                        alt={item.data.name}
                        className="flex-shrink-0"
                        classNames={{
                          base: "!size-4",
                        }}
                        src={item.data.avatar}
                      />
                      <div className="flex flex-col">
                        <span>{item.data.name}</span>
                        {/* <span className="text-default-500 text-tiny">({item.data.email})</span> */}
                      </div>
                    </div>
                  ));
                }}
                onChange={handleChange}
                value={data.Select_Author}
              >
                {(user) => (
                  <SelectItem key={user.name} textValue={user.name}>
                    <div className="flex gap-2   items-center">
                      <Avatar
                        alt={user.name}
                        className="flex-shrink-0"
                        size="sm"
                        src={user.avatar}
                      />
                      <div className="flex flex-col">
                        <span className="text-small">{user.name}</span>
                        <span className="text-tiny text-default-400">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </SelectItem>
                )}
              </Select>
            </div>
            <div>
              <Input
                type="text"
                name="title"
                // validationBehavior="native"
                // isRequired
                // labelPlacement="outside"
                label="Title"
                variant="bordered"
                placeholder="Enter blog title"
                classNames={{
                  base: "w-full !bg-white",
                  inputWrapper: "h-12",
                }}
                onChange={handleChange}
                value={data.title}
              />
            </div>
            <div>
              <Input
                type="text"
                name="slug"
                // validationBehavior="native"
                // isRequired
                // labelPlacement="outside"
                label="Slug"
                variant="bordered"
                placeholder="Add Unique blog slug"
                classNames={{
                  base: "w-full !bg-white",
                  inputWrapper: "h-12",
                }}
                onChange={handleChange}
                value={data.slug}
              />
            </div>
            <div>
              <div className="w-full flex flex-row gap-4">
                <DatePicker
                  label="Select Date"
                  variant="bordered"
                  showMonthAndYearPickers
                />
              </div>
            </div>
            <div>
              <label htmlFor="file-input" className="sr-only">
                Choose file
              </label>
              <input
                type="file"
                name="bannerImgUrl"
                onChange={uploadImage}
                // name="file-input"
                id="file-input"
                className="block w-full border-2 border-zinc-200 shadow-sm rounded-xl text-sm focus:z-10 focus:border-black focus:ring-black-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 hover:border-zinc-400
                 file:bg-gray-50 file:border-0
                   file:me-4
                  file:py-4 file:px-4
                  dark:file:bg-neutral-700 dark:file:text-neutral-400"
              />
            </div>
          </div>
          <div>
            <Input
              type="short description"
              name="shortDescription"
              label="short description"
              variant="bordered"
              placeholder="Enter your short description"
              className="w-full mt-3"
              onChange={handleChange}
              // validationBehavior="native"
              // isRequired
              value={data.shortDescription}
            />
          </div>
          <div>
            <h2 className="text-gray-400">Description :-</h2>
            <ReactQuill
              className="[&_.ql-editor]:h-48 [&_.ql-editor]:border [&_.ql-editor]:rounded-lg "
              theme="bubble"
              onChange={setQillValue}
              value={QillValue}
              name="description"
            />
          </div>
          {/* <div>
            <Textarea
              label="Description"
              name="description"
              variant="bordered"
              placeholder="Enter your full description"
              disableAnimation
              disableAutosize
              classNames={{
                base: "w-full mt-4",
                input: "resize-y min-h-[40px]",
              }}
              onChange={handleChange}
              value={data.description}
            />
          </div> */}
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <Select
                items={users}
                variant="bordered"
                name="Select_Tag"
                label="tags"
                placeholder="Add tags here"
                selectionMode="multiple"
                classNames={{
                  base: "w-full",
                  trigger: "h-12 ",
                }}
                renderValue={(items) => {
                  return (
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <Chip key={item.key}>{item.data.name}</Chip>
                      ))}
                    </div>
                  );
                }}
                onChange={handleChange}
                value={data.Select_Tag}
              >
                {(user) => (
                  <SelectItem key={user.name} textValue={user.name}>
                    <div className="flex gap-2 items-center">
                      <Avatar
                        alt={user.name}
                        className="flex-shrink-0"
                        size="sm"
                        src={user.avatar}
                      />
                      <div className="flex flex-col">
                        <span className="text-small">{user.name}</span>
                        <span className="text-tiny text-default-400">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </SelectItem>
                )}
              </Select>
            </div>
            <div>
              <div>
                <Input
                  type="text"
                  // labelPlacement="outside"
                  label="Img title"
                  placeholder="Add title here"
                  variant="bordered"
                  classNames={{
                    base: "w-full !bg-white",
                    inputWrapper: "h-14",
                  }}
                />
              </div>
            </div>
            <div>
              <Input
                type="text"
                // labelPlacement="outside"
                label="Img alt tag"
                placeholder="Add tag here"
                variant="bordered"
                classNames={{
                  base: "w-full !bg-white",
                  inputWrapper: "h-14",
                }}
              />
            </div>
            <div>
              <Input
                type="text"
                // labelPlacement="outside"
                variant="bordered"
                classNames={{
                  base: "w-full !bg-white",
                  inputWrapper: "h-14",
                }}
                name="metaTitle"
                label="Meta Title"
                placeholder="Enter meta title"
                onChange={handleChange}
                value={data.metaTitle}
              />
            </div>
          </div>
          <div>
            <Textarea
              variant="bordered"
              disableAnimation
              disableAutosize
              classNames={{
                base: "w-full mt-4",
                input: "resize-y min-h-[40px]",
              }}
              name="metaDescription"
              label="Meta Description"
              placeholder="Enter meta description"
              onChange={handleChange}
              value={data.metaDescription}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Meta keyword"
              variant="bordered"
              placeholder="Meta keyword"
              className="w-full mt-3"
            />
          </div>
          {faqs.map((faq, index) => {
            // console.log({ faq });

            return (
              <div
                key={index}
                className="flex flex-col gap-2 items-center mt-2"
              >
                <Input
                  clearable
                  variant="bordered"
                  type="text"
                  name="question"
                  label={`Question ${index + 1}`}
                  bordered
                  placeholder="Enter question"
                  onChange={(e) => handleFaqChange(faq.id, e)}
                  value={faq?.question}
                />
                <Textarea
                  clearable
                  variant="bordered"
                  name="answer"
                  label={`Answer ${index + 1}`}
                  bordered
                  placeholder="Enter answer"
                  onChange={(e) => handleFaqChange(faq.id, e)}
                  value={faq.answer}
                />
                {faqs.length > 1 && (
                  <Button
                    className="bg-white border-2 me-auto mb-6 border-red-600 font-semibold hover:bg-red-600 hover:text-white text-red-600"
                    bordered
                    auto
                    onClick={() => removeFaq(faq.id)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            );
          })}
          <Button
            className="bg-white border-2 mt-4  border-black font-semibold hover:bg-black hover:text-white"
            bordered
            auto
            onClick={addFaq}
          >
            Add FAQ
          </Button>

          <div>
            <Input
              type="color"
              label="color"
              name="color"
              variant="bordered"
              className="w-full mt-3"
              onChange={handleChange}
              value={data.color}
            />
          </div>

          <div></div>
          <div className="flex items-center mt-4 justify-end">
            <Button
              className="bg-white border-2 border-black font-semibold hover:bg-black hover:text-white"
              variant="bordered"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
