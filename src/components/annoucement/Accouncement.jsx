import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


const Announcement = () => {
  const [loading, setLoading] = useState(true);
  const [itemData, setItemData] = useState([]);

  const getData = async () => {
    try{
      const res = await fetch(
        "https://sheetdb.io/api/v1/yvnmlerq0igpo"
      )
      const data = await(res.json())
      setItemData(data)
      setLoading(false)
    }catch (error){
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

 
  return (
    <div className=" bg-gray-100 flex justify-between items-center py-1 px-0 font-[.8rem]">
      <div>
        <button
          onClick={() => getData()}
          className="bg-[#42878b] hover:bg-[#76e6ea] text-white py-2 px-4 rounded whitespace-nowrap"
        >
          Live data
        </button>
      </div>
      {loading ? (
        <div>Loading data...</div>
      ) : (
        <Marquee speed={80} pauseOnHover gradient={false}>
          {itemData &&
            itemData.map((item, index) => (
              <AnnouncementText
                crop={item.Commodity}
                price={item.Price}
                percentage={item.Percentage}
                // date={item.date}
                key={index}
              />
            ))}
        </Marquee>
      )}
      
    </div>
  );
};

const AnnouncementText = ({ crop, price, percentage }) => {
  return (
    <div className="flex items-center mr-8">
      <span className="mr-4 font-serif not-last-child:mr-4 last-child:mr-0">
        {crop}
      </span>
      <span className="mr-4 not-last-child:mr-4 last-child:mr-1">{price}</span>
      <span className="mr-4 font-serif not-last-child:mr-4 last-child:mr-1">
        {percentage}
      </span>
    </div>
  );
};

export default Announcement;
