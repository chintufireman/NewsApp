import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes } from "react-router";
import { Route, BrowserRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  page = 5;
  apiKey=process.env.REACT_APP_NEWS_API

  /* any environment variable which u start with REACT_APP then you get acces of it
  in react application */
  state={
    progress:0
  }
   setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
          height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}  
                  key="general"
                  pageSize={this.page}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}  
                  key="business"
                  pageSize={this.page}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}  
                  key="entertainment"
                  pageSize={this.page}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}  
                  key="health"
                  pageSize={this.page}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}  
                  key="science"
                  pageSize={this.page}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}  
                  key="sports"
                  pageSize={this.page}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}  
                  key="technology"
                  pageSize={this.page}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
          {/* important if you wont pass keys in <News setProgress={this.setProgress} apiKey={this.apiKey}  > component then even
          after clicking on the link the page will not remount which means 
          it will not load page with new content in it so thats why pass
          <News setProgress={this.setProgress} apiKey={this.apiKey}   key=""> so that react router will know that this is component with 
          updated props */}
        </BrowserRouter>
      </div>
    );
  }
}

/* 
component lifecycle
1.Mounting -> birth of ur component
2.Update => growth of ur component
3.UnMount => Death of ur component
*/

/* 
Methods In React component lifecycle

1.Render Method is used to render HTML of the component in react. This method is 
required for a class based component to render the DOM. it runs during the mounting
and updating of your component. Render() method should be pure ie you cannot 
modify state inside it

2.theComponentDidMount() method runs after the component o/p has been rendered to 
the DOM.

3.theComponentDidUpdate() method is invoked as soon as the updating happens.
the most common use case for the theComponentDidUpdate() method is updating the DOM
in response to prop or state changes

4.theComponentWillUnmount() method is called just before the component is unmounted
and destroyed. Usually used to perform cleanups
*/
