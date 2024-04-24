import React from "react";
import { useState } from "react";

export default function Bookform({onSubmitAdd,isEditMode,editInfo}) {
  const [formData, setFormData] = useState( isEditMode ? {...editInfo} : {
    
    
        title: "",
        isbn: "",
        authorList: [
          { name: "", country: "" },
          {  name: "", country: "" },
          {  name: "", country: "" },
        ],
        publisher: "",
        year: "",
        isAcademic: false,
      
    
  });

  const handleAuthorChange = (e, index, field) => {
    const updatedAuthors = [...formData.authorList, ];
    updatedAuthors[index][field] = e.target.value;
    setFormData({ ...formData, authorList: updatedAuthors });

    
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmitAdd(formData,isEditMode);
    
  };

  return (
    <div className=" flex justify-center" >
        <form onSubmit={handleSubmit}>
            <div className=" p-2 mt-4 mb-4 ">
                <label>Title: </label>
                <input
                className=" rounded-sm text-black"
                type="text"
                name="title"
                value={formData.title}
                placeholder="Title"
                onChange={handleChange}
                />
            </div>

            <div className=" p-2 mt-4 mb-4 ">
                <label>ISBN: </label>
                <input
                className="rounded-sm text-black"
                type="text"
                name="isbn"
                placeholder="ISBN"
                value={formData.isbn}
                onChange={handleChange}
                />
            </div>

            <div className=" p-2 mt-4 mb-4">
                <label>Authors: </label>
                
                {formData.authorList.map((author, index) => (
                    <div className=" p-2 mt-4 mb-4" key={index}>
                        <>
                            <input
                            type="text"
                            name="name"
                            placeholder="Author's name"
                            value={author.name}
                            onChange={(e) => handleAuthorChange(e, index, "name")}
                            className=" gap-6  rounded-sm m-2 text-black"
                            />
                            <input
                            className="rounded-sm text-black"
                            type="text"
                            name="country"
                            placeholder="Author's country"
                            value={author.country}
                            onChange={(e) => handleAuthorChange(e, index, "country")}
                            />
                            <br />
                        </>
                    </div>
                ))}
            </div>
            

            <div className=" p-2 mt-4 mb-4 ">
                <label>Publisher: </label>
                <input
                className=" rounded-sm text-black"
                type="text"
                name="publisher"
                placeholder="Publisher"
                value={formData.publisher}
                onChange={handleChange}
                />
            </div>

            <div className=" p-2 mt-4 mb-4 rounded-sm">
                <label>Year: </label>
                <input
                className="rounded-sm text-black"
                type="text"
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
                />
            </div>

            <div className=" p-2 mt-4 mb-4 rounded-sm">
                {" "}
                <label>Is Academic: </label>
                <input
                className="rounded-sm text-black"
                type="checkbox"
                name="isAcademic"
                checked={formData.isAcademic}
                onChange={() =>
                    setFormData({ ...formData, isAcademic: !formData.isAcademic })
                }
                />
                
            </div> 
            <div className=" p-2 mt-4 mb-4  flex justify-center " >
                <button className=" bg-red-500 px-4 py-2 rounded-sm" type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
}
