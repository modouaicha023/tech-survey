"use client";
import { useState } from "react";
import { database } from "@/utils/firebase";
import { push, ref, set } from "firebase/database";
import { v1 as uuidv1 } from "uuid";

const Survey = () => {
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
  const [error, setError] = useState(false);

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
    <div className="flex justify-evenly gap-16 border border-gray-400 p-10 rounded-l w-full">
      <div className="flex flex-col gap-3 border-r-2 p-6">
        <h1 className="text-3xl text-center font-semibold my-7">
          Share Your Job Income 👀
        </h1>
        <form onSubmit={handleSumbit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {["jobTitle", "jobType"].map((field) => (
              <input
                key={field}
                type="text"
                placeholder={
                  field === "jobTitle"
                    ? "Frontend, Backend developer...."
                    : "cdd, cdi, freelance, part time, full time...."
                }
                className="border bg-slate-600 p-3 rounded-lg"
                id={field}
                onChange={handleChange}
              />
            ))}
          </div>

          {formData.jobTitle !== "" && formData.jobType !== "" && (
            <div className="flex flex-col gap-4">
              {["xp", "unitXp"].map((field) => (
                <input
                  key={field}
                  type={field === "xp" ? "number" : "text"}
                  placeholder={
                    field === "xp"
                      ? "Number of years or months experience"
                      : "months, years"
                  }
                  className="border bg-slate-600 p-3 rounded-lg"
                  id={field}
                  onChange={handleChange}
                />
              ))}
            </div>
          )}

          {formData.xp !== "" && formData.unitXp !== "" && (
            <div className="flex flex-col gap-4">
              {["salary", "per", "currency"].map((field) => (
                <input
                  key={field}
                  type={field === "salary" ? "number" : "text"}
                  placeholder={
                    field === "salary"
                      ? "Your salary or income"
                      : field === "per"
                      ? "per hour, per month, per year...."
                      : "franc cfa, dollars, euro...."
                  }
                  className="border bg-slate-600 p-3 rounded-lg"
                  id={field}
                  onChange={handleChange}
                />
              ))}
            </div>
          )}

          {formData.salary !== "" &&
            formData.per !== "" &&
            formData.currency !== "" && (
              <input
                type="text"
                placeholder="Senegal, United States, Nigeria, UK...."
                className="border bg-slate-600 p-3 rounded-lg"
                id="country"
                onChange={handleChange}
              />
            )}

          {formData.country !== "" && (
            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              Submit
            </button>
          )}
        </form>
      </div>

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

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Survey;
