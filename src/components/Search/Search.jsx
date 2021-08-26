import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Search (){
    //const dispatch = useDispatch();

    // const [search, setSearch] = useState('');

    function onSubmit(){
        console.log('Submit works');

        //Dispatch here
    }

    return (
        <div>
            <input 
                type="text"
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={onSubmit}>Search</button>
        </div>
    )
}
export default Search;