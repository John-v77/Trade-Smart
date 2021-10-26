import React from 'react';

function AddTicker(props) {

    const inputStock =(e) => {
        console.log('X')
    }

    const addStockToList =(e)=> {
        console.log('adding items')
    }

    return (
        <div>
            <form className="Search Stock">
                <input type="text" onChange={inputStock}/>
                <button onClick={addStockToList} type='submit'> Add Stock </button>

            </form>
        </div>
    );
}

export default AddTicker;