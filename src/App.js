import React from 'react'
import Football from './Football';

class App extends React.Component {

  constructor(){
            super()
            this.state = {
              
            }
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
              let container = document.querySelector('#myMain');
              container.innerHTML = html;
              return
          }
          
          let html = `<div data-test-id="total-matches class = "total_match">${'Total Matches: ' + users.total}</div>`
          users.data.forEach((user)=> {
              let htmlSegment = `<div className="user">
                                      <p className = "match">${"Match " + user.name + ' won by ' + user.winner }</p>
                              </div>`;

              html += htmlSegment;
          });

          let container = document.querySelector('#myMain');
          container.innerHTML = html;
        }
      
  
render(){
  return (
    <div>
      <Football  clickMe = {this.myFunction}/>
    </div>
  )
}
 
}

export default App