import moment from 'moment';
import React, {Component} from 'react'; 
import { Container,Form, Row, FormGroup, Label, Input, Card,CardBody,CardTitle, Table, ListGroupItem, CardImg, CardText, Button, Col, Alert } from 'reactstrap';
import textinput  from '../data/input.txt';

class Home extends Component { 

    constructor(props) 
    { 
        super(props); 
        this.state = {
            user: ''
        }; 
    } 
  


    componentDidMount(){
        // this.getData();

    }

    sanitise(x) {
    if (isNaN(x)) {
        return false;
    }
    return x+'@';
    }

    getData = () => {
    var emp = []
    fetch(textinput)
    .then((r) => r.text())
    .then(text  => {
        text.replace(/\n/g, ",");
       let regex = new RegExp('[0-255]+@');
       
       text.split("\n");

        


        if (text.match(regex)) {
           text.split('\n').map(entry => {
                const obj = {}
                entry.split('\n').forEach(keyValue => {
                  const split = keyValue.split(": ")
                  const key = split[0]
                  const value = split[1]
                  obj[key] = key === regex ? value.split(", ") : value
                })
                console.log(obj)
                this.setState({user: obj})
                return obj
              })
           
        }
    })  
    } 

    handleClick(){
        alert('Sorry, this action not available yet!')
    }
   
    render() 
    { 
        return(
            <Container className="data_container">
                <Row>
                    <div>
                        <Alert color="warning">
                            <h4 className="alert-heading">Loading data using ReactJS Framework!</h4>
                            <p>
                                My plan was to load the data by calling the file from click event, than pushing every new line start with "number+@" which is the ID of that line to a an object, and than doing the the following steps: 
                            </p>
                            <hr />
                                <ul>
                                    <li>Loop through Every ID in the that Object</li>
                                    <li>Format the data and time using momentJS Library</li>
                                    <li>Comparing the date of every ID against each other</li>
                                    <li>Display the data in the table for every ID, their early and late availability</li>
                                    <li>On Click check the Dev Tools to verify the data</li>
                                </ul>
                            <hr />
                            <p className="mb-0">
                                My problem is that text file format was a little bit challenging, to format and use the it's data. It would be much easier if it ws json, xml or soap file.
                            </p>
                        </Alert>
                        </div>
                </Row>
                <Row>
                <div className="upload_file_container">
                    <div disabled tag="a" href="#">
                        <Button onClick={this.getData.bind(this)} color="danger">Load The Data</Button>
                        <br />
                        <Label className="exampleText">* Click here to load the data!</Label>
                                                
                    </div>
                </div>
                </Row>

                <Row>
                    <Row className="table_data_wrapper">
                        <Table>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Early availability</th>
                                <th>Late availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                    <td>{moment().format('DD/M/Y - HH:mm')}</td>
                                    <td>{moment().add(1,'days').format('DD/M/Y - HH:mm')}</td>
                                </tr>
                                </tbody>
                        </Table>
                    </Row>
                </Row>
                
            </Container>
        )
  } 
}   
  
export default Home;