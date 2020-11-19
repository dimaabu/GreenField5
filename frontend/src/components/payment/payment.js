


import React, { Component } from 'react';
import './payment.css'
class Authpage extends Component {
    render () {
        return <div> <h1>Payment page</h1><form>
            <div className ='paymentform'>
                <label for ='idcard'> enter your id card</label>
                <input type = 'string' id = 'num'></input>
                <label for ='ccv'> enter your ccv</label>
                <input type = 'string' id = 'num'></input>
                <label for ='ex'> enter your expiration date</label>
                <input type = 'string' id = 'num'></input>
                <input type='submit' value = 'submit' />

            </div>
          
        </form>
        </div>
    }
}



import './payment.css';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islogin: false,
        }
        this.changeLogInStatus = this.changeLogInStatus.bind(this)
    }
    changeLogInStatus() {
        this.setState({
            islogin: !this.state.islogin
        })
    }
    render() {
        return (
            <div className="imgdiv">
                <div className="row">
                    <div id="payment" className="col-sm-4 right" >
                        <form action="#" className='form1' >
                            <div>
                                <label>Cridet Card Number</label>
                                <input type="string" className="form-control" name="ccnumber" placeholder="Cridet Card Number" />
                            </div>

                            <div>
                                <label>CVV</label>
                                <input className="form-control" name="cvv" placeholder="Your CVV" />
                            </div>
                            <div>
                                <label>Expier Date</label>
                                <input type='date' className="form-control" name="edate" placeholder=" Credit Card Expier Date" />
                            </div>

                            <div style={{ "marginTop": '12px' }}>
                                <input type='button' value='Reade to Go!' className="btn btn-secondary" style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}







import $ from 'jquery'

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cvv: '',
            edate: '',
            ccnumber: ''
        }

        this.handelchange = this.handelchange.bind(this)
        this.checkPayment = this.checkPayment.bind(this)

    }

    handelchange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.value)
    }

    checkPayment() {
        var data = {
            exDate: this.state.edate,
            creditCard: this.state.ccnumber,
            cvv: this.state.cvv
        }
        $.ajax({
            method: 'POST',
            url: '/payment',
            data: data,
            success: function (res) {
                console.log(res)
                alert('enjoy your trip')

            },
            error: function (err) {
                if (err.status === 406)
                    alert('Credit Card Date Expired')
                if (err.status === 401)
                    alert('you enterd wrong information')


            }
        })
    }

    render() {
        return (
            <div className="imgdiv">
                <div className="row">
                    <div id="payment" className="col-sm-4 right" >
                        <form action="#" className='form1' >
                            <div>
                                <label>Credit Card Number</label>
                                <input type="string" className="form-control" name="ccnumber" onChange={this.handelchange} placeholder="Cridet Card Number" />
                            </div>

                            <div>
                                <label>CVV</label>
                                <input className="form-control" name="cvv" onChange={this.handelchange} placeholder="Your CVV" />
                            </div>
                            <div>
                                <label>Expired Date</label>
                                <input type='date' className="form-control" name="edate" onChange={this.handelchange} placeholder=" Credit Card Expier Date" />
                            </div>

                            <div style={{ "marginTop": '12px' }}>
                                <input type='button' value='Ready to Go!' className="btn btn-secondary" onClick={this.checkPayment} style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default Payment;


import React from 'react'
import './payment.css';
import $ from 'jquery'

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cvv: '',
            edate: '',
            ccnumber: '',
            trips:'',
            idOfTourist:''
        }

        this.handelchange = this.handelchange.bind(this)
        this.checkPayment = this.checkPayment.bind(this)

    }

    handelchange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.value)
    }
    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }

    checkPayment() {
        var data = {
            exDate: this.state.edate,
            creditCard: this.state.ccnumber,
            cvv: this.state.cvv
        }
        $.ajax({
            method: 'POST',
            url: '/payment',
            data: data,
            success: function (res) {
                //another ajax to update db !!
                console.log(res)
                //alert('enjoy your trip')
                $.ajax({
                    method:'POST',
                    url:'/gettrips',
                    data:{
                        trips:this.state.trips,
                        idOfTourist:this.state.idOfTourist
                    },
                    success: function(updatedData){
                        if(updatedData.statusCode === 200){
                            console.log(updatedData)
                            alert('Data updated successfully !');
                        } else {
                            alert('Data not updated');
                        }
                    }
                })
            },
            error: function (err) {
                if (err.status === 406)
                    alert('Credit Card Date Expired')
                if (err.status === 401)
                    alert('you enterd wrong information')


            }
        })
    }

    render() {
        return (
            <div className="imgdiv">
                <div className="row">
                    <div id="payment" className="col-sm-4 right" >
                        <form action="#" className='form1' >
                            <div>
                                <label>Credit Card Number</label>
                                <input type="string" className="form-control" name="ccnumber" onChange={this.handelchange} placeholder="Cridet Card Number" />
                            </div>

                            <div>
                                <label>CVV</label>
                                <input className="form-control" name="cvv" onChange={this.handelchange} placeholder="Your CVV" />
                            </div>
                            <div>
                                <label>Expired Date</label>
                                <input type='date' className="form-control" name="edate" onChange={this.handelchange} placeholder=" Credit Card Expier Date" />
                            </div>

                            <div style={{ "marginTop": '12px' }}>
                                <input type='button' value='Ready to Go!' className="btn btn-secondary" onClick={this.checkPayment} style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default Payment;

