import Badge from '@material-ui/core/Badge';
import {ShoppingCart} from '@material-ui/icons';

const Bcart= (props)=>(
    <div className={props.clas}>             
    <Badge badgeContent={props.budgeNum} color="primary" className="budger">
    <ShoppingCart fontSize="large" className="" />
</Badge>

</div>
);
export default Bcart;