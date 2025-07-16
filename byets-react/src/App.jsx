import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import PostCompo from "./Components/PostCompo";
import axios from "axios";


function App() {
  const [data, setData] = useState(1);
  const [text, setText] = useState("Hello World!");
  const [slogan, setSlogan] = useState("Tumi ke? ami ke?");
  const [fetchData, setFetchData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(0);



  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setTotalPages(Math.ceil(response.data.length / dataPerPage));
      });
      axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${(pageNo - 1) * dataPerPage}&_limit=${dataPerPage}`)
      .then(response => setFetchData(response.data));
  }, [dataPerPage, pageNo]);


  const stylePara = {
    color: "green",
    fontSize: "18px",
    fontWeight: "bold",
  }

  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero msg="Siam 1" info="tao biye koreni!" />
      <Hero msg="Arafat 1" info="tao fixed bach e thakbena!" />
      <h1 style={{ color: "blue", fontSize: "24px" }}>Hello World!</h1>
      <p style={stylePara}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic incidunt doloribus sed totam voluptatem, in aut enim facilis at sunt voluptates facere. Magni impedit similique, ratione pariatur exercitationem ea veritatis! Dolores magni quae qui explicabo vitae commodi amet iusto eligendi blanditiis saepe. Sapiente provident iusto architecto quos. Molestias, repellat!
      </p>
      <div className="flex justify-center items-center gap-2">
        <button className="border px-2 py-2 cursor-pointer" onClick={() => setData(data + 1)}>+</button>
        <div className="text-4xl">{data}</div>
        <button className="border px-2 py-2 cursor-pointer" onClick={() => data > 0 ? setData(data - 1) : setData(0)}>-</button>
      </div>
      <div>{text}</div>
      <button onClick={() => setText("Hello Siam")}>Siam</button>
      <button onClick={() => setText("Hello World")}>World</button>
      <div className="text-4xl" onMouseOver={() => setSlogan("Bangladesh! Bangladesh!")} onMouseOut={() => setSlogan("Tumi ke? ami ke?")}>{slogan}</div>
      <h1 className="text-2xl font-bold mt-8">Posts</h1>
      {/* Form to change total data per page */}
      <div className="flex items-center gap-2 mt-4">
        <label htmlFor="dataPerPage" className="text-lg">Data per page:</label>
        <input
          type="number"
          id="dataPerPage"
          value={dataPerPage}
          onChange={(e) => setDataPerPage(Number(e.target.value))}
          className="border p-2 rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {fetchData.map(item => (
          <PostCompo key={item.id} title={item.title} body={item.body} />
        ))}
      </div>
      <div className="flex justify-start mt-4">
        <button
          className="border px-4 py-2"
          onClick={() => setPageNo(prev => Math.max(prev - 1, 1))}
          disabled={pageNo === 1}
        >
          Previous
        </button>
        {/* page buttons with ... */}
        {totalPages <= 5 ? (
          Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`border px-4 py-2 ${pageNo === i + 1 ? "bg-blue-500 text-white" : ""}`}
              onClick={() => setPageNo(i + 1)}
            >
              {i + 1}
            </button>
          ))
        ) : (
          <>
            <button
              className={`border px-4 py-2 ${pageNo === 1 ? "bg-blue-500 text-white" : ""}`}
              onClick={() => setPageNo(1)}
            >
              1
            </button>
            {pageNo > 3 && <span className="px-2">...</span>}
            {Array.from({ length: 3 }, (_, idx) => {
              let page;
              if (pageNo <= 3) {
                page = idx + 2;
              } else if (pageNo >= totalPages - 2) {
                page = totalPages - 3 + idx;
              } else {
                page = pageNo - 1 + idx;
              }
              if (page > 1 && page < totalPages) {
                return (
                  <button
                    key={page}
                    className={`border px-4 py-2 ${pageNo === page ? "bg-blue-500 text-white" : ""}`}
                    onClick={() => setPageNo(page)}
                  >
                    {page}
                  </button>
                );
              }
              return null;
            })}
            {pageNo < totalPages - 2 && <span className="px-2">...</span>}
            <button
              className={`border px-4 py-2 ${pageNo === totalPages ? "bg-blue-500 text-white" : ""}`}
              onClick={() => setPageNo(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          className="border px-4 py-2"
          onClick={() => setPageNo(prev => Math.min(prev + 1, totalPages))}
          disabled={pageNo === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
