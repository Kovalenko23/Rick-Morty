import React from 'react';

class Character extends React.Component {

    handleRemoveCharacter = () => this.props.onRemove(this.props.item);

    render() {
        const { item } = this.props;
        return <div className="charactersList">
            <div className="deleteCharacterButton">
                <button onClick={this.handleRemoveCharacter}>Delete</button>
            </div>
            <div className="charactersName">{item.name}</div>
            <div className="charactersId"> ID: {item.id}</div>
            <div className="charactersGender"> gender: {item.gender}</div>
            <div className="charactersStus">Status:{item.status}</div>
            <div className="charactersImage"><img src={item.image}></img></div>
        </div>
    }
}

export default Character;