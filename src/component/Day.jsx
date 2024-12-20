import { useParams } from "react-router-dom";
import dummy from "../db/data.json"
import Word from "./Word";
import { useEffect, useState } from "react";
import useFetch from "../hook/useFetch";

function Day(props) {
  // const day = 3;

  // const day = useParams().day;
  // const wordList = dummy.words.filter(k=>(k.day) === Number(day))
  // const [words, setWords] = useState([]);
  
  // useEffect => hook
  // useEffect(() => {
    //   fetch(`http://localhost:3010/words?day=${day}`)
    //     .then(res => {
      //       return res.json()
      //     })
      //     .then(data => {
        //       setWords(data);
        //     })
        //     .catch((error) => console.log("Error", error));
        // }, []);
        
        // url에 포함된 day 값을 가져오기 위해서 useParams()
        const day = useParams().day;
        const words = useFetch(`http://localhost:3010/words?day=${day}`);
  return (
    <table>
      <tbody>
        {/* {dummy.words.map(k=>{ */}
        {words.map(k => {
          return <Word key={k.id} word={k} />
        })}
      </tbody>
    </table>
  );
}

export default Day;