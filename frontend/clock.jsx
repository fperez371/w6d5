import React from 'react';



class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.tick = this.tick.bind(this);
    }
    
 
    
    componentDidMount() {
      this.intId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intId);
    }

    tick() {
        this.setState({ date: new Date() });

    }

    render() {
        let hours = this.state.date.getHours();
        let minutes = this.state.date.getMinutes();
        let seconds = this.state.date.getSeconds();

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

       return( 
        <>   
            <h1>Time Scanners</h1> 
            <div className='potato'>
                <div>
                 <span className='vegeta'>DATE: {this.state.date.toDateString()}</span>
                </div>
                <div className='nappa'>TIME: {hours % 12}:{minutes}:{seconds} EST</div>
            </div>
        </>
       );
    }

}

export default Clock;
