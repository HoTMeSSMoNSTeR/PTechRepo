import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'
import { useState } from 'react'
import './App.css'


export default function App() {
    // state and other such variables
    
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/friends">Friends</Link>
                    </li>
                   <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
                <Route path="/posts">
                    <Posts posts={posts} />
                </Route>
                <Route path="friends">
                    <Friends names={[Calli, Camberlie, Brittan]} />
                </Route>
                <Route path="/">

                </Route>
            </div>
        </BrowserRouter>
    )

}