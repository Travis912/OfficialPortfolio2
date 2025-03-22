
import PropTypes from 'prop-types';

export default function LamboDropdown({ dropdown }) {
    if (dropdown === 'closed') {
        return null;
    } else if (dropdown === 'models') {
        return (
            <div className="lambo-dropdown-div">
                <ul className='lambo-dropdown-ul'>
                    <li>model</li>
                    <li>model</li>
                    <li>model</li>
                    <li>model</li>
                </ul>
            </div>
        );
    }
}

LamboDropdown.propTypes = {
    dropdown: PropTypes.string.isRequired,
};