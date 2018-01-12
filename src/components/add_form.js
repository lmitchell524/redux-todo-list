import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { addItem } from '../actions/index';
import { connect } from 'react-redux';

class AddForm extends Component{

    handleAddItem(values){
        console.log("Form Submitted with:", values);

        this.props.addItem(values).then( () => {
            this.props.history.push('/');
        });
    }

    renderInput({label, input, meta: { touched, error }}){

        return(
            <div className="form-group">
                <label>{label}</label>
                <input {...input} className="form-control"/>
                <p className="text-danger">{touched && error}</p> {/*both must be true and last truthy will display (ie. the error)*/}
            </div>
        )
    }

    render(){

        return(
            <div>
                <div className="row my-4 justify-content-end">
                    <Link className="btn btn-outline-primary" to="/">Back</Link>
                </div>
                <h1 className="text-center">Add to do Item</h1>

                <form onSubmit={this.props.handleSubmit(this.handleAddItem.bind(this))}>
                        <Field name="title" label="Title" component={this.renderInput}/>
                        <Field name="details" label="Details" component={this.renderInput}/>

                    <button className="btn btn-outline-success">Add To Do Items</button>
                    <button onClick={this.props.reset} type="button" className="btn btn-outline-danger ml-2">Reset Form</button>
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = 'Please enter a title';
    }

    if(!values.details){
        errors.details = 'Please enter some details';
    }

    return errors;
}

AddForm = reduxForm({
    form: 'add-item',
    validate: validate
})(AddForm);

export default connect(null, { addItem })(AddForm);