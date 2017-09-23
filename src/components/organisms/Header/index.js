import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import IconButton from 'material-ui/IconButton';

const Wrapper = styled(AppBar)`
  margin-bottom: 20px;
`;

const Header = props => {
  return (
    <Wrapper
      title="Ritualy"
      iconElementRight={ <IconButton><i className="material-icons">filter_list</i></IconButton> }
    />
  );
};

export default Header;
