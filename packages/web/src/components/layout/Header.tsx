import './Header.scss'

import { useCallback, useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import { LogIn } from "@blueprintjs/icons";
import { Navbar, Button, Switch, FormGroup } from "@blueprintjs/core";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDAndD } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  const onChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setDarkMode(event.currentTarget.checked);
  }, [setDarkMode])

  const openRepo = useCallback(() => {
    window.open('https://github.com/mhornbacher/tabletop', '_blank');
  }, [])

  return (
    <Navbar fixedToTop id="header">

      <Navbar.Group align="left">
        <Navbar.Heading><FontAwesomeIcon icon={faDAndD} /> TableTop</Navbar.Heading>
      </Navbar.Group>

      <Navbar.Group align="right">
        <Button minimal icon={<LogIn />} text="Log In" />
        <Navbar.Divider />
        <FormGroup>
          <Switch
            innerLabel="🌞"
            innerLabelChecked="🌚" large
            checked={!!darkMode}
            onChange={onChange} />
        </FormGroup>
        <Button minimal icon={<FontAwesomeIcon icon={faGithub} />} onClick={openRepo} />
      </Navbar.Group>
    </Navbar>
  )
}
