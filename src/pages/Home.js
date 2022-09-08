import React, { useEffect, useState } from 'react'
import { countryList } from '../MenuItem'

function Home() {
  const [suggest, setSuggest] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
   
  }, [value])

  const complete = (val)=>{
    setSuggest([]);
    setValue(val)
  }

  const search=(value)=>{
    setValue(value)
    if (value.trim().length == 0) {
      setSuggest([]);
      return
    }
    let result = [];
    const val = value.toLocaleLowerCase();
    for (let i = 0; i < countryList.length; i++) {
      if (countryList[i].name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1)
        result.push(countryList[i]);
    }
    for (let i = 0; i < result.length; i++) {
      let item = result[i];
      const match = item.name.match(new RegExp(value, 'i'));
      item.hilightName = item.name.replace(match[0], `<strong>${match[0]}</strong>`);
    }
    // console.log(result)
    setSuggest([...result])
  }

  return (
    <div>
      <form autoComplete="off">
        <div className="autocomplete" style={{width:'300px'}}>
          <input id="myInput" onChange={(e)=>{search(e.target.value)}} value={value} type="text" name="myCountry" placeholder="Country"/>
          <div className="autocomplete-items">
            {suggest.length>0 && suggest.map((item, i)=>{
              return <div key={item.code} dangerouslySetInnerHTML={{__html:item.hilightName}} onClick={()=>complete(item.name)}></div>
            })}
          </div>
        </div>
        <input type="submit"/>
      </form>
    </div>

  )
}

export default Home