"use client";
import React, { useState } from "react";
import { database } from "@/utils/firebase";
import { push, ref, set } from "firebase/database";
import { v1 as uuidv1 } from "uuid";
import Survey from "@/components/Survey";

export default function Home() {
  const initialData = {
    uid: uuidv1(),
    jobTitle: "",
    jobType: "",
    xp: "",
    unitXp: "",
    salary: "",
    per: "",
    currency: "",
    country: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const surveyRef = ref(database, "devSurvey");
      const newDataRef = push(surveyRef);

      await set(newDataRef, formData);

      alert("Thanks for your engagement ❤️");
      setError(false);
      setFormData(initialData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="flex  flex-col items-center p-8 max-h-screen h-full">
      <div className="flex p-6">
        <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent self-end">
          Dev
        </span>
        <span className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-amber-300 bg-clip-text text-transparent">
          Survey
        </span>
      </div>
      <div className=" flex items-center justify-between p-6 w-full h-full">
        <Survey
          handleChange={handleChange}
          handleSumbit={handleSumbit}
          formData={formData}
          error={error}
        />

        <div className="flex flex-col gap-4 flex-1 p-6">
          <h2 className="text-3xl text-center font-semibold my-7">
            Your Survey ✨
          </h2>
          {["Job Title", "Experience", "Salary"].map((section) => (
            <div key={section} className="flex gap-4 items-center">
              <div className="text-2xl">{section} :</div>
              <div className="flex gap-1 text-opacity-70">
                {section === "Job Title" &&
                  ["jobTitle", "jobType"].map((field) => (
                    <span key={field}>
                      {formData[field] !== "" && formData[field]}
                    </span>
                  ))}
                {section === "Experience" &&
                  ["xp", "unitXp"].map((field) => (
                    <span key={field}>
                      {formData[field] !== "" && formData[field]}
                    </span>
                  ))}
                {section === "Salary" &&
                  ["salary", "currency", "per"].map((field) => (
                    <span key={field}>
                      {formData[field] !== "" && formData[field]}
                    </span>
                  ))}
                {section === "Salary" && formData.country !== "" && (
                  <span>{formData.country}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
