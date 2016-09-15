import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class User extends Component {
    doSomething(value) {
        console.log('doSomething called by child with value:', value);
    }

    render() {
        const { name, surname } = this.props
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                doSomething: this.doSomething,
                value: 123
            })
        );
        
        return (
            <div className='userBlock'>
                <p>Привет, {name} {surname}!</p>
                <Link to='/user/child' activeClassName='active'>Show child</Link>
                <div>{childrenWithProps}</div>
            </div>
        )
    }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
}

function mapStateToProps (state) {
    return {
        name: state.user.name,
        surname: state.user.surname
    }
}

export default connect(mapStateToProps)(User)