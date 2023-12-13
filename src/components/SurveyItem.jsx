"use client";
import { useState } from "react";
import { database } from "@/utils/firebase";
import { push, ref, set } from "firebase/database";

// const app = app.database("");
const uuid = require("uuid");

export default function SurveyItem(Question) {
  const initialData = {
    uid: uuid.v1(),
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

  const handleSumbit = (e) => {
    e.preventDefault();

    try {
      const surveyRef = ref(database, "devSurvey");
      const newDataRef = push(surveyRef);

      set(newDataRef, formData);

      alert("Thanks for your engements❤️");
      setError(false);
      setFormData(initialData);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className=" flex justify-between gap-16 border border-gray-400 p-10 rounded-l w-full">
      <div className="flex flex-col gap-3 border-r-2  p-6 ">
        <h1 className="text-3xl text-center font-semibold my-7">
          Share Your Job Income 👀
        </h1>
        <form onSubmit={handleSumbit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Frontend ,Backend developer...."
              className="border bg-slate-600 p-3 rounded-lg"
              id="jobTitle"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="cdd, cdi, freelance, part time, full time...."
              className="border bg-slate-600 p-3 rounded-lg"
              id="jobType"
              onChange={handleChange}
            />
          </div>
          {formData.jobTitle !== "" && formData.jobType !== "" && (
            <div className="flex flex-col gap-4">
              <input
                type="number"
                placeholder="Number of years or months experience "
                className="border bg-slate-600 p-3 rounded-lg"
                id="xp"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="months ,years"
                className="border bg-slate-600 p-3 rounded-lg"
                id="unitXp"
                onChange={handleChange}
              />
            </div>
          )}

          {formData.xp !== "" && formData.unitXp !== "" && (
            <div className="flex flex-col gap-4">
              <input
                type="number"
                placeholder="your salary or income"
                className="border bg-slate-600 p-3 rounded-lg"
                id="salary"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="per hour, per month ,per year...."
                className="border bg-slate-600 p-3 rounded-lg"
                id="per"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="franc cfa, dollars, euro.... "
                className="border bg-slate-600 p-3 rounded-lg"
                id="currency"
                onChange={handleChange}
              />
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
              Sumbit
            </button>
          )}
        </form>
      </div>

      <div className="flex flex-col gap-4 flex-1 p-6">
        <h2 className="text-3xl text-center font-semibold my-7">
          Your Survey ✨{" "}
        </h2>
        <h3>Id Survey: {formData.jobTitle !== "" && formData.uid} </h3>

        <div className="flex gap-4 items-center">
          <div className="text-2xl">Job Title :</div>
          <div className=" flex gap-1 text-opacity-70">
            <span> {formData.jobTitle !== "" && formData.jobTitle} </span>
            <span> {formData.jobType !== "" && formData.jobType} </span>
            <span>{formData.country !== "" && formData.country}</span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="text-2xl">Experience :</div>
          <div className=" flex gap-1 text-opacity-70">
            <span> {formData.xp !== "" && formData.xp} </span>
            <span> {formData.unitXp !== "" && formData.unitXp} </span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="text-2xl">Salary :</div>
          <div className=" flex gap-1 text-opacity-70">
            <span> {formData.salary !== "" && formData.salary} </span>
            <span>{formData.currency !== null && formData.currency}</span>
            <span>/{formData.per !== "" && formData.per}</span>
          </div>
        </div>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
