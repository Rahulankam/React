import PropTypes from 'prop-types';

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories} </b>
    </li>)
    return (<>
    <h2 className="category">{category}</h2>
        <ol className="items">{listItems}</ol></>);
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, 
                                            name:PropTypes.string,
                                            calories: PropTypes.number
                                                            })),         
}

List.defaultProps = {
    category : "category",
    items : [],
}

export default List;