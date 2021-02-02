import React from 'react'
import {Link, Route, Switch} from "react-router-dom"
import { New } from './New'
import { Popular } from './Popular'


const DiscussionsRoutes = () => {
    return (
        <div>
            <div>
                <Link to='/discussions/popular'>POPULAR</Link>
                <Link to='/new'>NEW</Link>
            </div>
            <div>
                <Switch>
                    <Route path='/discussions/popular' exact>
                        <Popular/>
                    </Route>
                    <Route path='/new' exact>
                        <New/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export {DiscussionsRoutes}
