import React from "react";
import {Link} from 'react-router-dom';
import {Container, Navigation} from './Style';

const Header = () => {

    return (
        <Container className="header">
            <Navigation>
                <li><Link to="/portif-lio-react/">Me</Link></li>
                <li><Link to="/portif-lio-react/projetos">Projetos</Link></li>
            </Navigation>
        </Container>
    );

}

export default Header;