
let obj = [
    {id: '1', name: 'Torta Bomba Oreo', categoria: 'Tortas',desciption: 'Base de galletitas oreo, dulce de leche y crema batida.',price: '2000',  foto:'https://i0.wp.com/blog.marianlaquecocina.com/wp-content/uploads/2022/05/dsc07807.jpg?resize=500%2C500&ssl=1'},
    {id: '2', name: 'Torta Cheescake', categoria: 'Tortas',desciption: 'Base de galletitas de vainilla, crema de queso terminada con salsa de limon.',price: '1500',  foto:'https://i0.wp.com/blog.marianlaquecocina.com/wp-content/uploads/2021/09/Agosto-2021-Marian-Fotos_Cheesecake_IMG_94561630149328613-e16318241456951.jpg?resize=500%2C500&ssl=1'},
    {id: '3', name: 'Torta de Avena y Ciruelas', categoria: 'Tortas',desciption: 'Base de galletitas de avena, relleno de ciruelas, frutos secos y avena.',price: '1500',  foto:'https://i0.wp.com/blog.marianlaquecocina.com/wp-content/uploads/2020/09/IMG_72981.jpg?resize=768%2C768&ssl=1'},
    {id: '4', name: 'Budin de Limon', categoria: 'Budines',desciption: 'Budín de limón, glaseado de limón con frutos secos.',price: '1500',  foto:'https://www.cocinaconvalentino.com.ar/img/cms/IMG_7048.jpg'},
    {id: '5', name: 'Budin de Zanahoria', categoria: 'Budines',desciption: 'Budín de zanahoria, coco, nueces y bañado con tiritas de chocolate blanco.',price: '1500',  foto:'https://www.rionegro.com.ar/wp-content/uploads/2020/05/97628659_3158421020885235_5884556997119801215_n.jpg'}
]

export const gFetch = (id) => {
    return new Promise( ( resuleto, rechazada ) => {
        setTimeout(()=>{
            resuleto( id ? obj.find( item => item.id === id ) : obj )
        }, 1000)
    })
}

    
