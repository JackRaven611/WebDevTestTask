import { ItemListStyled } from ".";
import { TEXTS } from "../../CONSTS";
import { useState } from "react";
import washingImg from "../../img/washing.webp";

type itemsValue = {
  items: {
    code: string;
    type: string;
    color: string;
    capacity: string;
    dimensions: string;
    priceDate: string;
    price: { zł: string; gr: string; currency: string };
    energyClass: string;
    filters: {
      addWash: boolean;
      aiPanel: boolean;
      inverterMotor: boolean;
      screen: boolean;
    };
    functions: {
      addWash: string;
      aiPanel: string;
      inverterMotor: string;
      screen: string;
    };
  }[];
};

export const ItemList = ({ items }: itemsValue) => {
  const [isButonPressed, setIsButtonPressed] = useState(false);

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
            <p>{TEXTS.item.capacity}</p>
            <b>{item.capacity}</b>
          </li>
          <li className='itemParameters'>
            <p>{TEXTS.item.dimensions}</p>
            <b>{item.dimensions}</b>
          </li>
          <li className='itemParameters'>
            <p>{TEXTS.item.functions}</p>
            <b>
              {item.functions.addWash}, {item.functions.aiPanel},<br />
              {item.functions.inverterMotor}, {item.functions.screen}
            </b>
          </li>
          <li className='itemEnergyClass'>
            <p>{TEXTS.item.energyClass}</p> <div>{item.energyClass}</div>
          </li>
          <li className='itemPriceDate'>
            <p>{TEXTS.item.priceDate}</p>
            <p>{item.priceDate}</p>
          </li>
          <li className='itemPrice'>
            <b>{item.price.zł}</b>
            <div>
              <b>{item.price.gr}</b>
              <b>{item.price.currency}</b>
            </div>
          </li>
          <li className='itemButton'>
            <div className='button'></div>
          </li>
        </ul>
      </div>
    );
  });

  return <ItemListStyled className='itemList'>{item}</ItemListStyled>;
};
