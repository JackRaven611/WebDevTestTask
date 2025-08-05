import { StyledNav } from ".";
import { FILTERS, TEXTS } from "../../CONSTS";

export const Nav = () => {
	return (
		<StyledNav>
			<div className='search'>Placeholder</div>
			<ul className='filters'>
				<li>
					<label htmlFor='sort'>{TEXTS.sort}</label>
					<select name='' id='sort'>
						<option value={FILTERS.sort.popular}></option>
						<option value={FILTERS.sort.price}></option>
						<option value={FILTERS.sort.capacity}></option>
					</select>
				</li>
				<li>
					<label htmlFor='func'>{TEXTS.functions}</label>
					<select name='' id='func'>
						<option value={FILTERS.functions.all}></option>
						<option value={FILTERS.functions.addWash}></option>
						<option value={FILTERS.functions.aiPanel}></option>
						<option
							value={FILTERS.functions.inverterMotor}
						></option>
						<option value={FILTERS.functions.screen}></option>
					</select>
				</li>
				<li>
					<label htmlFor='energ'>{TEXTS.energyClass}</label>
					<select name='' id='energ'>
						<option value={FILTERS.energyClass.all}></option>
						<option value={FILTERS.energyClass.classA}></option>
						<option value={FILTERS.energyClass.classB}></option>
						<option value={FILTERS.energyClass.classD}></option>
					</select>
				</li>
				<li>
					<label htmlFor='cap'>{TEXTS.capacity}</label>
					<select name='' id='cap'>
						<option value={FILTERS.capacity.all}></option>
						<option value={FILTERS.capacity.all}></option>
						<option value={FILTERS.capacity.all}></option>
						<option value={FILTERS.capacity.all}></option>
					</select>
				</li>
			</ul>
			<div className='counter'>
				<p>placeholder:</p>
				<p>4</p>
			</div>
		</StyledNav>
	);
};
