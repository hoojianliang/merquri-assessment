import { Transition } from 'react-transition-group';
import { useRef } from 'react';

export function MyTooltip(props) {
    const { searchText, names, setSuggestionText } = props;
    const nodeRef = useRef(null)
    const transitions = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    const namesList = names.map(function (name, key) {
        return <li key={key} onClick={() => setSuggestionText(name)}>{name}</li>;
    })

    return (
        <Transition nodeRef={nodeRef} in={names.length > 0} timeout={0} >
            {state => (
                <div ref={nodeRef} className="assessment-tooltip" style={{
                    ...transitions[state]
                }}>
                    <div className="assessment-tooltip-content">
                        {names.length ?
                            <ul className="separator">{namesList}</ul>
                            :
                            <span>{searchText ? searchText : "No Results"}</span>
                        }
                    </div>
                </div>
            )}
        </Transition>
    );
}