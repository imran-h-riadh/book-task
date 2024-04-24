"use client";
import Image from "next/image";
import BookBorad from "./component/bookBoard";
import { useEffect, useState } from "react";
import Bookform from "./component/bookform";
import postadd from "@/services/postAdd";
import deletebook from "@/services/deletebook";
import getData from "@/services/getdata";
import editdata from "@/services/editdata";

export default function Home() {
  const [isAdd, setIsAdd] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editInfo, setEditInfo] = useState({
    
      title: "",
      isbn: "",
      authorList: [
        { name: "", country: "" },
        { name: "", country: "" },
        {  name: "", country: "" },
      ],
      publisher: "",
      year: "",
      isAcademic: false,
    
  });
  const [bookList, setBookList] = useState([
    {
      title: "Hajar Bochor dhore",
      isbn: "1234",
      authorList: [
        { name: "jahir", country: "BD" },
        { name: "rayhan", country: "Bangladesh" },
        { name: "dont know", country: "DD" },
      ],
      publisher: "Abcde",
      year: "5454",
      id: 7126487162534,
      isAcademic: false,
    },
  ]);
  async function handleAdd(book,action) {
    setIsAdd(!isAdd);
    if(action){
      setIsEditMode(!isEditMode);
        const returnedData = await editdata(book,book.id);
        getall();
    }
    else{
      
        const returnedData = await postadd(book);
        
        getall();
    }
  }
  async function handleDelete(id) {
    await deletebook(id);
    try{
      const res = await getData();
      
      setBookList(res.map(item => {
        if (Array.isArray(item)) {
            return [item.map(subItem => ({...subItem}))]; 
        } else {
            return {...item}; 
        }
    }));
    

    }
    catch(e){

    }
    
  }
  async function handleEdit(book){
    setIsAdd(!isAdd);
    setIsEditMode(!isEditMode);
    setEditInfo({
      title: book.title,
        isbn: book.isbn,
        authorList: book.authorList.map(author => ({...author})), 
        publisher: book.publisher,
        year: book.year,
        id: book.id,
        isAcademic: book.isAcademic
    })
  }
  async function getall() {
    const res = await getData();
    setBookList(res);
    
  }

  useEffect(() => {
    getall();
  },[])
  return (
    <main>
      <p className=" text-3xl font-semibold text-center m-20">Book List</p>
      {isAdd && (
        <div className=" absolute h-96 w-96 bg-black border border-sky-500 h-auto w-full  ">
          <Bookform onSubmitAdd={handleAdd} isEditMode ={isEditMode} editInfo = {editInfo} />
        </div>
      )}
      <div className=" flex justify-center ">
        <button
          className=" bg-sky-500 rounded-md px-4 py-2 "
          onClick={() => setIsAdd(!isAdd)}
        >
          {" "}
          Add new Book
        </button>
      </div>
      <BookBorad bookList={bookList} onDelete={handleDelete} onEdit = {handleEdit} />
    </main>
  );
}
