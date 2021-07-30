import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Wacth Product 01",
             "images": [
                 "https://cdn1.ozone.ru/s3/multimedia-c/6002152632.jpg",
                 "https://tyumen-market.ru/images/tmnmart/pp/1614338637_191_1280.jpeg",
                 "https://cdn.abc.ru/unsafe/1040x0/abc.ru/upload/catalog/z_/b2/1589440054.3136z_b2bioi6wvybdfln2hptkktb1fqoex86evh.jpg"
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 101,
             "count": 1
         },
         {
             "_id": "2",
             "title": "Wacth Product 02",
             "images": [
                 "https://cdn1.ozone.ru/multimedia/1025788801.jpg",
                 "https://im0-tub-ru.yandex.net/i?id=806c134cfc6174e9601e7349eb4e03c1&ref=rim&n=33&w=200&h=150",
                 "https://im0-tub-ru.yandex.net/i?id=9cd1dbfd06b24a60ae888c4d1dee9561&ref=rim&n=33&w=200&h=150"
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 102,
             "count": 1

         },
         {
             "_id": "3",
             "title": "Wacth Product 03",
             "images": [
                 "https://gadget-store24.ru/upload/iblock/736/736caeef9515f023c77639562ee7d1ec.jpg",
                 "https://twigo.ru/center/iblock/da7/MTPM2_VW_34FR_watch_44_alum_gold_nc_6s_VW_34FR_WF_CO_2.jpeg",
                 "https://saratov.the-istore.ru/upload/iblock/fa7/fa72e895a9f8cbe2e761185f34b7b692.jpg"
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 103,
             "count": 1

         },
         {
             "_id": "4",
             "title": "Wacth Product 04",
             "images": [
                 "https://okmix.ru/images/002/480/336/2480336/1148x861no_crop/w8_0.jpg",
                 "https://images.satu.kz/147036831_w640_h640_cmart-chasy-fitnes.jpg",
                 "https://i.pinimg.com/originals/c1/f1/80/c1f1805335642d1fff549c16fc2e7654.jpg"
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 104,
             "count": 1

         },
         {
             "_id": "5",
             "title": "Wacth Product 05",
             "images": [
                 "https://images.wbstatic.net/big/new/8120000/8129622-1.jpg",
                 "https://a.allegroimg.com/original/117122/bad9655b4bddb7237b1a0e75bc07",
                 "https://im0-tub-ru.yandex.net/i?id=01c19a8512567b28c95163529669feaa&ref=rim&n=33&w=150&h=150"
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 105,
             "count": 1

         },
         {
             "_id": "6",
             "title": "Wacth Product 06",
             "images": [
                 "https://cdn1.ozone.ru/s3/multimedia-8/6030910976.jpg",
                 "https://im0-tub-ru.yandex.net/i?id=ec136c787f5af3cdc28a8f47c8f3480f&ref=rim&n=33&w=150&h=150",
                 "https://images.ua.prom.st/2202286107_w640_h640_smart-chasy-uwatch-q18.jpg"
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 106,
             "count": 1

         }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
