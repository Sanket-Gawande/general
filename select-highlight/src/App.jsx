import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [currentRecord, setCurrentRecord] = useState({});
  const [category, setCategory] = useState("Person");
  const record = [
    {
      content:
        "there is the village called khadak doh , very beutiful place for the nature lovers , the trees , animals , local peoples there are so",
      annotation: [
        { category: "person", label: "village" },
        { category: "person", label: "gawande" },
        { category: "org", label: "cybage" },
      ],
    },
    {
      content:
        "fvkldgjkh ;lvchkglfhk ;lkh;glhk l;bvkhlghk  trees , animals , local peoples there are so",
      annotation: [{ category: "person", label: "Sanket" }],
    },
    {
      content:
        "there ,.mhklgfhj op[fgohh] is the village called khadak doh , loremg klfcxjgklfdj  cjgvldfgjdlk zlkfjf , the trees , animals , local peoples there are so",
      annotation: [{ category: "org", label: "school" }],
    },
  ];
  const [records, setRecords] = useState(record);
  // update localStorage
  function updateLocalStorage(data) {
    localStorage.setItem("records", JSON.stringify(data));
  }
  //  update state/UI
  function updateRecordInState(changedRecord) {
    records[changedRecord.index] = changedRecord.payload;
    setCurrentRecord([...record]);
    updateLocalStorage(record);
  }
  //  remove annotation
  function deleteAnnotation(recordIndex, annotationIndex) {
    console.log(records[0].annotation , currentRecord);
    records[recordIndex].annotation.splice(annotationIndex, 1);
    currentRecord.content.annotation.splice(annotationIndex , 1)
    setCurrentRecord({...currentRecord , content:{...currentRecord.content,annotation : currentRecord.content.annotation}})
    console.log(records[0].annotation);
    setRecords(records);
    updateLocalStorage(records)
  }
  // add Annotation

  useEffect(() => {
    setCurrentRecord({ index: 0, content: record[0] });
  }, []);
  return (
    <section className="bg-slate-100 my-4 flex-1  h-full flex align-items-center max-w-[1200px] mx-auto">
      {/* record list  */}
      <div className="w-[25%] max-w-[200px]">
        <p className="bg-sky-800 px-4 py-2 text-white">Records</p>
        <ul className="">
          {record.map((item , index) => (
            <li
            onClick={() => setCurrentRecord({index , content : item})}
              className="px-2  text-sm py-1 cursor-pointer"
              key={Math.random()}
            >
              {item.content.substring(0, 20)}...
            </li>
          ))}
        </ul>
      </div>
      {/* content box */}
      <div className="w-full flex-1">
        {/* category tabs */}
        <div className="space-x-4 px-2  py-2 border-r-2 border-l-2  bg-sky-800">
          {["Person", "Org"].map((item) => (
            <button
              className={`px-4 py-[.5px] bg-white rounded-sm ${
                category === item ? "text-red-600" : "text-black"
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {/* content section */}

        <section className="border">
          <p className="p-4" >{currentRecord.content?.content}</p>
        </section>
      </div>
      {/* annotation box */}
      <div className="w-[25%] max-w-[250px]">
        <p className="bg-sky-800 px-4 py-2 text-white">Annotation</p>
        <ul className="">
          {currentRecord?.content?.annotation?.map(
            ({ category, label }, index) => (
              <li className="px-2 py-[.5px] text-sm py-1 flex" key={label}>
                <span className="font-medium px-1">{label}</span>
                <span className="text-xs px-2">{category}</span>
                <span
                  className="text-red-500 text-2xl cursor-pointer ml-auto"
                  onClick={() => deleteAnnotation(currentRecord.index, index)}
                >
                  &times;
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}

export default App;
