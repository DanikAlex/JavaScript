
import "./Kitten-Food.css"
import KittenFoodImageSource from '../../../assets/images/KittenFood.jpg';

function KittenFood() : JSX.Element{
    return (
        <div className="Kitten-Food">
            <h1>kitten food</h1><br/>
            <img src={KittenFoodImageSource}/><br/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni temporibus qui nam, consectetur voluptas at vitae inventore ullam tempora ad totam beatae ex assumenda porro quaerat reprehenderit est sapiente ipsa.</p>
            <span>price: 200</span>
        </div>
    );
}

export default KittenFood;