//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Button,Card, Col, Container, Row } from 'react-bootstrap';
import { blog } from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import weblog from "./images/Screenshot 2024-08-03 103638.png"
//import aboutimg from "./images/Dark-Anime-Wide-Screen-Wallpaper-4K-HD-768x480.jpg"


function App() {
  // let name="Minal";
  // let l=[10,20,30,40];
  // let obj={
  //   'name':'Minu',
  //   'cname':'Tush',
  //   'relation':'lovers'}

  //   let status=true;

  let displayData=()=>{
    alert("Welcome to React Learning.. ")
  }

  let addData=(a,b)=>{
    console.log(a+b);
  }
  




  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>{name}</h1>
      {l.map((v)=>{
        return(
          <div>{v}</div>
        )
      })}

      <h4>{obj.name}</h4>
      <div>{10+20}</div>
      {/* ternary operator*/}
      {/* {(status) ? 
       <h2 style={{color:"red", backgroundColor:"yellow"}}>Welcome to ...</h2>
       :
       " "
    } */}
     <img width={200}  src={weblog}></img>
    
      <button type='button' className='btn btn-primary' onClick={displayData}>Save</button>
      <button type='button' className='btn btn-primary' Style="width: 100px;  margin-top: 50px;" onClick={()=>addData(20,25) } >Add Data</button>
    
    <Header email="ws@gmail.com" phone="23456789"></Header>
    {/* <div className='container'>
      <h1 className='text-danger ' >Welcome to Home Page..</h1>

    </div> */}
    <FontAwesomeIcon icon={faWhatsapp} className='text-danger'></FontAwesomeIcon>
    <FontAwesomeIcon icon={faPhone} className='text-danger'></FontAwesomeIcon>

    {/* <Container fluid>
    <Container>
        <Row>
          <Col className='col-12 text-center py-4'>
           <h1>Our Courses</h1> 
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
             
              <Card.Body>
                <Card.Title>COurse 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
             
             <Card.Body>
               <Card.Title>COurse 2</Card.Title>
               <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card>
          </Col>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
             
             <Card.Body>
               <Card.Title>COurse 3</Card.Title>
               <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card>
          </Col>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
             
             <Card.Body>
               <Card.Title>COurse 4</Card.Title>
               <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card>
           </Col>
        </Row>
        </Container>
    </Container> */}

    <Container>
      <Row>
        {blog.map((v,i)=>{
          return(
            <ProductItems pitems={v} key={i}></ProductItems>

          )
        })}
     
        
      </Row>
    </Container>
    
    
    <Footer></Footer>

    
  
    </div>
  );
}

export default App;


// function Card(){
//   return(
//     <div className='cardItems' >Card Div</div>
//   )
// }

function ProductItems({pitems}){
  return(
    
  <div classNames="col-lg-3 mb-4">
   <Card >
             
             <Card.Body>
               <Card.Title>{pitems.title}</Card.Title>
               <Card.Text>
                 {pitems.body}
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card>
  </div>
  
  )
}
