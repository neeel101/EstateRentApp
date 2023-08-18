import FilterBox from "./FilterBox";
import mockData from "../utils/mockData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  let cnt = 0;
  const [dataList, setDataList] = useState(mockData);
  const handleDatList = (arr) => {
    setDataList(arr);
  }
  console.log(dataList);
  return (
    <div className="body">
      <div className="body-child">
      <h1>Search properties to rent</h1>
      <input type="text" name="" placeholder="Search with search bar" id="" />
      </div>
      <FilterBox list = {mockData} fun = {handleDatList}/>
      <div className="card-container">
        {dataList.map((element, index) => (
          <Card key={index} data={element} />
        ))}
      </div>
    </div>
  );
};
export default Body;

/*

[
    {
        "price" : 200,
        "address" : key,
         "name" : key,
         info : {
            beds : 3,
            bathroom : 4,
            area : sq km
         }
    },
    {
         "price" : 200,
        "address" : key,
         "name" : key,
         info : {
            beds : 3,
            bathroom : 4,
            area : sq km
         }
    },
    {
         "price" : 200,
        "address" : key,
         "name" : key,
         info : {
            beds : 3,
            bathroom : 4,
            area : sq km
         }
    }
]

*/
