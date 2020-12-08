import React, { Component } from 'react'
import styled from 'styled-components'
import {Container,Button,Form,Card} from 'react-bootstrap'

const Aboutstyle = styled.div`
.cards{
    margin : 5px;
    padding : 28px;
}
.hideshow{
    font-size: 12px;
    font-weight: 900;
    cursor: pointer;
    color: white;
    padding: 4px 8px;
    background: grey;
    border-radius: 4px;
}
.err{
    color:red;
}
`

export default class Forms extends Component{
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            passwordcon:'',
            type:'input',
            agree: false
    }
    }

    Firname = (e) =>{
        this.setState({firstname:e.target.value})
    }

    Lasname = (e) =>{
        this.setState({lastname:e.target.value})
    }

    Email = (e) =>{
        this.setState({email:e.target.value})
    }

    Password = (e) =>{
        this.setState({password:e.target.value})
    }

    Confirmpassword = (e) =>{
        this.setState({passwordcon:e.target.value})
    }

    Show = (e) =>{
            e.preventDefault();
            e.stopPropagation();
            this.setState({type:this.state.type === 'input' ? 'password':'input'})
    }

    Allow = () =>{
        this.setState({ agree: !this.state.agree});
        console.log(this.state.agree)
        }

    Valid = () =>{
    let firstnamerr='';
    let lastnamerr='';
    let emailerr='';
    let passworderr='';
    let agreerr='';
    let passwordconerr='';

        if(!this.state.firstname){
            firstnamerr = "First name can not be blank"
        }
        if(!this.state.lastname){
            lastnamerr = "Lastname can not be empty"
        }
        if(!this.state.email){
            emailerr = "Email cant be blank"
        }
        if(!this.state.password){
            passworderr = "Password cant be empty"
        }
        if(!this.state.agree){
            agreerr = "Please accept our terms and conditions"
        }
        if(this.state.password != this.state.passwordcon){
            passwordconerr = "Password dont match"
        }
        if(firstnamerr || lastnamerr || emailerr || passworderr || agreerr|| passwordconerr){
            this.setState({firstnamerr,lastnamerr,emailerr,passworderr,agreerr,passwordconerr})
            return false;
        }
        
        return true;
        }

    
    handleSubmit = (e) => {
        e.preventDefault();

    const Valid = this.Valid();
    
    if (Valid){
        console.log(this.state);
        alert (JSON.stringify(this.state))
    }
        
    }

    render(){
    return (
        <Container>
            <Aboutstyle>
                <h1 className="text-center m-5">Registration form</h1>
                <Card className="cards">
                    <Form onSubmit = {this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>First Name :</Form.Label>
                            <Form.Control type="text" name="firstname" placeholder="Your FirstName" onChange ={this.Firname}/> 
                            <Form.Text className = "err">{this.state.firstnamerr}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name :</Form.Label>
                            <Form.Control type="text" name="lastname" placeholder="Your LastName" onChange = {this.Lasname}/> 
                            <Form.Text className = "err">{this.state.lastnamerr}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address :</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Your Email Address" onChange = {this.Email}/> 
                            <Form.Text className = "err">{this.state.emailerr}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password :</Form.Label>
                            <Form.Control type={this.state.type} name="password" placeholder="******" onChange = {this.Password}/>
                             <span className = "hideshow" onClick = {this.Show}>{this.state.type === 'input'?'HIDE':'SHOW'}</span>
                             <Form.Text className = "err">{this.state.passworderr}{this.state.passwordconerr}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password :</Form.Label>
                            <Form.Control type="password" name="Confirmpassword" placeholder="******" onChange = {this.Confirmpassword}/> 
                            <Form.Text className = "err">{this.state.passwordconerr}{this.state.passworderr}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="I agree your terms and condition" checked={this.state.agree} onChange ={this.Allow}/>
                            <Form.Text className = "err">{this.state.agreerr}</Form.Text>
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button type="submit" className="btn btn-success" >Submit</Button> 
                        </Form.Group>
                    </Form>

                </Card>
            </Aboutstyle>  
        </Container>
    )
}
}
