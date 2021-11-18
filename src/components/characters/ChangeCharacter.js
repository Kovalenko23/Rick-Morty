import React from "react"


class ChangeCharacter extends React.Component{

handleChange = (event) => { 
    // console.log(event.currentTarget.value)
   const updatedCharacter ={
        ...this.props.item,
        [event.currentTarget.name]: event.currentTarget.value
    }
    console.log(updatedCharacter)
    this.props.updateCharacter(this.props.item.name, updatedCharacter)
}
  
    render(){
        return(
<div className="character-edit">
    
        
    
    <input onChange={this.handleChange} name ='name' type='text' value={this.props.item.name} ></input>
    <select name ='status' className='status' value={this.props.item.status} >
        <option value = 'alive'>Alive</option>
        <option value = 'Dead'>Dead</option>
        <option value = 'unknown'>unknown</option>
    </select>
</div>

        );
    }
}

export default ChangeCharacter