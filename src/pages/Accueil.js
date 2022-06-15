import Nav from "../component/Nav";
import TopItem from "../component/TopItem";
const Accueil = () => {

    return (
        <>      
        <Nav/>
        <TopItem title="Populaire" img="https://www.petit-bateau.fr/dw/image/v2/BCKL_PRD/on/demandware.static/-/Sites-PB_master/default/dw2d377f7a/PB/5625705F1.jpg?sw=1390&sh=1622&sm=fit"/>
        <TopItem title="Eco-Responsable" img="https://www.petit-bateau.fr/dw/image/v2/BCKL_PRD/on/demandware.static/-/Sites-PB_master/default/dw2d377f7a/PB/5625705F1.jpg?sw=1390&sh=1622&sm=fit"/>
        <TopItem title="Fait Main" img="https://www.petit-bateau.fr/dw/image/v2/BCKL_PRD/on/demandware.static/-/Sites-PB_master/default/dw2d377f7a/PB/5625705F1.jpg?sw=1390&sh=1622&sm=fit"/>
        </>

    )

};

export default Accueil;