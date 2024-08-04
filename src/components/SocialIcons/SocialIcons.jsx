import React from "react";
import {Container} from './Style';
import linkedin from '../../assets/icons/linkedinRed.png';
import whatsapp from '../../assets/icons/whatsappRed.png';
import gmail from '../../assets/icons/gmailRed.png';
import linkedinWhite from '../../assets/icons/linkedinWhite.png';
import whatsappWhite from '../../assets/icons/whatsappWhite.png';
import gmailWhite from '../../assets/icons/gmailWhite.png';
import githubWhite from '../../assets/icons/githubWhite.png';
import githubRed from '../../assets/icons/githubRed.png';





const SocialIconsLight = ({theme}) => {

    return (
        <Container>
            <a target="_blank" title="Linkedin" href="https://www.linkedin.com/in/carolini-oliveira/"><img src={theme ? linkedin : linkedinWhite}/></a>
            <a target="_blank" title="Whatsapp" href="https://api.whatsapp.com/send?phone=5553984646187&text=Ola%2C%20eu%20visitei%20seu%20portifólio!"><img src={theme ? whatsapp : whatsappWhite}/></a>
            <a target="_blank" title="GitHub" href="https://github.com/carolinitsi"><img src={theme ? githubRed : githubWhite}/></a>
        </Container>

    );

}

export default SocialIconsLight;