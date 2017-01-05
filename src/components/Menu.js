import React from "react";
import Item from './Item';


class Menu extends React.Component{
    
    render(){
        
        return(
            <ul>
                { this.props.data.map( (e,i) => {
                    return <Item key={i}  item={e}/>
                })}
            </ul>
        );
    }
}

export default Menu;