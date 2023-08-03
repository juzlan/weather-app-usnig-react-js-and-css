import React, { useEffect, useState } from 'react'
import pic from './29595940-blue-yellow-and-white-weather-web-or-phone-app-icon-with-cloud-and-sun.webp'
function Testapp() {
    const [city, setCity] = useState()
    const [search, setSearch] = useState('karachi')


    useEffect(() => {
        const fetchapi = async () => {
            const link = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bd4527f02f6666870ab75dd1fcc83af4`
            const res = await fetch(link);
            console.log(res)
            const resJson = await res.json();
            //console.log("yrr",resJson?.main)    //convert into json
            setCity(resJson?.main)
        }
        fetchapi()

    }, [search])
    return (
        <>
            <div className="box">

                <div className="a1">
                    <div><img src={pic} alt="image" className='bb' />
                    </div>
                    <h1 className='web'>WEATHER APP </h1>
                    <input type="text" placeholder='search' onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
                </div>
                {
                    !city ? (
                        <p>No data found</p>
                    ) :
                        (

                            <div className="info">

                                <h1 className='a2'> City: {search}</h1>
                                {/* {console.log("ciity",city)} */}
                                <h2 className='a3'> Temp: {city?.temp}°C</h2>

                                <h3 className='a4'>  Max-Temp {city?.temp_min}°C | Min-Temp: {city?.temp_max}°C </h3>
                            </div>


                        )


                }



                <footer> Solutions®</footer>



            </div>


        </>
    )
}

export default Testapp