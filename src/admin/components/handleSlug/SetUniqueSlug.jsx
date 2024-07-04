import { Input } from "@nextui-org/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../context/Firebase";
import { toast } from "sonner";

const SetUniqueSlug = ({ value, onChange,setIsValid }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    const validateSlug = async () => {
      // Validate the slug format
      if (!/^[a-z0-9-]+$/.test(value)) {
        setError("Slug can only contain lowercase letters, numbers, and hyphens.");
        setIsValid(false);
        return;
      }

      // Check for uniqueness
      const q = query(collection(db, "blogs"), where("slug", "==", value));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setError("Slug already exists. Please choose a unique slug.");
        setIsValid(false);
      } else {
        setError("");
        setIsValid(true);
      }
    };

    if (value) {
      validateSlug();
    }
  }, [value, setIsValid]);

  const handleChange = (e) => {
    let newValue = e.target.value;
    newValue = newValue.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-#-$-@]/g, "").toLowerCase();
    onChange(newValue);
  };
  return (
    <div>
      <div>
        <Input
          type="text"
          name="slug"
          validationBehavior="native"
          isRequired
          label="Slug"
          variant="bordered"
          placeholder="Add Unique blog slug"
          classNames={{
            base: "w-full !bg-white",
            inputWrapper: "h-12",
          }}
          onChange={handleChange}
          value={value}
          status={error ? "error" : "default"}
          helperText={error}
        />
      </div>
    </div>
  );
};

export default SetUniqueSlug;
