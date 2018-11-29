import React, {Component} from 'react'; 
import {connect} from ''
import 

class SongList extends Component{
    render(){
       return ()
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}   

export default connect(mapStateToProps) (SongList);
