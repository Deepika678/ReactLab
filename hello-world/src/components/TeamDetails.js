import React from 'react'


function TeamDetails(props) {
return (
    <div>
      <h2>Team Details:</h2> 

      <table border="3" align = "center">
      {props.team.map(groupMember => {
      return(
        <tr>
        <td>{groupMember.id}</td>
        <td>{groupMember.name}</td>
        <td>{groupMember.Location}</td>
        </tr>
       )   
    })}
    </table>
    </div>
)
}

export default TeamDetails
