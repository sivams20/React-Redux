import React from "react";
import { connect } from "react-redux";

class Settings extends React.Component {
    constructor() {
      super();
    }
    render() {
        const { value, myIncrement, myDecrement, myReset } = this.props;
      return (
        //   <div>
        //       <button onClick={()=>{
        //           dispatch({
        //               type: 'increment'
        //           })
        //       }}>Increment</button>
        //       <button onClick={()=>{
        //           dispatch({
        //               type: 'decrement'
        //           })
        //       }}>Decrement</button>
        //       <button onClick={()=>{
        //           dispatch({
        //               type: 'reset'
        //           })
        //       }}>Reset</button>
        //       <div>
        //           <label>{value}</label>
        //       </div>
        //   </div>

        <div>
              <button onClick={()=>{
                  myIncrement()
              }}>Increment</button>
              <button onClick={()=>{
                  myDecrement()
              }}>Decrement</button>
              <button onClick={()=>{
                  myReset()
              }}>Reset</button>
              <div>
                  <label>{value}</label>
              </div>
          </div>
      );
    }
  }

const mapStateToProps = (state)=>{
    return{
        value: state.value
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        myIncrement: ()=>{
            dispatch({
                type: 'increment'
            })
        },
        myDecrement: ()=>{
            dispatch({
                type: 'decrement'
            })
        },
        myReset: ()=>{
            dispatch({
                type: 'reset'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
