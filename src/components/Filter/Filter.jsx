import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import {setFilter} from 'redux/filter';

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilter = e => {
        const {value} = e.target;
        dispatch(setFilter(value.trim()));
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
