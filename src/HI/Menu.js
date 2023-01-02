import './css/menu.css'
import logo from './img/hi.png'
import Button from '@mui/material/Button';
import Footer from './component/Footer';

function Menu() {
  
    return (
      <div className="">
        <h1>H.I.Feeling Coffee早午餐</h1>
        <br/>
        <p>剩下的就是一些排版、圖片補充、文字補充、美化的部分了</p>
        <br/>
        <Button href={`order`} fullWidth>查看菜單</Button>
        <br/>
        <img src={logo} alt='hifeeling img'></img>
        <Footer/>
        
      </div>
      
    );
  }
  
  export default Menu;