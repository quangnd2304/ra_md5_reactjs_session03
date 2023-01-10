import React, { Component } from 'react';

class ControlledComp extends Component {
    // Khởi tạo state để lưu trữ dữ liệu form
    constructor() {
        super();
        this.state = {
            studentId: "",
            studentName: '',
            birthDate: '',
            sex: false,
            birthPlace: ''
        }
    }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // set giá trị nhập trên form vào state
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        console.log("Thông tin trên form: ", this.state);
    }
    render() {
        return (
            <div>
                <h2>Controlled Component</h2>
                <form>
                    StudentId: <input type={'text'} name="studentId" id='studentId' onChange={this.handleChange} /><br></br>
                    StudentName: <input type={'text'} name="studentName" id='studentName' onChange={this.handleChange} /><br></br>
                    BirtDate: <input type={'date'} name="birthDate" id='birthDate' onChange={this.handleChange} /><br></br>
                    Sex: <input type={"radio"} name="sex" value={true} id='male' onChange={this.handleChange} /><label htmlFor='male'>Male</label>
                    <input type={"radio"} name="sex" value={false} id='female' onChange={this.handleChange} /><label htmlFor='female'>Female</label><br></br>
                    BirthPlace: <select onChange={this.handleChange} name="birthPlace">
                        <option>Chọn nơi sinh</option>
                        <option>Hà Nội</option>
                        <option>Đà Nẵng</option>
                        <option>TP HCM</option>
                    </select><br></br>
                    <input type={'button'} value='Create' onClick={this.handleSubmit} />
                </form>
            </div >
        );
    }
}

export default ControlledComp;