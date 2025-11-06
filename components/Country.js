import { useEffect, useState} from 'react'
import '../country.css'
import { Link, useLocation,  useParams } from 'react-router'
import { UseTheme } from '../Hooks/useTheme'

export default function Country() {
  const [Data,setData]=useState({})
  const [error,seterror]=useState(false)
  const countryName = useParams().country
  const { state } = useLocation()
  const [isdark]=UseTheme()
    
   function updateCountryData(country){
    setData(
      {
        Name:country.name.common,
        population:country.population.toLocaleString('en-IN'),
        nativeName: Object.values(country.name.nativeName ?? {})[0]?.common,
        flag:country.flags.png,
        topLevelDomain:country.tld.join(', '), 
        region:country.region ?? '',
        subregion:country.subregion ?? undefined,
        capital:country.capital?.[0] || '',
        currencies: Object.values(country.currencies ?? {})
       .map((currency) => currency.name)
       .join(', '),
       languages: Object.values(country.languages ?? {}).join(', '),
       borders: [],
      }
   )
    
   Promise.all(country.borders?.map((border)=>{
       return  fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=> res.json()
       .then(([bordercoutry])=>bordercoutry.name.common)
       )
   }) || [])
   .then((borders)=>{
     setData((prevState) => ({...prevState, borders }))
   })
   }
   useEffect(()=>{
    if (state) {
      updateCountryData(state)
      return 
    }
       fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then(res=>res.json()).
         then(([country])=>{
          //  console.log(country)
          updateCountryData(country)
         }).catch((err)=>{
          console.log(err);
          seterror(true);
         })
   },[countryName])

   if(error){
    return <div>can not find your country</div>
   }

  return (
    <>
      <main className={`main ${isdark?'dark':''}`}> 
        <div className="back">
            <p className="back-button" onClick={()=>history.back()}> <i className="fa-solid fa-arrow-left"></i> Back </p> 
        </div>
       <div className="country-details">
           {<img  src={Data.flag} alt="Flag"/> }
            <div className="information">
                <h3>{Data.Name}</h3>
               { <div className="texts">
                    <div className="first-para">
                        <p>
                            <b>Native name: </b> <span className="native-name">{Data.nativeName} </span>
                          </p>
                           <p><b>Population: </b><span className="population">{Data.population} </span></p>
                           <p><b>Region: </b><span className="region">{Data.region}</span></p>
                           <p><b>Sub Region: </b><span className="sub-region">{Data.subregion} </span></p>
                           <p><b>Capital: </b><span className="capital">{Data.capital} </span></p>
                    </div>
            <div className="second-para">
                <p className="top-level-tag">
                    <span className="top-level"><b>Top Level Domain: </b></span>
                    <span className="top-level-domain">{Data.topLevelDomain}</span>
                   </p>
                <p><b>Currencies: </b><span className="currencies">{Data.currencies} </span></p>
                   <p className="language-tag">
                    <span className="bold-tag"> <b>Languages: </b></span>
                    <span className="languages">{Data.languages} </span>
                  </p>
            </div>
                   

                </div> }
                <div className="border-country">
                    <b>Border Countries: </b>
                    <div className="border-box">
                        {
                           Data.borders?.map((borders)=><Link key={borders} to={`/${borders}`}>{borders}
                           </Link>  )
                        } 
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}
