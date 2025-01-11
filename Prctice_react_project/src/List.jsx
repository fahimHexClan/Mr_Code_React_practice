import PropTypes from 'prop-types'
function List(props){
    const category = props.category;
    const itemList=props.items;

 {/*  const fruits =["apple","banana","orange","cocounut","pineapple"]
    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return(<ul>{listItems}</ul>);
*/ } 

    


   // fruits.sort((a,b)=> a.name.localeCompare(b.name));//Alphabetical
   //  fruits.sort((a,b)=> b.name.localeCompare(a.name));//Reverse Alphabetical
    //  fruits.sort((a,b)=> b.calories - a.calories);//Reverse Numeric
     // fruits.sort((a,b)=> a.calories - b.calories);// Numeric

     

   const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}:&nbsp;
                                           <b>{item.calories}</b></li>);



  // const lowCalFruits = fruits.filter(fruit=>fruit.calories <100);
 // const lowCalFruits = fruits.filter(fruit=>fruit.calories >=100);

 // const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
   //                                         {lowCalFruits.name}:&nbsp;
  //                                           <b>{lowCalFruits.calories}</b></li>);

    return(<>
            <h3 className="category">{category}</h3>
            <ol className="items">{listItems}</ol>
            </>
           );


}
List.PropTypes ={// types tika define karaganna
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
                                             id:PropTypes.number,
                                             name:PropTypes.string,
                                             calories:PropTypes.number   
                                            })),
}
List.defaultProps ={// mokuth data neththm meka show wenawa
    category:"Category",
    items:[],
}

export default List