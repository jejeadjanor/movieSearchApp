import React, { Component } from 'react';

class Moviesite extends Component {
    render() {
        return (
            <div>
                <a target='_blank' href={this.state.search.Website} alt='www.youtube.com'><img src={this.state.search.Poster}/></a> 
            </div>
        );
    }
}

export default Moviesite;
