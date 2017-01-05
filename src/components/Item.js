import React from "react";
//import SubItem from './SubItem';


class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showItems : "hideItems"
        }
    }

    handler = (e) => {
        this.setState((this.state.showItems === "hideItems")?{
            showItems : "showItems"
        }:{
            showItems : "hideItems"
        })
    }

    render(){
        
        return(
            <li onClick={this.handler} >{this.props.item.name}
                <ul className={this.state.showItems}>
                    {this.props.item.items.map( (e,i) => {
                        return <li key={i}> {e.name}</li>
                    })}
                </ul>
            </li>
        );
    }
}

export default Item;