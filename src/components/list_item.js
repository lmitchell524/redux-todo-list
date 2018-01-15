import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteItem, getItems, toggleItem } from '../actions';


 class ListItem extends Component {

     handleDelete(){
         this.props.deleteItem(this.props._id).then( () =>this.props.getItems());
     }

     handleToggle(id){
         this.props.toggleItem(id).then( () => this.props.getItems());
     }

     // const completed = {
     //     textDecoration: 'line-through',
     //     color: 'light-grey'
     // };

     render() {
         return (
             <li className="list-group-item">
                 <Link to={`/item/${this.props._id}`}>{this.props.title}</Link>
                 <button onClick={() => {this.handleDelete(this.props._id)}} className="btn btn-outline-danger float-right">Delete</button>
                 <button  className="btn btn-outline-warning float-right mr-2" onClick={() => this.handleToggle(this.props._id)}> {(this.props.complete) ? 'incomplete' : 'complete'}</button>
             </li>
         )
     }
 }

export default connect(null, { deleteItem, getItems, toggleItem })(ListItem);