import { ItemListStyled } from ".";
import washingImg from "../../img/washing.webp";

type itemsValue = {
  items: {
    code: string;
    type: string;
    color: string;
    capacity: string;
    dimensions: string;
    price: { zł: string; gr: string; currency: string };
  }[];
};

export const ItemList = ({ items }: itemsValue) => {
  const item = items.map((item) => {
    return (
      <div className='item'>
        <ul>
          <li className='itemImg'>
            <img src={washingImg} alt='washing machine' />
          </li>
          <li className='itemName'>
            <h2>
              {item.code}, {item.type}, {item.color}
            </h2>
          </li>
          <li className='itemParameters'>
            <p></p>
            <b>{item.capacity}</b>
          </li>
          <li className='itemParameters'>
            <p></p>
            <b>{item.dimensions}</b>
          </li>
          <li className='itemParameters'>
            <p></p>
            <b></b>
          </li>
          <li className='itemParameters'>
            <p></p>
            <b></b>
          </li>
          <li className='itemEnergyClass'>
            <p></p> <div></div>
          </li>
          <li className='itemPriceDate'>
            <p></p>
            <p></p>
          </li>
          <li className='itemPrice'>
            <p>{item.price.zł}</p>
            <div>
              <p>{item.price.gr}</p>
              <p>{item.price.currency}</p>
            </div>
          </li>
          <li className='itemButton'>
            <div></div>
          </li>
        </ul>
      </div>
    );
  });

  return <ItemListStyled className='itemList'>{item}</ItemListStyled>;
};
