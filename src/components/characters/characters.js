import React from 'react';
import "./characters.css"
import { getCharactersUrl } from '../../constants';
import Character from './character';


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(getCharactersUrl())
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleRemoveCharacter = (item) =>
    this.setState({
      items: this.state.items.filter((i) => i.id !== item.id)
    })


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='listOfCharecters'>
          {items.map(item => (
            <Character key={item.id} item={item} onRemove={this.handleRemoveCharacter} />
          ))}
        </div>
      );
    }
  }
}

export default MyComponent;