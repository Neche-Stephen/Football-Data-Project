import React from 'react'
import './Football.css'

class Football extends React.Component  {

    clickMe = (x) => {
        this.props.clickMe(x)
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
                                    <button className="list-div" onClick={() => { this.clickMe(2011)}}>
                                        <p className="list-border " >2011</p>
                                    </button>
                                    <button className="list-div" onClick={this.clickMe.bind(this, 2012)}>
                                        <p className="list-border">2012</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.clickMe(2013)}}>
                                        <p className="list-border">2013</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.clickMe(2014)}}>
                                        <p className="list-border">2014</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.clickMe(2015)}}>
                                        <p className="list-border">2015</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.clickMe(2016)}}>
                                        <p className="list-border">2016</p>
                                    </button>
                                    <button className="list-div" onClick={() => { this.clickMe(2017)}}>
                                        <p className="list-border">2017</p>
                                    </button>
                    
                                </div>
                            </aside>
                        <main className="col-9" id="myMain">
                            
                        </main>
            
                </div>
                
            </div>
                        
              )

    }
 
}

export default Football
