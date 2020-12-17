import React from 'react'

function Display(){
    const team=[
        {name :'Tom'},
        {name :'Chris'},
        {name :'Berlin'},
        {name :'Scott'},
        {name :'Kane'},

    ];

    return (
        <div>
            {team.map(team => (<p>{team.name}</p>))}
        </div>
    );
}

export default Display