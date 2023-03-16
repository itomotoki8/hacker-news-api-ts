import React, { useEffect, useState } from 'react';
import "./css/ApiData.css";


const ApiData = (props: { title: string; }) => {

const baseURL:string = "https://hacker-news.firebaseio.com/v0/"; //.jon
const itemURL:string = "https://hacker-news.firebaseio.com/v0/item/"; //.json?print=pritty



type valueType = {
    title:string,
    by:string,
    url:string,
    key:number,
};

const [valueDatas,setValueDatas] = useState<valueType[]>([]);


useEffect(()=> {
    const getStory = async(id:number) => {
        const res = await fetch(itemURL+id+".json?print=pretty");
        const newsData = await res.json();
        const valueData:valueType = {
            title: newsData.title,
            by: newsData.by,
            url: newsData.url,
            key: newsData.id
        };
        return valueData;
    };

    const getStories = async (type:string) => {
        const res = await fetch(baseURL+type+".json");
        const ids:number[] = await res.json();
        const getDatas:valueType[] = await Promise.all(ids.slice(0,30).map(getStory));
        setValueDatas(getDatas);
    };

    getStories(props.title);
},[props.title]);




  return (
    <section className='section'>
    <ul>
    {valueDatas.map(e =>(
      <li className="item" key={e.key}>
        <div className="title">
          <h3>{e.title}</h3>
          <p>by: {e.by}</p>
        </div>
        <a href={e.url} target="_blank" rel="noopener noreferrer">詳細</a>
      </li>
    ))}
    </ul>
  </section>
)
}

export default ApiData;