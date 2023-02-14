//  Dependencies
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
//  Components
import { EditBeer, Home, List, NewBeer } from "../pages"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/new-beer" element={<NewBeer />} />
                <Route path="/edit/:id" element={<EditBeer />} />

                <Route path="*" element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}