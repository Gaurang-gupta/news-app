import { useEffect, useState } from "react"
import data from "../../testData.json"
import Card from "../Card/Card"
function Page() {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    const getData = async() => {
        const dataFromApi = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_API_KEY}&countries=us%2Cin&limit=100&offset=0&sort=published_desc`, {
            referrerPolicy: "unsafe-url" 
        }).then(res => res.json()).then(data => setData(data))
    }

    useEffect(() => {
        getData()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        setSearch(formdata.get('search'))
    }

    console.log("Search = ", search)

    useEffect(() => {
        const getData = async () => {
            const dataFromApi = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_API_KEY}&countries=us%2Cin&limit=100&offset=0&sort=published_desc&keywords=${search}`, {
                referrerPolicy: "unsafe-url" 
            }).then(res => res.json()).then(data => setData(data))
        }
        getData()
    }, [search])

    useEffect(() => {
        const searchSetter = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const myParam = urlParams.get('target');
            if(myParam === null) {
                setSearch("")
                return;
            }
            setSearch(myParam)
            if(myParam !== ""){
                const dataFromApi = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_API_KEY}&countries=us%2Cin&limit=100&offset=0&sort=published_desc&categories=${myParam}`, {
                    referrerPolicy: "unsafe-url" 
                }).then(res => res.json()).then(data => setData(data))
            }
        }

        searchSetter()
    }, [window.location.search])
  return (
    <main className="p-0">
        <form onSubmit={(e) => handleSubmit(e)} className='flex justify-between align-middle p-4 mb-4 w-[90%] mx-auto'>
            <input name="search" className='bg-gray-100 flex-1 outline-none' type="text" placeholder='Search Keywords...'/>
            <button type="submit" className='text-gray-400'>Search</button>
        </form>

        {search !== null && search !== "" && <h1 className="w-[90%] mx-auto pb-3 text-3xl mb-4">Search results for <span className="font-bold uppercase underline underline-offset-4 decoration-6 decoration-orange-400">{search}</span></h1>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] mx-auto pb-5">
            {data?.data?.map((data, index) => (
                <Card key={index} data={data}/>
            ))}

        </div>
    </main>
  )
}

export default Page