import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Rating from './Rating';
import { CartState } from './Context/Context';

const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating  },
    productDispatch,
    } = CartState();
    console.log(byStock, byFastDelivery, sort, byRating )
  return (
    <div className='filter'>
      <h3 className='title'>Filter Products</h3>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={()=>
          productDispatch({
            type:"SORT_BY_PRICE",
            payload:"lowToHigh",
          })}
          checked={sort==="lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={()=>
            productDispatch({
              type:"SORT_BY_PRICE",
              payload:"HighToLow",
            })}
            checked={sort==="HighToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={()=>
            productDispatch({
              type:"FILTER_BY_STOCK",
            })}
            checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delevery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={()=>
            productDispatch({
              type:"FILTER_BY_DELIVERY",
            })}
            checked={byFastDelivery}
        />
      </span>

      <span>
        <label style={{ padding: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onclick={(i) => productDispatch({
            type: "FILTER_BY_RATING",
            payload: i + 1,
          })}
          style={{ cursor: "pointer" }}></Rating>
      </span>
      <Button
      variant='light'
      onClick={()=>
      productDispatch({
        type:"CLEAR_FILTERS",
      })} > Clear Filter</Button>
    </div>
  )
}

export default Filter
