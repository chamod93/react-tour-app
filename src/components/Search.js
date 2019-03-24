import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component{
    getKey(e){
        e.preventDefault();
        const keyTyped = this.refs.inputword.value;
        console.log(keyTyped);

        //AIzaSyB_9f-v5GTmBhnsNlubs74tfymgG_2G34w
        axios.post('/node server endpoint', {
            city: keyTyped,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        return(
            <form>
            <fieldset>
            <h3>Search your Destination</h3>
                <div className="col-md-9">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Destination</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter location" autoComplete="off" ref="inputword"/>
                </div>
                </div>
            <div className="col-md-3">
            <button className="btn btn-primary" onClick={this.getKey.bind(this)}>Search</button>
            </div>
            </fieldset>
            </form>
        );
    }
}

export default Search;