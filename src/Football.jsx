import React, { Component } from 'react'
import './Football.css'

class Football extends Component{
    constructor() {
        super();
        this.inputRef = React.createRef();
      }


      getUsers =  async (year) => {
        let url = `https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`;
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }    
      }

    myFunction  = async (year)=> {
      console.log(year)
      let users = await this.getUsers(year);
      if (users.total === 0){
          let html = ''
          html = `<div data-test-id="no-result">No Matches Found</div>`
        //   let container = document.querySelector('#myMain');
        //   container.innerHTML = html;
        this.inputRef.current.innerHTML = html
          return
      }
      
      let html = `<div data-test-id="total-matches class = "total_match">${'Total Matches: ' + users.total}</div>`
      users.data.forEach((user)=> {
          let htmlSegment = `<div className="user">
                                  <p className = "match">${"Match " + user.name + ' won by ' + user.winner }</p>
                          </div>`;

          html += htmlSegment;
      });
      // let container = document.querySelector('#myMain');
      // container.innerHTML = html;
      this.inputRef.current.innerHTML = html
    }


    render(){

        return (
   
            <div className='container-fluid'>
                <div className='row'>
                    <aside className="col-3">
                                <div>
                                    <div>
                                        <p >Select Year</p>
                                    </div>
                                    <button className="list-div" onClick={() => { this.myFunction(2011)}}>
                                        <p className="list-border " >2011</p>
                                    </button>
                                    <button className="list-div" onClick={this.myFunction.bind(this, 2012)}>
                                        <p className="list-border">2012</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.myFunction(2013)}}>
                                        <p className="list-border">2013</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.myFunction(2014)}}>
                                        <p className="list-border">2014</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.myFunction(2015)}}>
                                        <p className="list-border">2015</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.myFunction(2016)}}>
                                        <p className="list-border">2016</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.myFunction(2017)}}>
                                        <p className="list-border">2017</p>
                                    </button>
                    
                                </div>
                            </aside>
                        <main className="col-9" id="myMain" ref={this.inputRef }>
                            
                        </main>
            
                </div>
                
            </div>
                        
              )

    }

    }
 

export default Football
