//  Dependencies
import { BsGithub, BsLinkedin } from "react-icons/bs"
//  Hooks
import { useEffect, useState } from "react"
import { Api } from "../../shared/services"
//  Components
import { BeerList, Pgs } from "./components"
import { Header } from "../../shared/components"
//  Types
import { IList } from "../../shared/types"
//  Style
import "./list.css"

export const List = () => {
    
    const [ list, setList ] = useState<IList[] | null>(null)
    const [ itemsPerPage, setItemsPerPage] = useState(20)
    const [ currentPage, setCurrentPage] = useState(1)

    const pages = Math.ceil(Number(list?.length) / itemsPerPage)
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = list?.slice(startIndex, endIndex)

    useEffect(() => {
        const getList = async () => {
            await Api().get("/list")
            .then(res => setList(res.data))
            .catch(error => alert(error.response.data))
        }
        getList()
    }, [])

    return (
        <div>
            <Header />
            <div className="List-background">
                <div className="List-container">
                    {currentItems && <BeerList currentItems={currentItems} />}

                    <Pgs currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage}  />
                </div>
                <div className="List-social-media">
                    <div onClick={() => window.location.href="https://github.com/FernandoLuppo"}> <BsGithub size={40} /></div>
                    <div onClick={() => window.location.href="https://www.linkedin.com/in/fernando-luppo-331496203/"}> <BsLinkedin size={40} /></div>
                </div>
            </div>
        </div>
    )
}