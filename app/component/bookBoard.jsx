import SingleBook from "./singleBook";

export default function BookBorad({bookList,onDelete,onEdit}) {
  

  return (
    <>
      <div className="  h-auto p-10 mt-8 static ">
        
        
        {
          bookList.map((book,index) =>{
            return(
              <SingleBook 
               key={ index}
               bookinfo = {book}
               onDelete = {onDelete}
               onEdit = {onEdit}
               />
               
            )
          })
        }

      </div>
    </>
  );
}
