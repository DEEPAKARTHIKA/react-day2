import logo from './logo.svg';
import './App.css';
import pic from './images/bg.jpg';
import Contact from './Components/pages/contact';
import Web from './Components/web';

function App() {
  return (
    <div className="App">
      <section>
      <nav>
         <a href=""><img src={pic}/> </a> 
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
    </section>

    <section id="header1">
    <nav>
        <div class="headertext">
               <h3>
                 About page of the Taste Paradise 
                </h3><br/>
                
                <h5>Here many variety of cakes are available at low price and great taste
                <br/>      
                </h5><br/>
          <h6> <i>NOTE : Only available at weekdays</i><br/><br/></h6> 
            <div>
                <a class="slots" href="https:/www.google.com" target="_blank">ORDER NOW </a>
            </div> 
        </div>
    </nav>
</section>
    <div class ="title">
    <h1>Taste Paradise</h1>
    </div>
    
    <Web/>
    <Contact/>
    </div>

  );
}

export default App;







