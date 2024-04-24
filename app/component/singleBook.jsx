export default function SingleBook({ bookinfo, onDelete, onEdit }) {
    // console.log(bookinfo);
  return (
    <div className=" border-solid border-2 border-sky-500 p-4 rounded-md mb-4">
      <p className=" m-4"> book Title: {bookinfo.title}</p>
      <p className=" m-4"> ISBN: {bookinfo.isbn}</p>
      <div  className= "flex justify-between m-4">
        {bookinfo.authorList.map((auther, index) => {
          return (
            <div key={index}>
              { (
                <div>
                  <p> author {index + 1} </p>
                  {
                    <div key={index}>
                      <p> auther name: {auther.name} </p>
                      <p> auther country: {auther.country} </p>
                    </div>
                  }
                </div>
                
                  
                  
              )}
            </div>
          );
        })}
      </div>
      <p className=" m-4"> publisher: {bookinfo.publisher}</p>
      <p className=" m-4">Release Year: {bookinfo.year}</p>
      {bookinfo.isAcademic ? (
        <p className=" m-4">This is academic book </p>
      ) : (
        <p className=" m-4">This is non academic book </p>
      )}
      <div className=" flex justify-center">
        <button
          className=" bg-red-500 px-4 py-2 rounded-sm mr-4"
          onClick={() => {
            onDelete(bookinfo.id);
          }}
        >
          {" "}
          Delete{" "}
        </button>
        <button
          className=" bg-green-500 px-4 py-2 rounded-sm"
          onClick={() => {
            onEdit(bookinfo);
          }}
        >
          {" "}
          Edit{" "}
        </button>
      </div>
    </div>
  );
}
