import React from "react"
import PropTypes from "prop-types"
class IcaIndex extends React.Component {

  buildBread(data){
    let bread = { //to be sent from server
        Italiensk: {
            src: "/breadImages/Italiensk.jpg",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad maiores modi ducimus earum unde quisquam alias fugiat qui. Nobis temporibus delectus animi voluptatem veritatis accusantium deleniti odit quae ullam ipsam?"
        },
        Morots: {
            src: "/breadImages/carrotbread.png",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptatum consequatur minima iure iste at quae deserunt earum! Illo aliquid delectus laboriosam adipisci eaque incidunt ratione fugit sit aliquam tenetur?"
        },
        Lingon: {
            src: "/breadImages/LingonBread.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat ipsum distinctio doloribus accusantium et ex explicabo, eligendi repellendus, eveniet accusamus quod adipisci quo, veritatis quis maxime dolorum eos dolorem!"
        },
        Ut_på_tur_aldrig_sur: {
            src: "/breadImages/Ut på tur.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit, ullam nesciunt soluta maiores animi natus quaerat provident molestiae unde corporis deleniti repellendus corrupti officia modi maxime delectus labore autem!"
        },
        Pavé_Brest: {
            src: "/breadImages/pavé brest.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolor labore reprehenderit magnam consequuntur repellat, numquam, tempore dicta, quibusdam blanditiis cumque ipsa. Et consequuntur nemo minus! Maxime eos tenetur nulla."
        },
        Marseille: {
            src: "/breadImages/marseille.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe officiis nisi sit quia! Quisquam exercitationem sint ducimus natus quis praesentium. Similique aperiam quos nihil aspernatur nemo aliquam inventore. Ullam."
        },
        Valnöt: {
            src: "/breadImages/valnöt.png",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis repellendus nemo nisi veniam dolorum laudantium non deserunt et maxime ex numquam, optio ducimus, tempore blanditiis quod voluptas exercitationem consectetur vero?"
        },
        Snoddas: {
            src: "/breadImages/Snoddas.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio et enim assumenda ad quidem illum quae. Qui, earum, iusto recusandae minus officia in voluptates repellendus quisquam quod perferendis mollitia."
        },
        Prima: {
            src: "/breadimages/prima.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas, illo dicta dolorem enim ipsum culpa earum perferendis porro nam, illum vitae, tempore reprehenderit tenetur cupiditate repellendus iusto saepe officiis!"
        },
        Franska: {
            src: "/breadImages/franska.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias delectus deleniti veniam dolores repellendus ex repudiandae illo sed fugiat! Mollitia deleniti id qui? Sit quos quae voluptate soluta. Facilis."
        }
    }

    let list = []
    Object.keys(bread).forEach(key =>{
        list.push(
            <li className="ul__li ul__li--bread">
                <h2>{key.replace(/_/gm, " ")} bröö</h2>
                <a href={"/bread/" + key}>
                    <img src={bread[key].src} alt={key} className="ul__img ul_img--bread"/>
                </a>    
                <p>{bread[key].description}</p>
            </li>
        )
    })
    return list
  }


  render () {
    return (
      <React.Fragment>
        <div className="div--index">
          <h1>Bread</h1>
          <ul className="ul--bread" >
            {this.buildBread()}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default IcaIndex
