import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Task = ({ text, onClickTask, id, name }) => {

    const onChange = useCallback(
        (e) => {
           onClickTask(id)
        },
        [onClickTask, id],
    )
    return (
        <div>
            <div>
                <input type="radio" name={name} id = {id} onChange={onChange} />
                <span>{text}</span>
            </div>
        </div>
    )
}

Task.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func
}
export default Task;