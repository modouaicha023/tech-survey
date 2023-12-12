"use client"
import { useState } from 'react';

// const firebase = require('firebase');
const uuid = require("uuid");



export default function SurveyItem(Question) {

    const initialData = {
        uid: uuid.v1(),
        jobTitle: "",
        jobType: "",
        xp: 0,
        unitXp: "",
        salary: 0,
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
    console.log(formData);

    const handleSumbit = (e) => { e.preventDefault(); }
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Share Your Job Income 👀</h1>
            <form onSubmit={handleSumbit} className="flex flex-col gap-4">
                <div className='flex flex-col gap-4'>
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
                </div >
                <div className='flex flex-col gap-4'>

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
                        id="unitxp"
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col gap-4'>
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

                <input
                    type="text"
                    placeholder="Senegal, United States, Nigeria, UK...."
                    className="border bg-slate-600 p-3 rounded-lg"
                    id="country"
                    onChange={handleChange}
                />
                <button
                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                    Sumbit
                </button>
            </form>
            {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
    )
}
