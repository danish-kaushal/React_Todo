import React, { Component } from "react";
import Plan from "./Plan";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state={
      items:[],
      text:""
  }
  handleChange = e =>{
      this.setState({text: e.target.value.toUpperCase()})
  }
  handleAdd = e => {
    if(this.state.text !==""){
      const items = [...this.state.items, this.state.text]
      this.setState({items: items, text:""});
    }
  }
  handleDelete = id => {
    console.log("deleted", id);
    const olditems = [...this.state.items]
    console.log("olditems", olditems);
    const items= olditems.filter((Element,i)=>{
      return i !== id
    })
    console.log("newitems", items);
    this.setState({items:items});
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto shadow-lg text-white ">
            <h1 className="text-center py-3">Today's Plan</h1>
            <div className="row">
              <div className="col-9 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Plan"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-2">
                <button className="btn btn-light fw-bold" onClick={this.handleAdd}>+</button>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mx-auto">
                <ul className="list-unstyled m-5">
                  {
                   this.state.items.map((value,i)=>{
                     return <Plan key={i} value={value} id={i} delete={this.handleDelete}/>
                   })
                  }
                  {/* {console.log(this.state.items)} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
