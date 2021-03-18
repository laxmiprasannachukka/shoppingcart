import REACT from "react";


function Price(props){
    return(

        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.data.subscription}</h5>
              <h6 className="card-price text-center">{props.data.currency}{props.data.price}
              <span className="period">{props.data.period}</span></h6>
              <hr/>
              <ul class="fa-ul">
             {
                 props.data.listItems.map((item) => {
                    return !item.isDisabled ? 
                    <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.itemName}</li> : 
                    <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>{item.itemName}</li>
                 })
             }
            </ul>
            <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    )

}
export default Price;