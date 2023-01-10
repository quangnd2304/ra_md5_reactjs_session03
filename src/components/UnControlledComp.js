import React, { Component } from 'react';

class UnControlledComp extends Component {
    // Tạo các ref đến DOM
    constructor() {
        super();
        this.studentIdRef = React.createRef();
        this.studentNameRef = React.createRef();
    }
    handleSubmit = () => {
        console.log("StudentId-->", this.studentIdRef.current.value);
        console.log("StudentName-->", this.studentNameRef.current.value);
    }
    render() {
        return (
            <div>
                <h2>UnControlled Component</h2>
                <form>
                    StudentId: <input type={'text'} name="studentId" id='studentId' ref={this.studentIdRef} /><br></br>
                    StudentName: <input type={'text'} name="studentName" id='studentName' ref={this.studentNameRef} /><br></br>
                    <input type={'button'} value='Create' onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export default UnControlledComp;