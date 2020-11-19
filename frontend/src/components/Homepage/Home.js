import React from 'react';
import '../../../src/App.css';
import './A-Style.css';
import Section from './Section';
import AboutUs from './AboutUs';
import Cards from './Cards';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <>
                <Section />
                <AboutUs />
                <Cards lable1={this.props.hello} getup={this.props.getup} />
            </>
        )
    }
}
export default Home;