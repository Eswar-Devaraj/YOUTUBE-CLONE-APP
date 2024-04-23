import React from 'react'
import './Sidebar.css'
import home from "../../assets/home.png"
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import FreeCodeCamp from '../../assets/FreeCodeCamp.png'
import vjsiddhuvlogs from '../../assets/vjsiddhuvlogs.png'
import watchmojo from '../../assets/watchmojo.png'
import oscar from '../../assets/oscar.png'
import onepiece from '../../assets/onepiece.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`side-links ${category===0?"active":""}` } onClick={()=>setCategory(0)}>
                <img src={home} alt="home" /><p>Home</p>  
            </div>
            <div className={`side-links ${category===20?"active":""}` } onClick={()=>setCategory(20)} >
                <img src={game_icon} alt="home" /><p>Gaming</p>
                
            </div>
            <div className={`side-links ${category===2?"active":""}` } onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="home" /><p>Automobiles</p>
            </div>
            <div className={`side-links ${category===17?"active":""}` } onClick={()=>setCategory(17)}>
                <img src={sports} alt="home" /><p>Sports</p>
            </div>
            <div className={`side-links ${category===24?"active":""}` } onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="home" /><p>Entertainment</p>
            </div>
            <div className={`side-links ${category===28?"active":""}` } onClick={()=>setCategory(28)}>
                <img src={tech} alt="home" /><p>Technology</p>
            </div>
            <div className={`side-links ${category===10?"active":""}` } onClick={()=>setCategory(10)}>
                <img src={music} alt="home" /><p>Music</p>
            </div>
            <div className={`side-links ${category===22?"active":""}` } onClick={()=>setCategory(22)}>
                <img src={blogs} alt="home" /><p>Blogs</p>                
            </div>
            <div className={`side-links ${category===25?"active":""}` } onClick={()=>setCategory(25)}>
                <img src={news} alt="home" /><p>News</p>
            </div>
            <hr />
            
        </div>
        <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-links">
                    <img src={FreeCodeCamp} alt="" /> <p>freeCodeCamp</p>
                </div>
                <div className="side-links">
                    <img src={vjsiddhuvlogs} alt="" /> <p>Vj Siddhu Vlogs</p>
                </div>
                <div className="side-links">
                    <img src={watchmojo} alt="" /> <p>WatchMojo</p>
                </div>
                <div className="side-links">
                    <img src={oscar} alt="" /> <p>oscar</p>
                </div>
                <div className="side-links">
                    <img src={onepiece} alt="" /> <p>ONE PIECE</p>
                </div>
        </div>
      
    </div>
  )
}

export default Sidebar
