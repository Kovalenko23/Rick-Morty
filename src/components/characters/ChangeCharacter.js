import React from "react"


class ChangeCharacter extends React.Component{

    render(){
        return(
<div className="character-edit">
    <input name ='name' type='text' placeholder ='NewName'></input>
    <select name ='status' className='status'>
        <option value = 'alive'>Alive</option>
        <option value = 'Dead'>Dead</option>
        <option value = 'unknown'>unknown</option>
    </select>
</div>

        );
    }
}

export default ChangeCharacter