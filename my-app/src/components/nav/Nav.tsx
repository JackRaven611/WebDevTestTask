import { StyledNav } from ".";
import { FILTERS, TEXTS } from "../../CONSTS";
import { useEffect, useState } from "react";

type itemsValue = {
  items: {
    popularity: number;
    code: string;
    type: string;
    color: string;
    capacity: number;
    dimensions: string;
    priceDate: string;
    price: { zl: number; gr: string; currency: string };
    energyClass: string;
    addWash: string;
    aiPanel: string;
    inverterMotor: string;
    screen: string;
    filters: string[];
    functions: {
      addWash: string;
      aiPanel: string;
      inverterMotor: string;
      screen: string;
    };
  }[];

  filteredItems: {
    popularity: number;
    code: string;
    type: string;
    color: string;
    capacity: number;
    dimensions: string;
    priceDate: string;
    price: { zl: number; gr: string; currency: string };
    energyClass: string;
    addWash: string;
    aiPanel: string;
    inverterMotor: string;
    screen: string;
    filters: string[];
    functions: {
      addWash: string;
      aiPanel: string;
      inverterMotor: string;
      screen: string;
    };
  }[];

  setFilteredItems: React.Dispatch<
    React.SetStateAction<
      {
        popularity: number;
        code: string;
        type: string;
        color: string;
        capacity: number;
        dimensions: string;
        priceDate: string;
        price: { zl: number; gr: string; currency: string };
        energyClass: string;
        addWash: string;
        aiPanel: string;
        inverterMotor: string;
        screen: string;
        filters: string[];
        functions: {
          addWash: string;
          aiPanel: string;
          inverterMotor: string;
          screen: string;
        };
      }[]
    >
  >;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

export const Nav = ({
  input,
  setInput,
  items,
  filteredItems,
  setFilteredItems,
}: itemsValue) => {
  const [sort, setSort] = useState(FILTERS.sort.popular);
  const [functions, setFunctions] = useState(FILTERS.functions.all);
  const [energyClass, setEnergyClass] = useState(FILTERS.energyClass.all);
  const [capacity, setCapacity] = useState(FILTERS.capacity.all);

  useEffect(() => {
    let results = [...items];

    if (functions !== "all") {
      results = results.filter((item) => item.filters.includes(functions));
    }
    if (energyClass !== "all") {
      results = results.filter((item) => item.energyClass === energyClass);
    }
    if (capacity !== "all") {
      results = results.filter((item) => item.capacity === Number(capacity));
    }
    results.sort((a, b) => {
      switch (sort) {
        case "price":
          return a.price.zl - b.price.zl;
        case "capacity":
          return b.capacity - a.capacity;
        case "popular":
        default:
          return b.popularity - a.popularity;
      }
    });

    setFilteredItems(results);
  }, [items, sort, functions, energyClass, capacity, setFilteredItems]);

  useEffect(() => {
    if (input !== "") {
      setFilteredItems(
        items.filter((item) => {
          return item.code.toLowerCase().includes(input.toLowerCase());
        })
      );
    } else {
      setFilteredItems(items);
    }
  }, [items, input]);

  return (
    <StyledNav>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='search'
        placeholder='Search...'
        className='search'
      />
      <ul className='filters'>
        <li>
          <label htmlFor='sort'>{TEXTS.sort}</label>
          <select name='' id='sort' onChange={(e) => setSort(e.target.value)}>
            <option value={FILTERS.sort.popular}>
              {TEXTS.filters.sort.all}
            </option>
            <option value={FILTERS.sort.price}>
              {TEXTS.filters.sort.price}
            </option>
            <option value={FILTERS.sort.capacity}>
              {TEXTS.filters.sort.capacity}
            </option>
          </select>
        </li>
        <li>
          <label htmlFor='func'>{TEXTS.functions}</label>
          <select
            name=''
            id='func'
            onChange={(e) => setFunctions(e.target.value)}
          >
            <option value={FILTERS.functions.all}>
              {TEXTS.filters.functions.all}
            </option>
            <option value={FILTERS.functions.addWash}>
              {TEXTS.filters.functions.addWash}
            </option>
            <option value={FILTERS.functions.aiPanel}>
              {TEXTS.filters.functions.aiPanel}
            </option>
            <option value={FILTERS.functions.inverterMotor}>
              {TEXTS.filters.functions.inverterMotor}
            </option>
            <option value={FILTERS.functions.screen}>
              {TEXTS.filters.functions.screen}
            </option>
          </select>
        </li>
        <li>
          <label htmlFor='energ'>{TEXTS.energyClass}</label>
          <select
            name=''
            id='energ'
            onChange={(e) => setEnergyClass(e.target.value)}
          >
            <option value={FILTERS.energyClass.all}>
              {TEXTS.filters.energyClass.all}
            </option>
            <option value={FILTERS.energyClass.classA}>
              {TEXTS.filters.energyClass.classA}
            </option>
            <option value={FILTERS.energyClass.classB}>
              {TEXTS.filters.energyClass.classB}
            </option>
            <option value={FILTERS.energyClass.classD}>
              {TEXTS.filters.energyClass.classD}
            </option>
          </select>
        </li>
        <li>
          <label htmlFor='cap'>{TEXTS.capacity}</label>
          <select
            name=''
            id='cap'
            onChange={(e) => setCapacity(e.target.value)}
          >
            <option value={FILTERS.capacity.all}>
              {TEXTS.filters.capacity.all}
            </option>
            <option value={FILTERS.capacity.small}>
              {TEXTS.filters.capacity.small}
            </option>
            <option value={FILTERS.capacity.medium}>
              {TEXTS.filters.capacity.medium}
            </option>
            <option value={FILTERS.capacity.large}>
              {TEXTS.filters.capacity.large}
            </option>
          </select>
        </li>
      </ul>
      <div className='counter'>
        <p>{TEXTS.numOfItems}</p>
        <p>{filteredItems.length}</p>
      </div>
    </StyledNav>
  );
};
