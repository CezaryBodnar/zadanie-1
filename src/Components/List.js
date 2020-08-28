import React, { Component } from "react";
import ListItem from './ListItem'
import Data from '../parkingi.json'

class List extends Component {
    render() {
        return (
            Data.map((item, id) => (
                <ListItem item={item} key={`post-list-key ${id}`}
                    delItem={this.props.delItem}
                />
            ))
        )
    }
}


export default List;
