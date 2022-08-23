import PropTypes from 'prop-types';
import { useSelector, useDispatch} from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import {setFilter} from 'redux/filter';

const Filter = () => {
    // const dispatch = useDispatch();
    // const filter = useSelector(state => state.filter)
    
    const handleFilter = e => {
        console.log(e.target.value);
    };


    return (
        <label> Find contacts by name
            <input type="text" onChange={handleFilter} />
        </label>
    )
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}
