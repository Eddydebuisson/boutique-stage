import './TopItem.css'
import lotus from '../../assets/lotus.png'

const topItem = (props) =>
{

    return (
        <>
            <div className="top-item">
                <div className="top-info">
                    <img src={lotus} className="lotus"></img>
                    <div className="title">{props.title}</div>
                    <img src={lotus} className="lotus"></img>
                </div>
                <div className="img-shop">
                    <div className="border"><img src={props.img}></img></div>
                    <div className="border"><img src={props.img}></img></div>
                    <div className="border"><img src={props.img}></img></div>
                </div>
                <div className='br'></div>
            </div>

        </>
    )

}

export default topItem;