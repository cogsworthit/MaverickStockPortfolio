import React from 'react';
import Axios from 'axios'
import HealthCheckItem from './HealthCheckItem.jsx';

class HealthCheck extends React.Component {
  constructor(props){
    super(props);
    this.getStockInfo = this.getStockInfo.bind(this);
    this.state = {
      stocksData : ''
    }
  }

  componentDidMount(){
    this.getStockInfo();
  }

  getStockInfo(){
    let stockArr = this.props.stocks.map((stock) => {
      return stock.ticker;
    })
    Axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${stockArr}&types=quote&range=1m&last=5`)
     .then(({data}) => {
       this.setState({
        stocksData: data
       })
     })
  }

  render() {
    return (
      <div>
        <h1>Health Check</h1>
        <div>
          
          <p>Let's do a quick health check on your {this.props.stocks.length} Stocks</p>
          {this.state.stocksData ?  this.props.stocks.map((stock, i) => {
            return (<HealthCheckItem key={i} stockInfo={this.state.stocksData[stock.ticker]}></HealthCheckItem>)
          }) : ''}
        </div>
      </div>
    )
  }
}

export default HealthCheck;