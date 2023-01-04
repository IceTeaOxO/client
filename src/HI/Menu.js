import './css/menu.css'
import logo from './img/hi.png';
import Button from '@mui/material/Button';
import Footer from './component/Footer';

function Menu() {
  
    return (
      <div className="">
          <h1 style={{ marginLeft: "20px"}}> H.I.Feeling Coffee</h1>
          <br />
          <img src={logo} alt='hifeeling img' className='img'></img>
          <br /><br />
          <Button href={`order`}  variant="outlined" appearance="default"  
          style={{ width: "150px", height: "50px", color: "#404040", borderColor: "#A8A8A8",
          margin: "auto", display: "flex", justifyContent: "center",alignItems: "center", }}>查看菜單</Button>
          <br />
          <Footer style={{ margin: "0"}}/>

        </div>
    );
  }
  
  export default Menu;