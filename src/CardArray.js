import React from 'react';
import Card from './Card';

const CardArray = ({ robots }) => {

    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            name={robots[i].name}
                            id={robots[i].id}
                            email={robots[i].email} />
                    );

                })
            }
        </div>


    )

}

export default CardArray;