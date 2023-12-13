"use client";

const Survey = ({ handleChange, handleSumbit, formData, error }) => {
  return (
    <div className="flex justify-evenly gap-16 border border-gray-400 p-10 rounded-l">
      <div className="flex flex-col gap-3 p-6">
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

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Survey;
