import React from 'react';

const SearchLocation = ({ onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3' >
			 {'This Magic will find your city weather. Give it a try!' }
			</p>
			<div className='center lg'>
				<div className='form2 center pa4 br3 shadow-5 lg'>
					<input
						placeholder='Enter a city name' className='f4 pa2 w-70 center' type='tex'
						onChange = { onInputChange }
					/>
					<button
						className='w-30 grow f4 link ph3 pv2 dib white lg'
						onClick = { onButtonSubmit }
					>
						Find
					</button>
				</div>
			</div>
		</div>

	);
}

export default SearchLocation;
