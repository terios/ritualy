import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton';

import { Title2 } from 'components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-around;
`
const WelcomeCard = props => {
    return (
        <Wrapper>
            <Title2 text={props.title} />
            <FlatButton label="Start your journey with us" primary={true} />
        </Wrapper>
    )
}

WelcomeCard.propTypes = {
    title: PropTypes.string.isRequired
}
export default WelcomeCard 