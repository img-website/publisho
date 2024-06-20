import React from 'react'
import { PlusIcon } from '../component/Icons'

import { Select, SelectItem, Avatar, Input,DatePicker,Textarea, Chip} from "@nextui-org/react";
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
  { key: "crocodile", label: "Crocodile" }
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
  const [value, setValue] = React.useState("");

  const handleSelectionChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className='mt-16 p-4 text-lg font-semibold flex items-center gap-2'>
        <PlusIcon className=" size-5 border-black border rounded-full" />
        Add Blog <span>
        </span>
      </div>
      <form className="bg-white p-4 shadow-lg">
        <div className='grid grid-cols-2 gap-4 items-stretch'>
          <div className='w-full h-full'>
            <Select
              label="Select category"
              variant="bordered"
              placeholder="Select an category"
              selectedKeys={[value]}
              className="w-full"
              onChange={handleSelectionChange}
              classNames={{
                base: "w-full !bg-white",
                trigger: "h-12",
              }}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>


          <div className=''>
            <Select
              items={users}
              label="Select a Author"
              placeholder="Select a Author"
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
                        base:"!size-4"
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
            >
              {(user) => (
                <SelectItem key={user.id} textValue={user.name}>
                  <div className="flex gap-2   items-center">
                    <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
                    <div className="flex flex-col">
                      <span className="text-small">{user.name}</span>
                      <span className="text-tiny text-default-400">{user.email}</span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>
          </div>
          <div>
            <Input
              type="text"
              // labelPlacement="outside"
              label="Title"
              variant="bordered"
              defaultValue="Add title here"
              classNames={{
                base: "w-full !bg-white",
                inputWrapper: "h-12",
              }}
            />
          </div>
          <div>
            <Input
              type="slug"
              // labelPlacement="outside"
              label="Slug (url)"
              variant="bordered"
              defaultValue="Add url here"
              classNames={{
                base: "w-full !bg-white",
                inputWrapper: "h-12",
              }}
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
  <label for="file-input" class="sr-only">Choose file</label>
  <input type="file" name="file-input" id="file-input" class="block w-full border-2 border-zinc-200 shadow-sm rounded-xl text-sm focus:z-10 focus:border-black focus:ring-black-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 hover:border-zinc-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-4 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"/>

          </div>
        </div>
        <div>
         <Input
      isClearable
      type="short description"
      label="short description"
      variant="bordered"
      placeholder="Enter your email"
      className="w-full mt-3"
    />
        </div>
         <div>
          <Textarea
      label="Description"
      variant="bordered"
      placeholder="Enter your description"
      disableAnimation
      disableAutosize
      classNames={{
        base: "w-full mt-4",
        input: "resize-y min-h-[40px]",
      }}
    />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
        <div >
         <Select
      items={users}
      variant="bordered"
      label="tags"
      placeholder='Add tags here'
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
    >
      {(user) => (
        <SelectItem key={user.id} textValue={user.name}>
          <div className="flex gap-2 items-center">
            <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
            <div className="flex flex-col">
              <span className="text-small">{user.name}</span>
              <span className="text-tiny text-default-400">{user.email}</span>
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
              placeholder='Add title here'
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
              placeholder='Add tag here'
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
              label="Meta title"
              placeholder='Add tag here'
              variant="bordered"
              classNames={{
                base: "w-full !bg-white",
                inputWrapper: "h-14",
              }}
            />
          </div>
        </div>
         <div>
          <Textarea
      label="Meta Description"
      variant="bordered"
      placeholder="Enter your description"
      disableAnimation
      disableAutosize
      classNames={{
        base: "w-full mt-4",
        input: "resize-y min-h-[40px]",
      }}
    />
        </div>
         <div>
         <Input
      isClearable
      type="text"
      label="Meta keyword"
      variant="bordered"
      placeholder="Meta keyword"
      className="w-full mt-3"
    />
        </div>
           <div>
         <Input
      isClearable
      type="text"
      label="FAQ quection"
      variant="bordered"
      placeholder="Add quection here"
      className="w-full mt-3"
    />
        </div>
        <div>
          <Textarea
      label=" FAQ answer"
      variant="bordered"
      placeholder=" FAQ answer"
      disableAnimation
      disableAutosize
      classNames={{
        base: "w-full mt-4",
        input: "resize-y min-h-[40px]",
      }}
    />
        </div>
        
           <div>
         <Input
      isClearable
      type="color"
      label="FAQ quection"
      variant="bordered"
      placeholder="Add quection here"
      className="w-full mt-3"
    />
        </div>


      </form>
    </>
  )
}

