const express = require('express')
const app = express()

const port = 3444

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))


app.get('/', (req,res)=>{
    const data = {

bg1: '/images/icons/icon-heart-02.png', bg2: '/images/icons/icon-heart-01.png', bg3: '/images/product-16.jpg',
bg4: '/images/product-15.jpg',bg5: '/images/product-14.jpg',bg6: '/images/product-13.jpg',bg7: '/images/product-12.jpg',
bg8: '/images/product-11.jpg',bg9: '/images/product-10.jpg',bg10: '/images/product-09.jpg', bg11: '/images/product-08.jpg',
bg12: '/images/product-07.jpg',bg13: '/images/product-06.jpg', bg14: '/images/product-05.jpg',
bg15: '/images/product-04.jpg', bg16: '/images/product-03.jpg', bg17: '/images/product-02.jpg', bg18: '/images/product-01.jpg',
bg19: '/images/banner-03.jpg', bg20: '/images/banner-02.jpg',bg21: '/images/banner-01.jpg',bg22: '/images/slide-03.jpg',
bg23: '/images/slide-02.jpg', bg24: '/images/slide-01.jpg'
      };
    
      res.render('index', data);
    
})



app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})
